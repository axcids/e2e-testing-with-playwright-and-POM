import {test, expect, Page} from '@playwright/test';
import { NavbarLocators } from '../locators/navbarLocators.';

export class NavbarPage {

    private locators;
    private page: Page;

    constructor(page: Page) {
        this.locators = new NavbarLocators(page);
        this.page = page;
    }
    /* ============= Page State ============= */
    async isPageTitleDisplayed(): Promise<boolean> {
        return await this.locators.pageTitle.isVisible();
    }
    async isProfileMenuButtonDisplayed(): Promise<boolean> {
        return await this.locators.profileMenuButton.isVisible();
    }
    async isDropdownMenuDisplayed(): Promise<boolean> {
        return await this.locators.dropdownMenu.isVisible();
    }
    async isAboutMenuItemDisplayed(): Promise<boolean> {
        return await this.locators.aboutMenuItem.isVisible();
    }
    async isSupportMenuItemDisplayed(): Promise<boolean> {
        return await this.locators.supportMenuItem.isVisible();
    }
    async isChangePasswordMenuItemDisplayed(): Promise<boolean> {
        return await this.locators.changePasswordMenuItem.isVisible();
    }
    async isLogoutMenuItemDisplayed(): Promise<boolean> {
        return await this.locators.logoutMenuItem.isVisible();
    }

    /* ============= Actions ============= */
    
    async clickProfileMenuButton(): Promise<void> {
        await this.locators.profileMenuButton.click();
    }
    async clickAboutMenuItem(): Promise<void> {
        await this.locators.aboutMenuItem.click();
    }
    async clickSupportMenuItem(): Promise<void> {
        await this.locators.supportMenuItem.click();
    }
    async clickChangePasswordMenuItem(): Promise<void> {
        await this.locators.changePasswordMenuItem.click();
    }
    async clickLogoutMenuItem(): Promise<void> {
        await this.locators.logoutMenuItem.click();
    }
}
