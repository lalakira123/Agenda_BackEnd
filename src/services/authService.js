import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import * as usersRepository from './../repositories/usersRepository.js';

import { conflict, forbidden, notFound } from './../middlewares/handleErrorMiddleware.js';

dotenv.config();

async function signUp(name, email, password){
    const existUser = await usersRepository.findByEmail(email);
    if(existUser) throw conflict();

    const hashPassword = encryptPassword(password);

    await usersRepository.insert(name, email, hashPassword);
}

function encryptPassword(password){
    const SALT = 10;
    const hashPassword = bcrypt.hashSync(password, SALT);
    return hashPassword;
}

async function signIn(email, password){
    const existUser = await usersRepository.findByEmail(email);
    if(!existUser) throw notFound();

    const encryptedPassword = existUser.password;
    const validatePassword = comparePassword(password, encryptedPassword);
    if(!validatePassword) throw forbidden();

    const username = existUser.username;
    const userId = { userId: existUser.id };

    const token = generateToken(userId);

    return {token, username};
}

function comparePassword(password, encryptedPassword){
    return bcrypt.compareSync(password, encryptedPassword);
}

function generateToken(info){
    const secretKey = process.env.JWT_TOKEN;
    const twelveHours = 60*60*12;
    const config = { expiresIn: twelveHours };
    return jwt.sign(info, secretKey, config);
}

export {
    signUp,
    signIn
}