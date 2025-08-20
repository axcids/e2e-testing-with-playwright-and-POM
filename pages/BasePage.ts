import {Page} from '@playwright/test';

export class BasePage {

    protected page: Page;

    constructor(page: Page) {
        this.page = page;

    }
    async getPageUrl(): Promise<string> {
        return this.page.url();
    }

}