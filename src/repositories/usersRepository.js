import { connection } from "./../config /db.js";

async function findByEmail(email){
    const result = await connection.query(
        `SELECT * FROM users WHERE email=$1;`,
        [email]
    );

    return result.rows[0];
}

async function findById(id){
    const result = await connection.query(
        `SELECT * FROM users WHERE id=$1`,
        [id]
    );

    return result.rows[0];
}

async function insert(name, email, hashPassword){
    await connection.query(
        `
        INSERT INTO users (username, email, password)
        VALUES ($1, $2, $3);
        `,
        [name, email, hashPassword]
    );
}

export {
    findByEmail,
    insert,
    findById
}