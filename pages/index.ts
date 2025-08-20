/**
 * Pages Barrel File
 * This file centralizes all page exports to simplify imports across the project
 */

// Export all page classes
export * from './BasePage';
export * from './LoginPage';
export * from './DashboardPage';
export * from './fragments/SidebarFragment';
export * from './fragments/navbarFragment';
// Add any future page exports here

/**
 * Usage:
 * Instead of:
 *   import { LoginPage } from '../pages/LoginPage';
 *   import { DashboardPage } from '../pages/DashboardPage';
 *   import { NavbarPage } from '../pages/navbarPage';
 * 
 * You can now use:
 *   import { LoginPage, DashboardPage, NavbarPage } from '../pages';
 */
