import { test, expect, Page } from '@playwright/test';
import { BaseTest } from './BaseTest';


let baseTest: BaseTest;

test.describe('Navbar Functionality Tests', () => {
    test.beforeEach(async ({ page }) => {
        baseTest = new BaseTest(page);
        await baseTest.login();
    });
    // test('verify users can change account password', async () => {
    //     baseTest.navbarFragment.clickProfileMenuButton();
    //     await baseTest.page.waitForTimeout(1); // wait for dropdown to appear
    //     baseTest.navbarFragment.clickChangePasswordMenuItem();
    //     await baseTest.page.waitForTimeout(2000); // wait for dropdown to appear
    //     const pageUrl = await baseTest.loginPage.getPageUrl();
    //     expect(pageUrl).toBe(baseTest.page.url());
    // });
    test('verify users can logout', async () => {
        baseTest.navbarFragment.clickProfileMenuButton();
        await baseTest.page.waitForTimeout(1000); // wait for dropdown to appear
        baseTest.navbarFragment.clickLogoutMenuItem();
        await baseTest.page.waitForTimeout(1000);        
        const pageUrl = await baseTest.loginPage.getPageUrl();
        expect(pageUrl).toBe(baseTest.page.url());
    });

});