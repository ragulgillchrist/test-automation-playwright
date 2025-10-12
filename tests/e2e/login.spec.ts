import { test, expect } from '@playwright/test';
import { LoginFunctions } from '../../functions/LoginFunctions';
import { Selectors } from '../../selectors/selectors';

test.describe('Basic Navigation Test', () => {
    let loginFunctions: LoginFunctions;

    test.beforeEach(async ({ page }) => {
        loginFunctions = new LoginFunctions(page);
    });

    test('should navigate to the homepage', async ({ page }) => {
        await loginFunctions.navigateToHomePage();
        //await expect(page.locator(Selectors.homeLink)).toBeVisible();
        await expect(page).toHaveURL("https://bookcart.azurewebsites.net/");
    });
});