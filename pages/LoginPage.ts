import { Page, Locator, expect } from '@playwright/test';
import { loginLocators, getLocator } from '../locators/LoginLocators';

/**
 * Login Page Object Model
 * Contains all the methods and interactions for the login page
 */
export class LoginPage {
    readonly page: Page;

    // Page elements using locators
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly signUpButton: Locator;
    readonly forgotPasswordLink: Locator;
    readonly loginForm: Locator;
    readonly rememberMeCheckbox: Locator;
    readonly errorMessage: Locator;
    readonly successMessage: Locator;
    readonly emailErrorMessage: Locator;
    readonly passwordErrorMessage: Locator;
    readonly loginPageTitle: Locator;
    readonly logoImage: Locator;
    readonly googleLoginButton: Locator;
    readonly facebookLoginButton: Locator;
    readonly loadingSpinner: Locator;
    readonly submitLoader: Locator;

    constructor(page: Page) {
        this.page = page;

        // Initialize all locators
        this.emailInput = page.locator(loginLocators.emailInput);
        this.passwordInput = page.locator(loginLocators.passwordInput);
        this.loginButton = page.locator(loginLocators.loginButton);
        this.signUpButton = page.locator(loginLocators.signUpButton);
        this.forgotPasswordLink = page.locator(loginLocators.forgotPasswordLink);
        this.loginForm = page.locator(loginLocators.loginForm);
        this.rememberMeCheckbox = page.locator(loginLocators.rememberMeCheckbox);
        this.errorMessage = page.locator(loginLocators.errorMessage);
        this.successMessage = page.locator(loginLocators.successMessage);
        this.emailErrorMessage = page.locator(loginLocators.emailErrorMessage);
        this.passwordErrorMessage = page.locator(loginLocators.passwordErrorMessage);
        this.loginPageTitle = page.locator(loginLocators.loginPageTitle);
        this.logoImage = page.locator(loginLocators.logoImage);
        this.googleLoginButton = page.locator(loginLocators.googleLoginButton);
        this.facebookLoginButton = page.locator(loginLocators.facebookLoginButton);
        this.loadingSpinner = page.locator(loginLocators.loadingSpinner);
        this.submitLoader = page.locator(loginLocators.submitLoader);
    }

    /**
     * Navigate to the login page
     * @param url - Optional URL, if not provided uses baseURL from config
     */
    async navigateToLoginPage(url?: string): Promise<void> {
        if (url) {
            await this.page.goto(url);
        } else {
            await this.page.goto('/login'); // Assumes baseURL is set in config
        }

        // Wait for the page to load
        await this.waitForPageLoad();
    }

    /**
     * Wait for the login page to fully load
     */
    async waitForPageLoad(): Promise<void> {
        await this.loginForm.waitFor({ state: 'visible' });
        await this.emailInput.waitFor({ state: 'visible' });
        await this.passwordInput.waitFor({ state: 'visible' });
    }

    /**
     * Fill email input field
     * @param email - Email address to enter
     */
    async fillEmail(email: string): Promise<void> {
        await this.emailInput.waitFor({ state: 'visible' });
        await this.emailInput.clear();
        await this.emailInput.fill(email);
    }

    /**
     * Fill password input field
     * @param password - Password to enter
     */
    async fillPassword(password: string): Promise<void> {
        await this.passwordInput.waitFor({ state: 'visible' });
        await this.passwordInput.clear();
        await this.passwordInput.fill(password);
    }

    /**
     * Click the login button
     */
    async clickLoginButton(): Promise<void> {
        await this.loginButton.waitFor({ state: 'visible' });
        await this.loginButton.click();
    }

    /**
     * Click the sign up button/link
     */
    async clickSignUpButton(): Promise<void> {
        await this.signUpButton.waitFor({ state: 'visible' });
        await this.signUpButton.click();
    }

    /**
     * Click the forgot password link
     */
    async clickForgotPasswordLink(): Promise<void> {
        await this.forgotPasswordLink.waitFor({ state: 'visible' });
        await this.forgotPasswordLink.click();
    }

    /**
     * Toggle the remember me checkbox
     */
    async toggleRememberMe(): Promise<void> {
        await this.rememberMeCheckbox.waitFor({ state: 'visible' });
        await this.rememberMeCheckbox.click();
    }

    /**
     * Perform a complete login action
     * @param email - Email address
     * @param password - Password
     * @param rememberMe - Whether to check remember me checkbox
     */
    async login(email: string, password: string, rememberMe: boolean = false): Promise<void> {
        await this.fillEmail(email);
        await this.fillPassword(password);

        if (rememberMe) {
            await this.toggleRememberMe();
        }

        await this.clickLoginButton();
    }

