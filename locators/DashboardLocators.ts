import {Locator, Page} from '@playwright/test';

export class DashboardLocators {

    timeAtWorkCard: Locator;
    myActionsCard: Locator;
    quickLunchCard: Locator;
    buzzLatestPostsCard: Locator;
    employeeOnLeaveTodaycard: Locator;
    employeeDistributionBySubUnitCard: Locator;
    employeeDistributionByLocationCard: Locator;
    ql_assignLeave: Locator;
    ql_LeaveList: Locator;
    ql_timeSheets: Locator;
    ql_applyLeave: Locator;
    ql_myLeave: Locator;
    ql_myTimeSheet: Locator;

    constructor(page: Page) {

        this.timeAtWorkCard = page.getByText('Time at WorkPunched');
        this.myActionsCard = page.getByText('My Actions');
        this.quickLunchCard = page.getByText('Quick Lunch');
        this.buzzLatestPostsCard = page.getByText('Buzz - Latest Posts');
        this.employeeOnLeaveTodaycard = page.getByText('Employee on Leave Today');
        this.employeeDistributionBySubUnitCard = page.getByText('Employee Distribution by Sub-Unit');
        this.employeeDistributionByLocationCard = page.getByText('Employee Distribution by Location');
        this.ql_assignLeave = page.getByRole('button', { name: 'Assign Leave' })
        this.ql_LeaveList = page.getByRole('button', { name: 'Leave List' });
        this.ql_timeSheets = page.getByRole('button', { name: 'Time Sheets' });
        this.ql_applyLeave = page.getByRole('button', { name: 'Apply Leave' });
        this.ql_myLeave = page.getByRole('button', { name: 'My Leave' });
        this.ql_myTimeSheet = page.getByRole('button', { name: 'My TimeSheet' });

    }
}
