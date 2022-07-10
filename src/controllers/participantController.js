import * as participantService from './../services/participantService.js';

export async function postParticipant(req, res){
    const { commitmentId, name, email } = req.body;
    const { userId } = res.locals;

    await participantService.postParticipant(userId, commitmentId, name, email);

    res.sendStatus(201);
}

export async function listParticipants(req, res){
    const { commitmentId } = req.body;

    const participants = await participantService.listParticipant(commitmentId);

    res.status(200).send(participants);
}

export async function deleteParticipant(req, res){
    const { id } = req.params;

    await participantService.deleteParticipant(id);

    res.sendStatus(200);
}
