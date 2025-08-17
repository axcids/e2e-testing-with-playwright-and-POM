import { test, expect } from '@playwright/test';
import config from '../playwright.config';
import { HttpClient } from '../util/http-client';


test('has title', async ({ page }) => {

  await page.goto(config.use?.baseURL || '');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Amazon/);
});


