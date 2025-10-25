import { test, expect } from '@playwright/test';
import { LoginFunctions } from '../../functions/LoginFunctions';
import {LoginSelectors} from '../../selectors/selectors';

test.describe('Basic Navigation Test', () => {
    let loginFunctions: LoginFunctions;
    let loginSelectors: typeof LoginSelectors;

    test.beforeEach(async ({ page }) => {
        loginFunctions = new LoginFunctions(page);
    });

    test('should navigate to the homepage', async ({ page }) => {
        await loginFunctions.navigateToHomePage();
        //await expect(page.locator(Selectors.homeLink)).toBeVisible();
        await expect(page).toHaveURL("https://bookcart.azurewebsites.net/");
        
    });

    

    test("Register a new user", async ({ page }) => {
        await loginFunctions.navigateToHomePage();
        await page.locator(LoginSelectors.loginbtn).click();
        await page.locator(LoginSelectors.register.registerbtn).click();
        await page.locator(LoginSelectors.register.firstName).fill("Tester");
        await page.locator(LoginSelectors.register.lastName).fill("R");
        await page.locator(LoginSelectors.register.userName).fill("Tester1244");
        await page.locator(LoginSelectors.register.password).fill("Test@1234");
        await page.locator(LoginSelectors.register.confirmPassword).fill("Test@1234");
        await page.locator(LoginSelectors.register.maleRadioBtn).check();
        await page.locator('//*[@class="mdc-button__label"and contains(text(),"Register")]').click();
    });


    test("login with valid credentials", async ({ page }) => {
        await loginFunctions.navigateToHomePage();
        await page.locator(LoginSelectors.loginbtn).click();
        await loginFunctions.login("Tester1244", "Test@1234");
    });
});