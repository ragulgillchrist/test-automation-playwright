import { Page } from '@playwright/test';

export class LoginFunctions {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToHomePage() {
        await this.page.goto(process.env.BASE_URL || 'https://bookcart.azurewebsites.net');
    }

    // Add more functions as needed
}