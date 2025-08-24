import {Page, expect} from '@playwright/test';
import {LoginPage, NavbarFragment, SidebarFragment, DashboardPage} from '../pages';

export class BaseTest{

    loginPage: LoginPage;
    sidebarFragment: SidebarFragment;
    navbarFragment: NavbarFragment;
    dashboardPage: DashboardPage;
    page: Page;
    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.sidebarFragment = new SidebarFragment(page);
        this.navbarFragment = new NavbarFragment(page);
        this.dashboardPage = new DashboardPage(page);
    }
    async login(): Promise<void> {
        // Navigate to login page 
        await this.loginPage.navigateToLoginPage();
        await this.loginPage.fillUsername('Admin');
        await this.loginPage.fillPassword('admin123');
        await this.loginPage.clickLoginButton();
        
        // Wait for navigation to complete and dashboard to load
        try {
            // Wait for URL to change to dashboard URL
            await this.page.waitForURL(this.dashboardPage.baseUrl + this.dashboardPage.path, { timeout: 10000 });
            
            // Wait for a dashboard element to be visible to confirm page load
            await this.page.waitForSelector('img.oxd-userdropdown-img[alt="profile picture"]', { timeout: 10000 });
        } catch (error) {
            throw new Error('Failed to login or navigate to dashboard: ' + error);
        }
    }

}