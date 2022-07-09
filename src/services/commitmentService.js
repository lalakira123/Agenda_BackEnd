import dayjs from 'dayjs';
import weekOfYear from 'dayjs/plugin/weekOfYear.js';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

import { notFound, unprocessableEntity, forbidden } from './../middlewares/handleErrorMiddleware.js';

import * as usersRepository from './../repositories/usersRepository.js';
import * as commitmentRepository from './../repositories/commitmentRepository.js';

async function postCommitment(userId, infoCommitment){
    const { type, place, startHour, finishHour, alarmHour, date } = infoCommitment;

    const existUser = await usersRepository.findById(userId);
    if(!existUser) throw notFound();

    compareHour(startHour, finishHour);
    compareHour(alarmHour, startHour);

    const {day, month, year} = sliceDate(date);

    const weekOfYear = findWeekOfYear(date);

    await commitmentRepository.insert(
        userId, type, place, startHour, finishHour, alarmHour, year, month, weekOfYear, day
    );
}

function compareHour(firstHour, secondHour){
    dayjs.extend(customParseFormat);
    const differenceHours = dayjs(secondHour, 'HH:mm').diff(dayjs(firstHour, 'HH:mm'));
    if(differenceHours <= 0) throw unprocessableEntity();
}

function sliceDate(date){
    const arrayDate = date.split('-');
    const day = arrayDate[2];
    const month = arrayDate[1];
    const year = arrayDate[0];

    return {day, month, year};
}

function findWeekOfYear(date){
    dayjs.extend(weekOfYear);
    const week = dayjs(date).week();
    return week;
}

async function listCommitments(userId, order, number){
    const existUser = await usersRepository.findById(userId);
    if(!existUser) throw notFound();

    const arrayCommitments = await commitmentRepository.list(userId, order, number);

    return arrayCommitments;
}

async function updateCommitment(commitmentId, userId, infoCommitment){
    const { type, place, startHour, finishHour, alarmHour, date } = infoCommitment;

    const commitmentExist = await commitmentRepository.findById(commitmentId);
    if(!commitmentExist) throw notFound();
    if(commitmentExist.userId != userId) throw forbidden();

    compareHour(startHour, finishHour);
    compareHour(alarmHour, startHour);

    const {day, month, year} = sliceDate(date);

    const weekOfYear = findWeekOfYear(date);

    await commitmentRepository.update(
        commitmentId, type, place, startHour, finishHour, alarmHour, year, month, weekOfYear, day
    );
}

export {
    postCommitment,
    listCommitments,
    updateCommitment
}