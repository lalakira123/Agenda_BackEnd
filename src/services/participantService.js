import { notFound, forbidden } from './../middlewares/handleErrorMiddleware.js';

import * as commitmentRepository from './../repositories/commitmentRepository.js';
import * as participantRepository from './../repositories/participantsRepository.js';

async function postParticipant(userId, commitmentId, name, email){
    const commitmentExist = await commitmentRepository.findById(commitmentId);
    if(!commitmentExist) throw notFound();
    if(commitmentExist.userId != userId) throw forbidden();

    await participantRepository.post(commitmentId, name, email);
}

async function listParticipant(commitmentId){
    const commitmentExist = await commitmentRepository.findById(commitmentId);
    if(!commitmentExist) throw notFound();

    const participants = await participantRepository.list(commitmentId);

    return participants;
}

async function deleteParticipant(participantId){
    const existParticipant = await participantRepository.findById(participantId);
    if(!existParticipant) throw notFound();

    await participantRepository.deleteParticipant(participantId);
}

export {
    postParticipant,
    listParticipant,
    deleteParticipant
}