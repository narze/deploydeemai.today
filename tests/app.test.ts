import { expect, test } from '@playwright/test';

test('home page asks whether to deploy', async ({ page }) => {
	await page.goto('/');

	await expect(page).toHaveTitle('Deploy ดีไหม?');
	await expect(page.getByRole('heading', { name: 'Deploy ดีไหม?' })).toBeVisible();
});

test('API returns deployment advice', async ({ request }) => {
	const response = await request.get('/api?day=1&tz=Asia/Bangkok');

	expect(response.ok()).toBe(true);
	expect(await response.json()).toEqual({
		message: expect.any(String),
		deploydeemai: true,
		timezone: 'Asia/Bangkok',
	});
});
