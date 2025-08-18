import {test, expect, Page} from '@playwright/test';
import { LoginLocators } from '../locators/LoginLocators';


export class LoginPage {

    /* ============= Page State ============= */

    private locators;
    private page: Page;
    private baseUrl: string;
    private loginPath: string;

    /* ====== Constructor ====== */
    
    constructor(page: Page) {
        // Initialize variables
        // initialize page 
        this.page = page;
        // initialize locators
        this.locators = new LoginLocators(page);
        // initialize base URL and login path
        this.baseUrl = 'https://opensource-demo.orangehrmlive.com';
        this.loginPath = '/web/index.php/auth/login';
    }

    /* ============= Page Navigation ============= */
    
    async navigateToLoginPage(): Promise<void> {
        await this.page.goto(this.baseUrl + this.loginPath, {
            waitUntil: 'networkidle',
            timeout: 60000
        });
    }

    /* ============= Page State ============= */
    
    async isLoginPageOpen(): Promise<boolean> {
        const url = await this.page.url();
        return url === this.baseUrl + this.loginPath;
    }
    async isTitleCorrect(): Promise<boolean> {
        const title = await this.page.title();
        return title === 'OrangeHRM';
    }
    async isLogoDisplayed(): Promise<boolean> {
        return await this.locators.logo.isVisible();
    }
    async isPageTitleDisplayed(): Promise<boolean> {
        return await this.locators.pageTitle.isVisible();
    }
    async isUsernameInputDisplayed(): Promise<boolean> {
        return await this.locators.usernameInput.isVisible();
    }
    async isPasswordInputDisplayed(): Promise<boolean> {
        return await this.locators.passwordInput.isVisible();
    }
    async isLoginButtonDisplayed(): Promise<boolean> {
        return await this.locators.loginButton.isVisible();
    }
    async isForgotPasswordLinkDisplayed(): Promise<boolean> {
        return await this.locators.forgotPasswordLink.isVisible();
    }
    async isUsernameRequiredErrorMessageDisplayed(): Promise<boolean> {
        return await this.locators.usernameRequiredErrorMessage.isVisible();
    }
    async isPasswordRequiredErrorMessageDisplayed(): Promise<boolean> {
        return await this.locators.passwordRequiredErrorMessage.isVisible();
    }
    async isInvalidCredentialsErrorMessageDisplayed(): Promise<boolean> {
        return await this.locators.invalidCredentialsErrorMessage.isVisible();
    }
    async isCopyrightText1Displayed(): Promise<boolean> {
        return await this.locators.copyrightText1.isVisible();
    }
    async isCopyrightText2Displayed(): Promise<boolean> {
        return await this.locators.copyrightText2.isVisible();
    }
    async isLinkForOrangeWebsiteDisplayed(): Promise<boolean> {
        return await this.locators.linkForOrangeWebsite.isVisible();
    }

    /* ============= Form Actions ============= */
    
    async fillUsername(username: string): Promise<void> {
        await this.locators.usernameInput.click();
        await this.locators.usernameInput.clear();
        await this.locators.usernameInput.fill(username);
    }
    async fillPassword(password: string): Promise<void> {
        await this.locators.passwordInput.fill(password);
    }
    async clickLoginButton(): Promise<void> {
        await this.locators.loginButton.click();
    }
    async isInvalidCredentialsErrorDisplayed(): Promise<boolean> {
        return await this.locators.invalidCredentialsErrorMessage.isVisible();
    }
    async isUsernameRequiredErrorDisplayed(): Promise<boolean> {
        return await this.locators.usernameRequiredErrorMessage.isVisible();
    }
    async isPasswordRequiredErrorDisplayed(): Promise<boolean> {
        return await this.locators.passwordRequiredErrorMessage.isVisible();
    }

    /* ============= Forgot Password ============= */

    async clickForgotPasswordLink(): Promise<void> {
        await this.locators.forgotPasswordLink.click();
    }


    /* ============= Footer ============= */

    async clickOrangeHRMLink(): Promise<void> {
        await this.locators.linkForOrangeWebsite.click();
    }

    /* ============= Social Media ============= */

    async clickOnLinkedinLogo(): Promise<void> {
        await this.locators.linkedinLink.click();
    }
    async clickOnFacebookLogo(): Promise<void> {
        await this.locators.facebookLink.click();
    }
    async clickOnTwitterLogo(): Promise<void> {
        await this.locators.twitterLink.click();
    }
    async clickOnYoutubeLogo(): Promise<void> {
        await this.locators.youtubeLink.click();
    }

}
