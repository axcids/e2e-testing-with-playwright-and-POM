import {test, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('positive test cases for login', () => {

    test('verify page is opening', async ({ page }) => {
        const loginPage = new LoginPage(page);
        // Navigate to login page and wait for it to load
        await loginPage.navigateToLoginPage();
        
    });
    test('verify page title', async ({ page }) => {
        const loginPage = new LoginPage(page);
        // Navigate to login page
        loginPage.navigateToLoginPage();
        // Verify the title of the page
        expect(loginPage.isTitleCorrect()).toBeTruthy();
    });


    test('login with valid credentials', async ({ page }) => {

    });
    

});