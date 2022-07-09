import * as commitmentService from './../services/commitmentService.js';

export async function postCommitment(req, res){
    const { userId } = res.locals;
    const infoCommitment = req.body;

    await commitmentService.postCommitment(userId, infoCommitment);

    res.sendStatus(201);
}

export async function listCommitments(req, res){
    const { order } = req.params;
    const { number } = req.query;
    const { userId } = res.locals;

    const commitments = await commitmentService.listCommitments(userId, order, number);

    res.send(commitments);
}

export async function updateCommitment(req, res){
    const { id } = req.params;
    const { userId } = res.locals;
    const infoCommitment = req.body;

    await commitmentService.updateCommitment(id, userId, infoCommitment);

    res.sendStatus(200);
}

export async function deleteCommitment(req, res){
    const { id } = req.params;
    const { userId } = res.locals;

    await commitmentService.deleteCommitment(id, userId);

    res.sendStatus(200);
}