import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://practice-automation.com/');
  await page.getByText("Form Fields").click();
  await page.locator("h1", {hasText: "Form Fields"}).isVisible();
  await page.getByTestId("name-input").fill("John Doe");
  expect(await page.getByTestId("name-input").inputValue()).toBe("John Doe");
  await page.locator("input[type='password']").fill("something");
  expect( await page.locator("input[type='password']").inputValue()).toBe("something");
  await page.getByTestId("drink1").check();
  expect(await page.getByTestId("drink1").isChecked()).toBe(true);
  await page.getByTestId("drink2").uncheck();
  expect(await page.getByTestId("drink2").isChecked()).toBe(false);
  await page.getByTestId("drink4").check();
  expect(await page.getByTestId("drink4").isChecked()).toBe(true);
  await page.getByTestId("drink4").uncheck();
  expect(await page.getByTestId("drink4").isChecked()).toBe(false);
  await page.getByTestId("color5").check();
  expect(await page.getByTestId("color5").isChecked()).toBe(true);
  await page.getByTestId("automation").selectOption({value: "no"});
  expect(await page.getByTestId("automation")).toHaveValue("no");
  await page.getByTestId("email").fill("jasdjah@gmail.com");
  expect(await page.getByTestId("email").inputValue()).toBe("jasdjah@gmail.com");
  await page.getByTestId("message").fill("senc eli");
  expect(await page.getByTestId("message").inputValue()).toBe("senc eli");
  await page.getByTestId("submit-btn").click();
  await page.waitForSelector("div.alert.alert-success");


});