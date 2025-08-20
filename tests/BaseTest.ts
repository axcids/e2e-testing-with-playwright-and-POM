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
        // await this.verifyLoginSuccess();
        const currentUrl = await this.page.url();
        const expectedUrl = this.dashboardPage.baseUrl + this.dashboardPage.path;
        await expect(currentUrl).toBe(expectedUrl);
    }

}