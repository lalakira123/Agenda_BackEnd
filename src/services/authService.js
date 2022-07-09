import bcrypt from 'bcrypt';

import * as usersRepository from './../repositories/usersRepository.js';

import { conflict } from './../middlewares/handleErrorMiddleware.js';

async function signUp(name, email, password){
    const existUser = await usersRepository.findByEmail(email);
    console.log(existUser);
    if(existUser) throw conflict();

    const hashPassword = encryptPassword(password);

    await usersRepository.insert(name, email, hashPassword);
}

function encryptPassword(password){
    const SALT = 10;
    const hashPassword = bcrypt.hashSync(password, SALT);
    return hashPassword;
}

export {
    signUp
}