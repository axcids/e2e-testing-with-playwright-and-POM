import {test, expect, Page} from '@playwright/test';
import { NavbarLocators } from '../../locators/navbarLocators';

export class NavbarFragment {

    private locators;
    private page: Page;

    constructor(page: Page) {
        this.locators = new NavbarLocators(page);
        this.page = page;
    }
    /* ============= Page State ============= */
    async isPageTitleDisplayed(): Promise<boolean> {
        await this.page.waitForTimeout(5000); // Wait for the page to load
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
        if(await this.isDropdownMenuDisplayed()){
            await this.locators.aboutMenuItem.click();
        }else{
            throw new Error('Dropdown menu is not displayed');
        }
    }
    async clickSupportMenuItem(): Promise<void> {
        if(await this.isDropdownMenuDisplayed()){
            await this.locators.supportMenuItem.click();
        }else{
            throw new Error('Dropdown menu is not displayed');
        }
    }
    async clickChangePasswordMenuItem(): Promise<void> {
        if(await this.isDropdownMenuDisplayed()){
            await this.locators.changePasswordMenuItem.click();
        }else{
            throw new Error('Dropdown menu is not displayed');
        }
    }
    async clickLogoutMenuItem(): Promise<void> {
        try {
            // Find and click the Logout link directly using a more reliable selector
            await this.locators.logoutMenuItem.click();
        } catch (error) {
            throw new Error('Unable to click logout menu item: ' + error);
        }
    }
}
