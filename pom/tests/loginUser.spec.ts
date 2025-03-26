import {test, expect, chromium, Browser, Page} from '@playwright/test';

test('Browser section', async ({ page }) => {
    const chromeBrowser: Browser = await chromium.launch({headless: false});
    const pageOne: Page = await chromeBrowser.newPage();
    await pageOne.goto("http://automationexercise.com");
    await expect(pageOne.locator("#header")).toBeVisible();
    await pageOne.locator("a").filter({hasText: "Signup / Login"}).click();
    await expect(pageOne.getByText("Login to your account")).toBeVisible();
    await pageOne.getByTestId("login-email").fill("testttttttt@gmail.com");
    await expect(pageOne.getByTestId("login-email")).toHaveValue("testttttttt@gmail.com");
    await pageOne.getByTestId("login-password").fill("Something");
    await expect(pageOne.getByTestId("login-password")).toHaveValue("Something");
    await pageOne.getByTestId("login-button").click();
    await expect(pageOne.getByText(" Logged in as ")).toBeVisible();
    await expect(pageOne.getByText("John Smith")).toBeVisible();
    await pageOne.getByText(" Delete Account").click();
    await expect(pageOne.getByText("Account Deleted!")).toBeVisible();

})