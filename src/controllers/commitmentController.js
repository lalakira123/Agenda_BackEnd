import * as commitmentService from './../services/commitmentService.js';

export async function postCommitment(req, res){
    const { userId } = res.locals;
    const infoCommitment = req.body;

    await commitmentService.postCommitment(userId, infoCommitment);

    res.sendStatus(201);
}