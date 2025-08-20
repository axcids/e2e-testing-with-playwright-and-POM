import {test, expect, Page} from '@playwright/test';
import { SidebarLocators } from '../../locators/SidebarLocators';

export class SidebarFragment {

    private locators;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
        this.locators = new SidebarLocators(page);
    }
    /* ============= Page State ============= */
    async isSidebarVisible(): Promise<boolean> {
        return await this.locators.AdminTab.isVisible();
    }
    async isTabVisible(tabName: string): Promise<boolean> {
        return await this.page.getByRole('link', { name: tabName }).isVisible();
    }
    async isSearchBarVisible(): Promise<boolean> {
        return await this.locators.searchBar.isVisible();
    }
    /* ============= Page Navigation ============= */
    async navigateToTab(tabName: string): Promise<void> {
        const tab = this.page.getByRole('link', { name: tabName });
        await tab.click();
    }
    async toggleSidebar(): Promise<void> {
        await this.locators.sideBarToggle.click();
    }
    async searchInSidebar(query: string): Promise<void> {
        await this.locators.searchBar.fill(query);
        await this.locators.searchBar.press('Enter');
    }
    async clearSearchBar(): Promise<void> {
        await this.locators.searchBar.clear();
    }
    
}