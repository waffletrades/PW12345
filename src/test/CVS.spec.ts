import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.cvs.com/');
  await page.locator('.shpimg').first().click();
  await page.getByRole('link', { name: 'New arrivals' }).click();
  await page.getByLabel('Choose options for Covergirl Simply Ageless Skin Perfector Essence Foundation, 1.05oz').click();
  await page.getByRole('listbox').getByText('Light Medium').click();
  await page.getByLabel('Light', { exact: true }).locator('div').first().click();
  await page.getByRole('button', { name: 'Add for shipping' }).click();
  await page.getByLabel('Close Side Panel').click();
});