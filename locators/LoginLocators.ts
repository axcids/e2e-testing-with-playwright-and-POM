import { Locator, Page } from '@playwright/test';

export class LoginLocators {


  logo: Locator;
  pageTitle: Locator;
  // Form card
  formCard: Locator;
  // Input fields
  usernameLabel: Locator;
  usernameInput: Locator;
  passwordLabel: Locator;
  passwordInput: Locator;
  //login button
  loginButton: Locator;
  //Forget password link
  forgotPasswordLink: Locator;
  // Validation message
  usernameRequiredErrorMessage: Locator;
  passwordRequiredErrorMessage: Locator;
  invalidCredentialsErrorMessage: Locator;
  // Footer 
  copyrightText1: Locator;
  copyrightText2: Locator;
  linkForOrangeWebsite: Locator;
  //social media links
  linkedinLink: Locator;
  facebookLink: Locator;
  twitterLink: Locator;
  youtubeLink: Locator;

  constructor(page: Page) {
    this.logo = page.getByAltText('company-branding');
    this.pageTitle = page.getByRole('heading', { name: 'Login' }).locator('h5.oxd-text.oxd-text--h5.orangehrm-login-title');
    // Form card
    this.formCard = page.locator('orangehrm-login-form');
    // Form fields
    this.usernameLabel = page.locator('oxd-label').getByText('username');
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordLabel = page.locator('oxd-label').getByText('password');
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    // Error messages
    this.invalidCredentialsErrorMessage = page.getByText('Invalid credentials');
    this.usernameRequiredErrorMessage = page.getByText('Required').nth(0);
    this.passwordRequiredErrorMessage = page.getByText('Required').nth(1);
    // Forgot password link
    this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot your password?' });
    // Footer elements
    this.copyrightText1 = page.getByText(/Copyright ©/i);
    this.copyrightText2 = page.getByText(/All rights reserved./i);
    this.linkForOrangeWebsite = page.getByRole('link', { name: 'OrangeHRM' });
    // Social media links
    this.linkedinLink = page.getByRole('link').first();
    this.facebookLink = page.getByRole('link').nth(1);
    this.twitterLink = page.getByRole('link').nth(2);
    this.youtubeLink = page.getByRole('link').nth(3);
  }
}