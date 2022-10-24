// Credits: https://github.com/baires/shouldideploy/blob/master/helpers/reasons.js

import dayjs from 'dayjs';

import { FRIDAY_REASONS, WEEKEND_REASONS, REASONS_TO_DEPLOY } from './reasons';
import { TIMEZONES } from './timezones';

function getDayOfWeek(day: number): string {
	return (
		{
			'0': 'Sunday',
			'1': 'Monday',
			'2': 'Tuesday',
			'3': 'Wednesday',
			'4': 'Thursday',
			'5': 'Friday',
			'6': 'Saturday',
		}[day] || '-'
	);
}

export function getReasons(day = dayjs().day()) {
	const dayOfWeek = getDayOfWeek(day);

	if (dayOfWeek === 'Friday') {
		return {
			reasons: FRIDAY_REASONS,
			deploydeemai: false,
		};
	}

	if (['Saturday', 'Sunday'].includes(dayOfWeek)) {
		return {
			reasons: WEEKEND_REASONS,
			deploydeemai: false,
		};
	}

	// if (time.isFriday13th()) {
	//   return REASONS_FOR_FRIDAY_13TH
	// }

	// if (time.isFridayAfternoon()) {
	//   return REASONS_FOR_FRIDAY_AFTERNOON
	// }

	// if (time.isThursdayAfternoon()) {
	//   return REASONS_FOR_THURSDAY_AFTERNOON
	// }
	// if (time.isAfternoon() && !time.isWeekend()) {
	//   return REASONS_FOR_AFTERNOON
	// }
	// if (time.isWeekend()) {
	//   return WEEKEND_REASONS
	// }

	return {
		reasons: REASONS_TO_DEPLOY,
		deploydeemai: true,
	};
}

export function verifyTimezone(tz: string): boolean {
	return TIMEZONES.includes(tz);
}
