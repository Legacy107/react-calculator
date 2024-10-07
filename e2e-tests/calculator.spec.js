// @ts-check
const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Calculator' }).click();
});

test('has title', async ({ page }) => {
  await expect(page.getByRole('heading', { name: "Let's do some math!" })).toBeVisible();
});

test('can do calculations', async ({ page }) => {
  await expect(page.locator('div').filter({ hasText: /^0$/ })).toBeVisible();
  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: '+', exact: true }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('div').filter({ hasText: /^3$/ })).toBeVisible();
  await page.getByRole('button', { name: 'AC' }).click();
  await expect(page.locator('div').filter({ hasText: /^0$/ })).toBeVisible();
  await page.getByRole('button', { name: '5' }).click();
  await page.getByRole('button', { name: 'X' }).click();
  await page.getByRole('button', { name: '6' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await page.getByRole('button', { name: '-', exact: true }).click();
  await page.getByRole('button', { name: '7' }).click();
  await page.getByRole('button', { name: '=' }).click();
  await expect(page.locator('div').filter({ hasText: /^23$/ })).toBeVisible();
});
