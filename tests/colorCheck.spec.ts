import { test, expect, Page } from '@playwright/test';

test.describe('Verify button background color', async () =>{
  test('test2', async ({page}) =>{

  // Go to the SAP Fioneer page
  await page.goto('https://www.sapfioneer.com'); 

  // Localize Button
  const button = await page.$('li.html.header-button-1 > div.header-button > a.button.primary');

  if (button !== null){
  // Get button backgroundcolor 
  const buttonColor = await page.evaluate(button => {
    // Get style of button
    const computedStyle = window.getComputedStyle(button);
    // Return button color
    return computedStyle.getPropertyValue('background-color');
  }, button);
    // Assert that the button color is yellow
    expect(buttonColor).toBe('rgb(255, 212, 60)'); 
  } else {
    throw new Error("Element is null. Unable to call someFunction.");
  };


      
  });
 
});
