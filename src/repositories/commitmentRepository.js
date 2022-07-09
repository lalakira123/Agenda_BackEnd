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

async function list(userId, order, number){
    const results = await connection.query(`
        SELECT * FROM commitments WHERE "userId"=$1 
        AND ${order}=${number}
        ORDER BY "startHour";
    `, [userId]);

    return results.rows;
}

export {
    insert,
    list
}