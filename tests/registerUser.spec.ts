import {test, expect, chromium, Browser, Page} from '@playwright/test';

test('Browser section', async ({ page }) => {
    const chromeBrowser: Browser = await chromium.launch({headless:false});
    const pageOne: Page = await chromeBrowser.newPage();
    await pageOne.goto("http://automationexercise.com");
    await expect(pageOne.locator("#header")).toBeVisible();
    await pageOne.locator("a").filter({hasText: "Signup / Login"}).click();
    await expect(pageOne.getByText("New User Signup!")).toBeVisible();
    await pageOne.getByTestId("signup-name").fill("John Smith");
    await expect(pageOne.getByTestId("signup-name")).toHaveValue("John Smith");
    await pageOne.getByTestId("signup-email").fill("testttttttt@gmail.com");
    await expect(pageOne.getByTestId("signup-email")).toHaveValue("testttttttt@gmail.com");
    await pageOne.getByTestId("signup-button").click();
    await expect(pageOne.getByText("Enter Account Information")).toBeVisible();
    await pageOne.locator("#id_gender1").check();
    await expect(pageOne.locator("#id_gender1")).toBeChecked();
    await expect(pageOne.locator("#name")).toHaveValue("John Smith");
    await expect(pageOne.locator("#email")).toHaveValue("testttttttt@gmail.com");
    await pageOne.locator("#password").fill("Something");
    await expect(pageOne.locator("#password")).toHaveValue("Something");
    await pageOne.locator("#days").selectOption({value: "1"});
    await expect(pageOne.locator("#days")).toHaveValue("1");
    await pageOne.locator("#months").selectOption({value: "2"});
    await expect(pageOne.locator("#months")).toHaveValue("2");
    await pageOne.locator("#years").selectOption({value: "2017"});
    await expect(pageOne.locator("#years")).toHaveValue("2017");
    await pageOne.getByLabel("Sign up for our newsletter!").check();
    await expect(pageOne.getByLabel("Sign up for our newsletter")).toBeChecked();
    await pageOne.getByLabel("Receive special offers from our partners!").check();
    await expect(pageOne.getByLabel("Receive special offers from our partners!")).toBeChecked();
    await pageOne.getByTestId("first_name").fill("John");
    await expect(pageOne.locator("#first_name")).toHaveValue("John");
    await pageOne.getByTestId("last_name").fill("Smith");
    await expect(pageOne.getByTestId("last_name")).toHaveValue("Smith");
    await pageOne.getByTestId("company").fill("Mi Ban LLC");
    await expect(pageOne.getByTestId("company")).toHaveValue("Mi Ban LLC");
    await pageOne.getByTestId("address").fill("Address1");
    await expect(pageOne.getByTestId("address")).toHaveValue("Address1");
    await pageOne.getByTestId("address2").fill("Address2");
    await expect(pageOne.getByTestId("address2")).toHaveValue("Address2");
    await pageOne.getByTestId("country").selectOption({value: "United States"});
    await expect(pageOne.getByTestId("country")).toHaveValue("United States");
    await pageOne.getByTestId("state").fill("Delaware");
    await expect(pageOne.getByTestId("state")).toHaveValue("Delaware");
    await pageOne.getByTestId("city").fill("New Castle");
    await expect(pageOne.getByTestId("city")).toHaveValue("New Castle");
    await pageOne.getByTestId("zipcode").fill("19720");
    await expect(pageOne.getByTestId("zipcode")).toHaveValue("19720");
    await pageOne.getByTestId("mobile_number").fill("3024148567");
    await expect(pageOne.getByTestId("mobile_number")).toHaveValue("3024148567");
    await pageOne.getByTestId("create-account").click();
    await expect(pageOne.getByText("Account Created!")).toBeVisible();
    await pageOne.getByTestId("continue-button").click();
    await expect(pageOne.getByText(" Logged in as ")).toBeVisible();
    await expect(pageOne.getByText("John Smith")).toBeVisible();
    await pageOne.getByText(" Delete Account").click();
    await expect(pageOne.getByText("Account Deleted!")).toBeVisible();
    await pageOne.getByTestId("continue-button").click();

})