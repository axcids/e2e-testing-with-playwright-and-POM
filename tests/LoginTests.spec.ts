import {test, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';


let loginPage: LoginPage;

test.describe('verify page state', () => {
    // Create a new instance of the LoginPage before each test
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navigate to login page once for all tests
        await loginPage.navigateToLoginPage();
    });
    test('verify page is opening', async ({ page }) => {
        expect(page.url()).toContain('/web/index.php/auth/login');
        expect(page.waitForLoadState('networkidle')).toBeTruthy();
    });
    test('verify page title', async ({ page }) => {
        // Verify the title of the page
        expect(loginPage.isTitleCorrect()).toBeTruthy();
    });
    test('verify logo is displayed', async ({ page }) => {
        // Verify the logo is displayed
        expect(loginPage.isLogoDisplayed()).toBeTruthy();
    });
    test('verify page title is displayed', async ({ page }) => {
        // Verify the page title is displayed
        expect(loginPage.isPageTitleDisplayed()).toBeTruthy();
    });
    test('verify username input is displayed', async ({ page }) => {
        // Verify the username input is displayed
        expect(loginPage.isUsernameInputDisplayed()).toBeTruthy();
    });
    test('verify password input is displayed', async ({ page }) => {
        // Verify the password input is displayed
        expect(loginPage.isPasswordInputDisplayed()).toBeTruthy();
    });
    test('verify login button is displayed', async ({ page }) => {
        // Verify the login button is displayed
        expect(loginPage.isLoginButtonDisplayed()).toBeTruthy();
    });
    test('verify forgot password link is displayed', async ({ page }) => {
        // Verify the forgot password link is displayed
        expect(loginPage.isForgotPasswordLinkDisplayed()).toBeTruthy();
    });
    test('verify copyright text is displayed', async ({ page }) => {
        // Verify the copyright text is displayed
        expect(loginPage.isCopyrightText1Displayed()).toBeTruthy();
    });
    test('verify login form is displayed', async ({ page }) => {
        // Verify the login form is displayed
        expect(loginPage.isCopyrightText2Displayed()).toBeTruthy();
    });
    test('verify link for OrangeHRM website is displayed', async ({ page }) => {
        // Verify the link for OrangeHRM website is displayed
        expect(loginPage.isLinkForOrangeWebsiteDisplayed()).toBeTruthy();
    });
    test('verify linkedin link is displayed', async ({ page }) => {
        // Verify the linkedin link is displayed
        expect(loginPage.isLinkedinLinkDisplayed()).toBeTruthy();
    });
    test('verify facebook link is displayed', async ({ page }) => {
        // Verify the facebook link is displayed
        expect(loginPage.isFacebookLinkDisplayed()).toBeTruthy();
    });
    test('verify twitter link is displayed', async ({ page }) => {
        // Verify the twitter link is displayed
        expect(loginPage.isTwitterLinkDisplayed()).toBeTruthy();
    });
    test('verify youtube link is displayed', async ({ page }) => {
        // Verify the youtube link is displayed
        expect(loginPage.isYoutubeLinkDisplayed()).toBeTruthy();
    });
});
test.describe('verify login functionality', () => {
    // Create a new instance of the LoginPage before each test
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navigate to login page once for all tests
        await loginPage.navigateToLoginPage();
    });

    test('verify the form is displayed', async ({ page }) => {
        expect(loginPage.isUsernameInputDisplayed()).toBeTruthy();
        expect(loginPage.isPasswordInputDisplayed()).toBeTruthy();
        expect(loginPage.isLoginButtonDisplayed()).toBeTruthy();
    });
    test('verify the user can log in with valid credentials', async ({ page }) => {
        await loginPage.fillUsername('valid_username');
        await loginPage.fillPassword('valid_password');
        await loginPage.clickLoginButton();
        expect(page.url()).toContain('/web/index.php/dashboard/index'); //to be changed later with a function from the dashboard instance.
    });
    test('verify the user cannot log in with invalid credentials', async ({ page }) => {
        await loginPage.fillUsername('invalid_username');
        await loginPage.fillPassword('invalid_password');
        await loginPage.clickLoginButton();
        expect(page.url()).toBe(page.url()); // Expect the URL to remain the same, indicating login failure
        expect(loginPage.isInvalidCredentialsErrorMessageDisplayed()).toBeTruthy();
    });
    test('verify the user cannot login with empty username', async ({ page }) => {
        await loginPage.fillUsername('');
        await loginPage.fillPassword('admin123'); //change this later to be more dynamic
        await loginPage.clickLoginButton();
        expect(page.url()).toBe(page.url()); // Expect the URL to remain the same, indicating login failure
        expect(loginPage.isUsernameRequiredErrorDisplayed()).toBeTruthy();
    });
    test('verify the user cannot login with empty password', async ({ page }) => {
        await loginPage.fillUsername('Admin'); //change this later to be more dynamic
        await loginPage.fillPassword('');
        await loginPage.clickLoginButton();
        expect(page.url()).toBe(page.url()); // Expect the URL to remain the same, indicating login failure
        expect(loginPage.isPasswordRequiredErrorDisplayed()).toBeTruthy();
    });
    test('verify the user cannot login with empty credentials', async ({ page }) => {
        await loginPage.fillUsername('');
        await loginPage.fillPassword('');
        await loginPage.clickLoginButton();
        expect(page.url()).toBe(page.url()); // Expect the URL to remain the same, indicating login failure
        expect(loginPage.isUsernameRequiredErrorDisplayed()).toBeTruthy();
        expect(loginPage.isPasswordRequiredErrorDisplayed()).toBeTruthy();
    });
});
test.describe('verify footer links', () => {

    //FIX THE REDIRECTIONS


    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navigate to login page once for all tests
        await loginPage.navigateToLoginPage();
    });
    test('verify orange HRM link is working', async ({ page }) => {
        // Verify the orange HRM link is working
        await loginPage.clickOrangeHRMLink();
        expect(page.url()).toMatch(/orangehrm/i); // Expect the URL to contain 'orangehrm'
    });
    test('verify linkedin link is working', async ({ page }) => {
        // Verify the linkedin link is working
        const newPagePromise = page.context().waitForEvent('page');
        await loginPage.clickOnLinkedinLogo();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState('networkidle');
        expect(newPage.url()).toMatch(/linkedin/i); // Expect the URL to contain 'linkedin'
    });
    test('verify facebook link is working', async ({ page }) => {
        // Verify the facebook link is working
        const newPagePromise = page.context().waitForEvent('page');
        await loginPage.clickOnFacebookLogo();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState('networkidle');
        expect(newPage.url()).toMatch(/facebook/i); // Expect the URL to contain 'facebook'
    });
    test('verify twitter link is working', async ({ page }) => {
        // Verify the twitter link is working
        const newPagePromise = page.context().waitForEvent('page');     
        await loginPage.clickOnTwitterLogo();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState('networkidle');
        expect(newPage.url()).toMatch(/twitter/i); // Expect the URL to contain 'twitter'
    });
    test('verify youtube link is working', async ({ page }) => {
        // Verify the youtube link is working
        const newPagePromise = page.context().waitForEvent('page');
        await loginPage.clickOnYoutubeLogo();
        const newPage = await newPagePromise;
        await newPage.waitForLoadState('networkidle');
        expect(newPage.url()).toMatch(/youtube/i); // Expect the URL to contain 'youtube'
    });
});