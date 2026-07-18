import { getReasons, verifyTimezone } from '$lib/helper';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

// TODO: receive timezone params

export const GET: RequestHandler = ({ url }) => {
	const day = url.searchParams.get('day');
	const { reasons, deploydeemai } = getReasons(day ? +day : undefined);
	const reason = reasons[Math.floor(Math.random() * reasons.length)];

	const tz = url.searchParams.get('tz') || '';
	const timezone = verifyTimezone(tz) ? tz : 'Asia/Bangkok';

	return json({
		message: reason,
		deploydeemai,
		timezone,
	});
};
