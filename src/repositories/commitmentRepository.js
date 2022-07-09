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
        ORDER BY year, month, week, day, "startHour";
    `, [userId]);

    return results.rows;
}

async function findById(id){
    const results = await connection.query(`
        SELECT * FROM commitments WHERE id=$1;
    `, [id]);

    return results.rows[0];
}

async function update(
    commitmentId,
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
        UPDATE commitments 
        SET 
            type=$1, 
            place=$2, 
            "startHour"=$3, 
            "finishHour"=$4, 
            "alarmHour"=$5, 
            year=$6, 
            month=$7, 
            week=$8,
            day=$9
        WHERE id=$10
    `, [type, place, startHour, finishHour, alarmHour, year, month, week, day, commitmentId]);
}

export {
    insert,
    list,
    findById,
    update
}