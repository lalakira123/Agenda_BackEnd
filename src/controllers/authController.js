import * as authService from './../services/authService.js';

export async function signUp(req, res){
    const { name, email, password } = req.body;
    
    await authService.signUp(name, email, password);

    res.sendStatus(201);
}