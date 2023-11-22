// import isEmail from 'validator/es/lib/isEmail';
// import pool from '../utils/db';

export default defineEventHandler(async (e) => {
    if(e.node.req.method !== 'POST') {return} 
    // let {email} = await readBody<{email: string}>(e);
    // const error=createError({
    //     status: 304,
    //     statusMessage: 'Invalid Email Address!',
    // });
    // if (!isEmail(email)) {
    //     throw error;
    // }
    // email = pool.escapeLiteral(email.toLowerCase());
    // let results = await pool.query(`SELECT email FROM signup WHERE email = ${email}`).catch(e=>{throw e});
    // let res = results.rows[0]?.email;
    // console.log(res);
    // if (res) {
    //     error.statusMessage='This email is already subscribed!';
    //     throw error;
    // }
    // await pool.query(`INSERT INTO signup (email) VALUES (${email})`).catch(e=>{error.statusMessage='This email address has been registered already!';console.log(`%c${e}`, 'color: red');throw error;});
    // await e.respondWith(new Response(null, {
    //     status: 200,
    //     statusText: '* Subscription Successful',
    // }))
})