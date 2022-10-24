import { getReasons, verifyTimezone } from '$lib/helper';
import type { RequestHandler } from './__types';

// TODO: receive timezone params

export const GET: RequestHandler = async (event) => {
	const day = event.url.searchParams.get('day');
	const { reasons, deploydeemai } = getReasons(day ? +day : undefined);
	const reason = reasons[Math.floor(Math.random() * reasons.length)];

	const tz = event.url.searchParams.get('tz') || '';
	const timezone = verifyTimezone(tz) ? tz : 'Asia/Bangkok';

	return {
		body: {
			message: reason,
			deploydeemai,
			timezone,
		},
	};
};
