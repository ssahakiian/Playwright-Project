import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    readonly loginEmail: Locator;
    readonly loginPassword: Locator;
    readonly loginButton: Locator;
    readonly signupEmail: Locator;
    readonly signupName: Locator;
    readonly signupButton: Locator;


constructor(page: Page) {
    super(page, "/login");
    this.loginEmail = page.getByTestId("login-email");
    this.loginPassword = page.getByTestId("login-password");
    this.loginButton = page.getByTestId("login-button");
    this.signupEmail = page.getByTestId("signup-email");
    this.signupName = page.getByTestId("signup-name");
    this.signupButton = page.getByTestId("signup-button");
}

async fillLoginEmail(email: string) {
    await this.loginEmail.fill(email);
}

async fillLoginPassword(password: string) {
    await this.loginPassword.fill(password);
}

async clickLoginButton() {
    await this.loginButton.click();
}

async fillSignupEmail(email: string){
    await this.signupEmail.fill(email);
}

async fillSignupName(name: string){
    await this.signupName.fill(name);
}

async clickSignupButton(){
    await this.signupButton.click();
}

async LoginWithEmailAndPassword(email: string, password: string) {
    await this.fillLoginEmail(email);
    await this.fillLoginPassword(password);
    await this.clickLoginButton();
}

async SignupWithEmailandName(email: string, name: string ) {
    await this.fillSignupEmail(email);
    await this.fillSignupName(name);
    await this.clickSignupButton();
}
}















