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
        this.profileMenuButton = page.locator('img.oxd-userdropdown-img[data-v-bdd6d943][alt="profile picture"]');
        this.dropdownMenu = page.locator('ul.oxd-dropdown-menu[role="menu"]')
        this.aboutMenuItem = page.getByRole('menuitem', { name: 'About' })
        this.supportMenuItem = page.getByRole('menuitem', { name: 'Support' });
        this.changePasswordMenuItem = page.getByRole('menuitem', { name: 'Change Password' });
        this.logoutMenuItem = page.getByRole('menuitem', { name: 'Logout' });
    }


}