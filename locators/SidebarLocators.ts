import { Locator, Page } from '@playwright/test';
export class SidebarLocators {

    // Sidebar locators
    sideBarToggle: Locator;
    searchBar: Locator;
    adminTab: Locator;
    pimTab: Locator;
    leaveTab: Locator;
    timeTab: Locator;
    recruitmentTab: Locator;
    myInfoTab: Locator;
    performanceTab: Locator;
    dashboardTab: Locator;
    directoryTab: Locator;
    maintenanceTab: Locator;
    claimsTab: Locator;
    buzzTab: Locator;

    constructor(page: Page) {
        this.sideBarToggle =  page.getByRole('button').locator('oxd-icon bi-chevron-left');
        this.searchBar = page.getByRole('textbox', { name: 'Search' });
        this.adminTab = page.getByRole('link', { name: 'Admin' });
        this.pimTab = page.getByRole('link', { name: 'PIM' });
        this.leaveTab = page.getByRole('link', { name: 'Leave' });
        this.timeTab = page.getByRole('link', { name: 'Time' });
        this.recruitmentTab = page.getByRole('link', { name: 'Recruitment' });
        this.myInfoTab = page.getByRole('link', { name: 'My Info' });
        this.performanceTab = page.getByRole('link', { name: 'Performance' });
        this.dashboardTab = page.getByRole('link', { name: 'Dashboard' });
        this.directoryTab = page.getByRole('link', { name: 'Directory' });
        this.maintenanceTab = page.getByRole('link', { name: 'Maintenance' });
        this.claimsTab = page.getByRole('link', { name: 'Claims' });
        this.buzzTab = page.getByRole('link', { name: 'Buzz' });
    }
}