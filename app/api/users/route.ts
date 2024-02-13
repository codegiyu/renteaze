import joi from 'joi';

import { usersRepo } from '@/app/_server/utils';
import { apiHandler } from '@/app/_server/api';

module.exports = apiHandler({
    GET: getAll,
    POST: create
});

async function getAll() {
    return await usersRepo.getAll();
}

async function create(req: Request) {
    const body = await req.json();
    await usersRepo.create(body);
}

const phoneRegex = /^\+\d{1,3}\d{12}$/;

create.schema = joi.object({
    firstName: joi.string().min(3).required().messages({
        "any.min": "firstName should have at least 3 characters",
        "any.required": "firstName field is required",
    }),
    lastName: joi.string().min(3).required().messages({
        "any.min": "lastName should have at least 3 characters",
        "any.required": "lastName field is required",
    }),
    email: joi.string().email().required().messages({
        "string.email": "Your email is not valid",
        "any.required": "'email' field is required",
    }),
    password: joi.string().min(6).max(25).required().messages({
        "any.min": "Password should have at least 6 characters",
        "any.max": "Password should have at most 25 characters",
        "any.required": "'password' field is required",
    }),
    phone: joi.string().pattern(phoneRegex).required().messages({
        "any.pattern": "phone field is not a valid phone number",
        "any.required": "'phone' field is required"
    }),
    role: joi.string().allow("Agent", "Developer", "Landlord", "User").required().messages({
        "any.allow": "Role must be 'Agent', 'Developer', 'Landlord', or 'User'.",
        "any.required": "'role' field is required"
    })
});