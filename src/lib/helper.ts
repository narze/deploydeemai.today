// Credits: https://github.com/baires/shouldideploy/blob/master/helpers/reasons.js

import dayjs from 'dayjs';

function getDayOfWeek(day: number): string {
	return (
		{
			'0': 'Sunday',
			'1': 'Monday',
			'2': 'Tuesday',
			'3': 'Wednesday',
			'4': 'Thursday',
			'5': 'Friday',
			'6': 'Saturday'
		}[day] || '-'
	);
}

export const REASONS_TO_NOT_DEPLOY = [
	'ไม่แนะนำให้ Deploy วันนี้',
	'ไม่ล่ะ วันนี้วันศุกร์นะ',
	'Deploy วันจันทร์แทนดีไหม',
	'ไม่',
	'ม่ายยยยย',
	'ทำไมล่ะ?',
	'เทสต์ผ่านหรือยัง?',
	'¯\\_(ツ)_/¯',
	'😹',
	'มั่ย',
	'ไม่ สูดหายใจเข้าลึกๆ นับหนึ่งถึงสิบ แล้วลองใหม่',
	'ไปกินไอติมดีกว่าม้าง 🍦',
	'ต่อหน้าฉันเธอทำอย่างนั้นได้อย่างไร? 🥺'
];

export const REASONS_FOR_WEEKEND = [
	'เมาแล้ว กลับบ้านเถอะ',
	'Deploy วันจันทร์แทนดีไหม',
	'กินเบียร์ไหม?',
	'การดื่มสุราทำให้สมรรถภาพเสื่อม',
	'Deploy วันศุกร์ไปแล้วสินะ',
	'บอกแล้วว่า Deploy วันจันทร์ก็ไม่เชื่อ'
];

export function getReasons(day = dayjs().day()) {
	// const day = dayjs().day();
	console.log({ day: getDayOfWeek(day) });

	if (getDayOfWeek(day) === 'Friday') {
		return REASONS_TO_NOT_DEPLOY;
	}

	if (['Saturday', 'Sunday'].includes(getDayOfWeek(day))) {
		return REASONS_FOR_WEEKEND;
	}
	// if (time.isFriday13th()) {
	//   return REASONS_FOR_FRIDAY_13TH
	// }

	// if (time.isFridayAfternoon()) {
	//   return REASONS_FOR_FRIDAY_AFTERNOON
	// }

	// if (time.isFriday()) {
	//   return REASONS_TO_NOT_DEPLOY
	// }
	// if (time.isThursdayAfternoon()) {
	//   return REASONS_FOR_THURSDAY_AFTERNOON
	// }
	// if (time.isAfternoon() && !time.isWeekend()) {
	//   return REASONS_FOR_AFTERNOON
	// }
	// if (time.isWeekend()) {
	//   return REASONS_FOR_WEEKEND
	// }
	// return REASONS_TO_DEPLOY
	return ['OK'];
}
