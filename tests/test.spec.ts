import {test, expect, Page} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { SidebarPage } from '../pages/SidebarPage';
import { NavbarPage } from '../pages/navbarPage';
import { DashboardPage } from '../pages/DashboardPage';


let loginPage: LoginPage;
let sidebarPage: SidebarPage;
let navbarPage: NavbarPage;
let dashboardPage: DashboardPage;

test.describe('E2E Testing with Page Object Model Design Pattern', () => {
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        sidebarPage = new SidebarPage(page);
        navbarPage = new NavbarPage(page);
        dashboardPage = new DashboardPage(page);
        // Login 
        test.step('open login page', async()=>{
            await loginPage.navigateToLoginPage();
        });
        test.step('fill the login form and click on login button', async () => {
            await loginPage.loginWithAdminCredentials();
        });
        test.step('verify users redirected to dashboard after login', async () => {
            expect(await navbarPage.isPageTitleDisplayed()).toBeTruthy();
        });
    });
    test('verify users redirected to dashboard after login', async () => {
        expect(await navbarPage.isPageTitleDisplayed()).toBe('Dashboard');
    });
    test('verify users can log out', async () => {
       test.step('click on profile menu', async => {
           navbarPage.clickProfileMenuButton();
       })
       test.step('click on logout menu item', async () => {
           await navbarPage.clickLogoutMenuItem();
       });
    });

});