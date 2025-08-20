/**
 * Locators Barrel File
 * This file centralizes all locator exports to simplify imports across the project
 */

// Export all locator classes
export * from './LoginLocators';
export * from './DashboardLocators';
export * from './SidebarLocators';
export * from './navbarLocators.'; // Note: filename has extra dot - consider fixing

// Add any future locator exports here

/**
 * Usage:
 * Instead of:
 *   import { LoginLocators } from '../locators/LoginLocators';
 *   import { DashboardLocators } from '../locators/DashboardLocators';
 *   import { NavbarLocators } from '../locators/navbarLocators.';
 * 
 * You can now use:
 *   import { LoginLocators, DashboardLocators, NavbarLocators } from '../locators';
 */
