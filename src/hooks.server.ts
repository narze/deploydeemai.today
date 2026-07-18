import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const userid = event.cookies.get('userid');
	event.locals.userid = userid || crypto.randomUUID();

	if (!userid) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		event.cookies.set('userid', event.locals.userid, {
			path: '/',
			httpOnly: true,
		});
	}

	return resolve(event);
};
