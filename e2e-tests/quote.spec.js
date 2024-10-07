// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Quote' }).click();

  await expect(
    page.getByText(
      'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
    ),
  ).toBeVisible();
});
