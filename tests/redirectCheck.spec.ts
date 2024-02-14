import { test, expect } from '@playwright/test';

test.describe('Verify redirection to ESG KPI Engine page', async () =>{
test('Test2', async ({page}) =>{
  await page.goto('https://www.sapfioneer.com');

  // Click on the Finance & ESG bookmark
  await page.locator('#menu-item-29979').getByRole('link', { name: 'Finance & ESG' }).click();
  await page.click('a.ux-menu-link__link span:has-text("ESG KPI Engine")');

  // Click on the Finance & ESG bookmark using the defined locator
  await page.reload();

  // Get the title of the current page
  const pageTitle = await page.title();

  // Assert that the title matches the expected title
  await expect(pageTitle).toBe('Stay audit-ready with the ESG KPI Engine | SAP Fioneer');
});
});
