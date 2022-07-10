import { connection } from "./../config /db.js";

async function post(commitmentId, name, email){
    await connection.query(`
        INSERT INTO participants ("commitmentId", name, email)
        VALUES ($1, $2, $3);
    `, [commitmentId, name, email]);
}

async function findById(id){
    const result = await connection.query(`
        SELECT * FROM participants
        WHERE id=$1
    `, [id]);

    return result.rows[0];
}

async function list(commitmentId){
    const result = await connection.query(`
        SELECT * FROM participants
        WHERE "commitmentId" = $1
    `, [commitmentId]);

    return result.rows;
}

async function deleteParticipant(id){
    await connection.query(`
        DELETE FROM participants 
        WHERE id = $1;
    `, [id]);
}

export {
    post,
    findById,
    list,
    deleteParticipant
}