import { test, expect } from '@playwright/test';

test.describe('erify validation message for incorrect email value', async () =>{
  test('Test3', async ({page}) =>{

    // Go to the SAP Fioneer page
    await page.goto('https://www.sapfioneer.com'); 
    const button = await page.$('li.html.header-button-1 > div.header-button > a.button.primary');
    
    // Click on the Get in touch button
    if (button !== null){
      await button.click();
    } else {
      throw new Error("Element is null. Unable to call someFunction.");
      };

    // Verify if the user has been redirected to the correct page
    const redirectedUrl = page.url();
    await expect(redirectedUrl).toContain('/contact');

    // Type incorrect email value in the Work email field and submit
    const frame2 = await page.frameLocator('iframe[title="Form 0"]').first();
    const emailInput = await frame2.getByLabel('Work email*');
    await emailInput.fill('342323');  

    const submitButton = await frame2.getByRole('button', { name: 'Submit' });
    await submitButton.click();

    // Wait for the validation message to appear
    await frame2.frameLocator('ul.no-list.hs-error-msgs.inputs-list');

    // Assert the presence of the error message
    const errorMessages = await frame2.locator('ul.no-list.hs-error-msgs.inputs-list').count();

    // Check if error message is as on requirement
    expect(errorMessages).toBeGreaterThan(0);

    const errorMessageElement = await frame2.locator('ul.no-list.hs-error-msgs.inputs-list').first();
    const errorMessageText = await errorMessageElement.textContent();


});
});