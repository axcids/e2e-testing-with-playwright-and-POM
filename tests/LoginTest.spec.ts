import { test, expect } from '@playwright/test';
import { BaseTest } from './BaseTest';

test.describe('Login Tests', () => {
  test('Verify successful login', async ({ page }) => {
    // Create a new instance of the base test
    const baseTest = new BaseTest(page);
    
    // Navigate to the login page
    await baseTest.loginPage.navigateToLoginPage();
    
    // Enter credentials
    await baseTest.loginPage.fillUsername('Admin');
    await baseTest.loginPage.fillPassword('admin123');
    
    // Click login and wait for navigation
    await baseTest.loginPage.clickLoginButton();
    
    // Add a screenshot to see what's happening
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'screenshots/login-result.png', fullPage: true });
    
    // Check if we're on the dashboard page
    const currentUrl = await page.url();
    const expectedUrl = baseTest.dashboardPage.baseUrl + baseTest.dashboardPage.path;
    expect(currentUrl).toBe(expectedUrl);
    
    // Check if the profile button is visible
    const profileButton = page.locator('img.oxd-userdropdown-img[alt="profile picture"]');
    await expect(profileButton).toBeVisible({ timeout: 10000 });
  });
});
