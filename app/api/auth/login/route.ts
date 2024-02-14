import joi from 'joi';

import { usersRepo } from '@/app/_server/utils';
import { apiHandler } from '@/app/_server/api';
import { cookies } from 'next/headers';

module.exports = apiHandler({
    POST: login
});

async function login(req: Request) {
    const body = await req.json();
    const { user, token } = await usersRepo.authenticate(body);

    // return jwt token in http only cookie
    cookies().set('authorization', token, { httpOnly: true });

    return user;
}

login.schema = joi.object({
    email: joi.string().email().required().messages({
        "string.email": "Your email is not valid",
        "any.required": "'email' field is required",
    }),
    password: joi.string().required().messages({
        "any.required": "'password' field is required",
    })
});