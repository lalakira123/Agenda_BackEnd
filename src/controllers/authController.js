import * as authService from './../services/authService.js';

export async function signUp(req, res){
    const { name, email, password } = req.body;
    
    await authService.signUp(name, email, password);

    res.sendStatus(201);
}

export async function signIn(req, res){
    const { email, password } = req.body;

    const infoUser = await authService.signIn(email, password);

    res.status(200).send(infoUser);
}