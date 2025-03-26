import { test as base } from '@playwright/test'
import  { LoginPage } from '../page/LoginPage'
import { SignupPage } from '../page/SignupPage'

export const test = base.extend<{
    loginPage: LoginPage;
    signupPage: SignupPage;
    consoleLog: (message: string) => Promise<void>;
}>({
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    signupPage: async ({page}, use) => {
        await use(new SignupPage(page));
    },
});