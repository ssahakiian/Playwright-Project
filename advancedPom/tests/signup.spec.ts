import { expect } from "@playwright/test";
import { test } from "./baseTest";

const email = "testttttttt@gmail.com";
const password = "Something";

test("Sign up with valid credentials", async ({
    loginPage,
    signupPage,

}) => {
    await loginPage.goToPage();
    await loginPage.SignupWithEmailandName(email, name);

    await expect(signupPage.name).toHaveValue(name);
    await expect(signupPage.email).toHaveValue(email);

    await signupPage.selectMrRadioButton();
    await signupPage.fillPassword("Something");
    await signupPage.fillFirstName("John");
    await signupPage.fillLastName("Smith");
    await signupPage.fillAddress("Address1");
    await signupPage.selectCountry(signupPage.COUNTRIES.UNITED_STATES);
    await signupPage.fillState("Delaware");
    await signupPage.fillZipCode("12345");
    await signupPage.fillCity("New Castle");
    await signupPage.fillMobileNumber("123456789");
    await signupPage.clickCreateAccountButton();
    await expect(signupPage.page).toHaveScreenshot("signupPage.png");
    await expect(signupPage.accountCreatedMessageSection).toHaveText("Account Created!");
});