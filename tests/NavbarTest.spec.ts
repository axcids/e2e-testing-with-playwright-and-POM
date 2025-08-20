import { test, expect, Page } from '@playwright/test';
import { BaseTest } from './BaseTest';


let baseTest: BaseTest;

test.describe('Navbar Functionality Tests', () => {
    test.beforeEach(async ({ page }) => {
        baseTest = new BaseTest(page);
        await baseTest.login();
    });
    test('verify users can logout', async () => {

        test.step('click on profile menu', async () => {
            baseTest.navbarFragment.clickProfileMenuButton();
        });
        test.step('click on logout menu item', async () => {
            baseTest.navbarFragment.clickLogoutMenuItem();
        });
        test.step('verify user is redirected to login page', async () => {
            const pageUrl = await baseTest.loginPage.getPageUrl();
            expect(pageUrl).toBe(baseTest.page.url());
        });

    });

});