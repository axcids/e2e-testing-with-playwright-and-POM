import { Locator, Page } from '@playwright/test';

export class NavbarLocators {

    pageTitle: Locator;
    profileMenuButton: Locator;
    dropdownMenu: Locator;
    aboutMenuItem: Locator;
    supportMenuItem: Locator;
    changePasswordMenuItem: Locator;
    logoutMenuItem: Locator;

    constructor(page: Page) {
        this.pageTitle = page.getByRole('heading', { name: 'Dashboard' })
        this.profileMenuButton = page.locator('span').filter({ hasText: 'Fariya Batool' });
        this.dropdownMenu = page.getByText('AboutSupportChange')
        this.aboutMenuItem = page.getByRole('menuitem', { name: 'About' })
        this.supportMenuItem = page.getByRole('menuitem', { name: 'Support' });
        this.changePasswordMenuItem = page.getByRole('menuitem', { name: 'Change Password' });
        this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
    }


}