import isEmail from 'validator/es/lib/isEmail';

export default defineEventHandler(async (e) => {
    const {email} = await readBody<{email: string}>(e);
    const error=createError({
        status: 304,
        statusMessage: 'Invalid Email Address!',
    });
    if (!isEmail(email)) {
        throw error;
    }
    if ((await useStorage().getItem(email))) {
        error.statusMessage='This email is already subscribed!';
        throw error;
    }
    await useStorage().setItem(email, true);
    await e.respondWith(new Response(null, {
        status: 200,
        statusText: '* Subscription Successful',
    }))
})