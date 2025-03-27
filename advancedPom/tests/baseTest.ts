import {Page, test as base} from '@playwright/test'
import  { LoginPage } from '../page/LoginPage'
import { SignupPage } from '../page/SignupPage'

export const test = base.extend<{
    loginPage: LoginPage;
    signupPage: SignupPage;
}>({
    loginPage: async ({page}: { page: Page }, use) => {
        await use(new LoginPage(page));

    },
    signupPage: async ({page}, use) => {
        await use(new SignupPage(page));
    },
});