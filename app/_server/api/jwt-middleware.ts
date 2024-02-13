import { NextRequest } from 'next/server';

import { auth } from '@/app/_server/utils';

export { jwtMiddleware };

async function jwtMiddleware(req: NextRequest) {
    if (isPublicPath(req))
        return;

    // verify token in request cookie
    const id = auth.verifyToken();
    req.headers.set('userId', id);
}

function isPublicPath(req: NextRequest) {
    // public routes that don't require authentication
    const publicPaths = [
        'POST:/api/auth/login',
        'POST:/api/auth/logout',
        'POST:/api/auth/register',
        'GET:/api/users'
    ];
    return publicPaths.includes(`${req.method}:${req.nextUrl.pathname}`);
}