    /**
     * Perform a quick login (just fill and submit)
     * @param email - Email address
     * @param password - Password
     */
    async quickLogin(email: string, password: string): Promise<void> {
        await this.login(email, password, false);
    }

    /**
     * Login with Google (social login)
     */
    async loginWithGoogle(): Promise<void> {
        await this.googleLoginButton.waitFor({ state: 'visible' });
        await this.googleLoginButton.click();
    }

    /**
     * Login with Facebook (social login)
     */
    async loginWithFacebook(): Promise<void> {
        await this.facebookLoginButton.waitFor({ state: 'visible' });
        await this.facebookLoginButton.click();
    }

    /**
     * Wait for login to complete (loading spinner to disappear)
     */
    async waitForLoginToComplete(): Promise<void> {
        // Wait for submit loader to appear and then disappear
        try {
            await this.submitLoader.waitFor({ state: 'visible', timeout: 5000 });
            await this.submitLoader.waitFor({ state: 'hidden', timeout: 10000 });
        } catch (error) {
            // Loader might not appear for fast responses, continue
        }
    }

    /**
     * Get the error message text
     * @returns Promise<string> - Error message text
     */
    async getErrorMessage(): Promise<string> {
        await this.errorMessage.waitFor({ state: 'visible' });
        return await this.errorMessage.textContent() || '';
    }

    /**
     * Get the success message text
     * @returns Promise<string> - Success message text
     */
    async getSuccessMessage(): Promise<string> {
        await this.successMessage.waitFor({ state: 'visible' });
        return await this.successMessage.textContent() || '';
    }

    /**
     * Get email validation error message
     * @returns Promise<string> - Email error message text
     */
    async getEmailErrorMessage(): Promise<string> {
        await this.emailErrorMessage.waitFor({ state: 'visible' });
        return await this.emailErrorMessage.textContent() || '';
    }

    /**
     * Get password validation error message
     * @returns Promise<string> - Password error message text
     */
    async getPasswordErrorMessage(): Promise<string> {
        await this.passwordErrorMessage.waitFor({ state: 'visible' });
        return await this.passwordErrorMessage.textContent() || '';
    }

    /**
     * Check if login button is enabled
     * @returns Promise<boolean> - True if enabled, false otherwise
     */
    async isLoginButtonEnabled(): Promise<boolean> {
        return await this.loginButton.isEnabled();
    }

    /**
     * Check if remember me checkbox is checked
     * @returns Promise<boolean> - True if checked, false otherwise
     */
    async isRememberMeChecked(): Promise<boolean> {
        return await this.rememberMeCheckbox.isChecked();
    }

    /**
     * Clear all input fields
     */
    async clearAllFields(): Promise<void> {
        await this.emailInput.clear();
        await this.passwordInput.clear();
    }

    /**
     * Get the page title
     * @returns Promise<string> - Page title text
     */
    async getPageTitle(): Promise<string> {
        return await this.page.title();
    }

    /**
     * Verify login page is loaded correctly
     */
    async verifyLoginPageLoaded(): Promise<void> {
        await expect(this.loginForm).toBeVisible();
        await expect(this.emailInput).toBeVisible();
        await expect(this.passwordInput).toBeVisible();
        await expect(this.loginButton).toBeVisible();
    }

    /**
     * Verify error message is displayed
     * @param expectedMessage - Expected error message (optional)
     */
    async verifyErrorMessage(expectedMessage?: string): Promise<void> {
        await expect(this.errorMessage).toBeVisible();
        if (expectedMessage) {
            await expect(this.errorMessage).toContainText(expectedMessage);
        }
    }

    /**
     * Verify success message is displayed
     * @param expectedMessage - Expected success message (optional)
     */
    async verifySuccessMessage(expectedMessage?: string): Promise<void> {
        await expect(this.successMessage).toBeVisible();
        if (expectedMessage) {
            await expect(this.successMessage).toContainText(expectedMessage);
        }
    }

    /**
     * Verify field validation errors
     * @param field - Field to check ('email' or 'password')
     * @param expectedMessage - Expected validation message (optional)
     */
    async verifyFieldValidationError(field: 'email' | 'password', expectedMessage?: string): Promise<void> {
        const errorLocator = field === 'email' ? this.emailErrorMessage : this.passwordErrorMessage;
        await expect(errorLocator).toBeVisible();

        if (expectedMessage) {
            await expect(errorLocator).toContainText(expectedMessage);
        }
    }

    /**
     * Take a screenshot of the login page
     * @param name - Screenshot name
     */
    async takeScreenshot(name: string = 'login-page'): Promise<void> {
        await this.page.screenshot({ path: `screenshots/${name}.png`, fullPage: true });
    }
}

export default LoginPage;
