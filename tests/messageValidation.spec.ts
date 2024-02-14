import { test, expect } from '@playwright/test';

test.describe('erify validation message for incorrect email value', async () =>{
  test('Test3', async ({page}) =>{

  // Go to the SAP Fioneer page
  await page.goto('https://www.sapfioneer.com'); 
  const button = await page.$('li.html.header-button-1 > div.header-button > a.button.primary');
  // Click on the Get in touch button
  //await page.locator('li.html.header-button-1 > div.header-button > a.button.primary[locator="masthead"]:has-text("Get in touch")').click();
  if (button !== null){
 
  //await page.waitForSelector('a.button.primary[locator="masthead"]');
  //const buttonLocator = page.locator('a.button.primary[locator="masthead"]');
  await button.click();
} else {
  throw new Error("Element is null. Unable to call someFunction.");
};

  // Verify if the user has been redirected to the correct page
  const redirectedUrl = page.url();
  await expect(redirectedUrl).toContain('/contact');

  // Type incorrect email value in the Work email field
// Switch to the iframe containing the email input field
const frame2 = await page.frameLocator('iframe[title="Form 0"]').first();
const emailInput = await frame2.getByLabel('Work email*');

// Fill the email input field with a value
await emailInput.fill('342323');

const submitButton = await frame2.getByRole('button', { name: 'Submit' });

// Click the submit button within the iframe
await submitButton.click();

  // Wait for the validation message to appear
 // Wait for the error message to appear
await frame2.frameLocator('ul.no-list.hs-error-msgs.inputs-list');
//if (button !== null){
// Assert the presence of the error message
const errorMessages = await frame2.locator('ul.no-list.hs-error-msgs.inputs-list').count();

// Sprawdź, czy żadne komunikaty błędów nie zostały znalezione
expect(errorMessages).toBeGreaterThan(0);

const errorMessageElement = await frame2.locator('ul.no-list.hs-error-msgs.inputs-list').first();
const errorMessageText = await errorMessageElement.textContent();


});
});