import { getReasons } from '$lib/helper';
import type { RequestHandler } from './__types';

// TODO: receive timezone params

export const GET: RequestHandler = async (event) => {
	const day = event.url.searchParams.get('day');
	const reasons = getReasons(day ? +day : undefined);
	const reason = reasons[Math.floor(Math.random() * reasons.length)];

	return {
		body: {
			message: reason,
		},
	};
};
