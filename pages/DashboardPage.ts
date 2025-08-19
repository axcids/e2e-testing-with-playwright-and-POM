import {test, expect, Page} from '@playwright/test';
import { DashboardLocators } from '../locators/DashboardLocators';

export class DashboardPage {

    locators: DashboardLocators;
    page: Page;

    constructor(page: Page) {
        this.locators = new DashboardLocators(page);
    }

    /* ============= Page State ============= */

    async isTimeAtWorkCardVisible(): Promise<boolean> {
        return this.locators.timeAtWorkCard.isVisible();
    }
    async isMyActionsCardVisible(): Promise<boolean> {
        return this.locators.myActionsCard.isVisible();
    }
    async isQuickLunchCardVisible(): Promise<boolean> {
        return this.locators.quickLunchCard.isVisible();
    }
    async isBuzzLatestPostsCardVisible(): Promise<boolean> {
        return this.locators.buzzLatestPostsCard.isVisible();
    }
    async isEmployeeOnLeaveTodayCardVisible(): Promise<boolean> {
        return this.locators.employeeOnLeaveTodaycard.isVisible();
    }
    async isEmployeeDistributionBySubUnitCardVisible(): Promise<boolean> {
        return this.locators.employeeDistributionBySubUnitCard.isVisible();
    }
    async isEmployeeDistributionByLocationCardVisible(): Promise<boolean> {
        return this.locators.employeeDistributionByLocationCard.isVisible();
    }

    /* ============= Button Visibility ============= */
    
    async isAssignLeaveButtonVisible(): Promise<boolean> {
        return this.locators.ql_assignLeave.isVisible();
    }
    async isLeaveListButtonVisible(): Promise<boolean> {
        return this.locators.ql_LeaveList.isVisible();
    }
    async isTimeSheetsButtonVisible(): Promise<boolean> {
        return this.locators.ql_timeSheets.isVisible();
    }
    async isApplyLeaveButtonVisible(): Promise<boolean> {
        return this.locators.ql_applyLeave.isVisible();
    }
    async isMyLeaveButtonVisible(): Promise<boolean> {
        return this.locators.ql_myLeave.isVisible();
    }
    async isMyTimeSheetButtonVisible(): Promise<boolean> {
        return this.locators.ql_myTimeSheet.isVisible();
    }

    /* ============= Actions ============= */

    async clickAssignLeaveButton(): Promise<void> {
        await this.locators.ql_assignLeave.click();
    }
    async clickLeaveListButton(): Promise<void> {
        await this.locators.ql_LeaveList.click();
    }
    async clickTimeSheetsButton(): Promise<void> {
        await this.locators.ql_timeSheets.click();
    }
    async clickApplyLeaveButton(): Promise<void> {
        await this.locators.ql_applyLeave.click();
    }
    async clickMyLeaveButton(): Promise<void> {
        await this.locators.ql_myLeave.click();
    }
    async clickMyTimeSheetButton(): Promise<void> {
        await this.locators.ql_myTimeSheet.click();
    }
}