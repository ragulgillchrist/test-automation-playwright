import { Page } from '@playwright/test';
// This is the corrected line:
import {LoginSelectors} from '../selectors/selectors';

export class LoginFunctions {

       private readonly page: Page;

       constructor(page: Page) {
              this.page = page;
       }

       async login(email: string, password: string) {
              // The rest of your code was already correct
              await this.page.locator(LoginSelectors.emailInput).fill(email);
              await this.page.locator(LoginSelectors.passwordInput).fill(password);
              await this.page.locator(LoginSelectors.loginbtn).nth(1).click();
       }

       async navigateToHomePage() {
              await this.page.goto(process.env.BASE_URL || 'https://bookcart.azurewebsites.net/');
       }
}