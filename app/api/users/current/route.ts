import { usersRepo } from '@/app/_server/utils';
import { apiHandler } from '@/app/_server/api';

module.exports = apiHandler({
    GET: getCurrent
});

async function getCurrent() {
    return await usersRepo.getCurrent();
}