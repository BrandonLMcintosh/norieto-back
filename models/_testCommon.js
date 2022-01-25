const bcrypt = require('bcrypt');
const db = require('../db/db');
const {BCRYPT_WORK_FACTOR} = require('../config');

async function commonBeforeAll(){
    await db.query('DELETE FROM users');
    async function _addTestUser(username, password, map){
        const hashedPassword = bcrypt.hash(password, BCRYPT_WORK_FACTOR);
        await db.query(
            `INSERT INTO users
            (username, password, map)
            VALUES (
                $1, $2, $3
            )`, [username, hashedPassword, map]);
    }

    await _addTestUser("test1", "password1", {});
    await _addTestUser("test2", "password2", {});
    await _addTestUser("test3", "password3", {});
}

async function commonBeforeEach(){
    await db.query("BEGIN");
}

async function commonAfterEach(){
    await db.query("ROLLBACK");
}

async function commonAfterAll(){
    await db.end();
}

module.exports = {
    commonAfterAll,
    commonBeforeAll,
    commonAfterEach,
    commonBeforeEach
}