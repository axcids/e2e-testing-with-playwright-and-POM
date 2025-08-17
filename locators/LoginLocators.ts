/**
 * Login Page Locators
 * This file contains all the locators for the login page elements
 */

export interface LoginLocators {
  // Input fields
  emailInput: string;
  passwordInput: string;
  
  // Buttons
  loginButton: string;
  signUpButton: string;
  forgotPasswordLink: string;
  
  // Form elements
  loginForm: string;
  rememberMeCheckbox: string;
  
  // Error and success messages
  errorMessage: string;
  successMessage: string;
  emailErrorMessage: string;
  passwordErrorMessage: string;
  
  // Navigation elements
  loginPageTitle: string;
  logoImage: string;
  
  // Social login buttons (if applicable)
  googleLoginButton: string;
  facebookLoginButton: string;
  
  // Footer elements
  termsOfServiceLink: string;
  privacyPolicyLink: string;
  
  // Loading states
  loadingSpinner: string;
  submitLoader: string;
}

/**
 * Login page locators using various selector strategies
 * Organized by element type for better maintainability
 */
export const loginLocators: LoginLocators = {
  // Input fields - Using data-testid for reliability
  emailInput: '[data-testid="email-input"]',
  passwordInput: '[data-testid="password-input"]',
  
  // Buttons - Using combination of selectors for robustness
  loginButton: '[data-testid="login-button"]',
  signUpButton: '[data-testid="signup-button"]',
  forgotPasswordLink: '[data-testid="forgot-password-link"]',
  
  // Form elements
  loginForm: '[data-testid="login-form"]',
  rememberMeCheckbox: '[data-testid="remember-me-checkbox"]',
  
  // Error and success messages
  errorMessage: '[data-testid="error-message"]',
  successMessage: '[data-testid="success-message"]',
  emailErrorMessage: '[data-testid="email-error"]',
  passwordErrorMessage: '[data-testid="password-error"]',
  
  // Navigation elements
  loginPageTitle: '[data-testid="login-title"]',
  logoImage: '[data-testid="logo"]',
  
  // Social login buttons
  googleLoginButton: '[data-testid="google-login-button"]',
  facebookLoginButton: '[data-testid="facebook-login-button"]',
  
  // Footer elements
  termsOfServiceLink: '[data-testid="terms-link"]',
  privacyPolicyLink: '[data-testid="privacy-link"]',
  
  // Loading states
  loadingSpinner: '[data-testid="loading-spinner"]',
  submitLoader: '[data-testid="submit-loader"]',
};

/**
 * Alternative locators using CSS selectors (fallback options)
 * Use these if data-testid attributes are not available
 */
export const loginLocatorsCss = {
  // Input fields
  emailInput: 'input[type="email"]',
  passwordInput: 'input[type="password"]',
  
  // Buttons
  loginButton: 'button[type="submit"]',
  signUpButton: '.signup-btn, #signup-button',
  forgotPasswordLink: 'a[href*="forgot-password"]',
  
  // Form
  loginForm: 'form.login-form, #login-form',
  rememberMeCheckbox: 'input[type="checkbox"][name*="remember"]',
  
  // Messages
  errorMessage: '.error-message, .alert-error',
  successMessage: '.success-message, .alert-success',
};

/**
 * XPath locators (use when CSS/data-testid are not sufficient)
 */
export const loginLocatorsXPath = {
  loginButtonByText: '//button[contains(text(), "Login") or contains(text(), "Sign In")]',
  signUpLinkByText: '//a[contains(text(), "Sign Up") or contains(text(), "Register")]',
  forgotPasswordByText: '//a[contains(text(), "Forgot Password")]',
  emailLabelByText: '//label[contains(text(), "Email")]',
  passwordLabelByText: '//label[contains(text(), "Password")]',
};

/**
 * Role-based locators (accessible selectors)
 */
export const loginLocatorsRole = {
  emailInput: 'textbox[name="email"]',
  passwordInput: 'textbox[name="password"]',
  loginButton: 'button[name="login"]',
  signUpLink: 'link[name="sign up"]',
  rememberMeCheckbox: 'checkbox[name="remember me"]',
};

/**
 * Helper function to get locator by preference
 * @param locatorType - Type of locator to use
 * @param elementKey - Key of the element
 * @returns The locator string
 */
export function getLocator(
  locatorType: 'testid' | 'css' | 'xpath' | 'role',
  elementKey: keyof LoginLocators
): string {
  switch (locatorType) {
    case 'testid':
      return loginLocators[elementKey];
    case 'css':
      return loginLocatorsCss[elementKey as keyof typeof loginLocatorsCss] || loginLocators[elementKey];
    case 'xpath':
      return loginLocatorsXPath[elementKey as keyof typeof loginLocatorsXPath] || loginLocators[elementKey];
    case 'role':
      return loginLocatorsRole[elementKey as keyof typeof loginLocatorsRole] || loginLocators[elementKey];
    default:
      return loginLocators[elementKey];
  }
}

/**
 * Locator validation helper
 * Use this to ensure locators are properly formatted
 */
export function validateLocator(locator: string): boolean {
  // Basic validation for common locator patterns
  const patterns = [
    /^\[data-testid="[\w-]+"\]$/, // data-testid
    /^[.#]?[\w-]+/, // CSS selectors
    /^\/\//, // XPath
    /^\w+\[/, // Role-based
  ];
  
  return patterns.some(pattern => pattern.test(locator));
}

// Export default for easy importing
export default loginLocators;
