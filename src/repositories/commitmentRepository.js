import { connection } from "./../config /db.js";

async function insert(
    userId,
    type,
    place,
    startHour,
    finishHour,
    alarmHour,
    year,
    month,
    week,
    day
){
    await connection.query(`
        INSERT INTO commitments (
            "userId", 
            type, 
            place, 
            "startHour", 
            "finishHour", 
            "alarmHour", 
            year, 
            month, 
            week, 
            day
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    `, [userId, type, place, startHour, finishHour, alarmHour, year, month, week, day]
    );
}

export {
    insert
}