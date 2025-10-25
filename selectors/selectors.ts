import { register } from "module";

export const LoginSelectors = {

    
    emailInput: '//mat-label[contains(text(),"Username")]',
    passwordInput: 'input[type="password"]',
    loginButton: 'button[type="submit"]',
    loginbtn: '//span[contains(text(),"Login")]',

    register:{

        registerbtn:'//span[contains(text(),"Register")]',
        firstName:'//input[@placeholder="First name"]',
        lastName:'//input[@placeholder="Last Name"]',
        userName:'//input[@placeholder="User name"]',
        password:'//input[@placeholder="Password"]',
        confirmPassword:'//input[@placeholder="Confirm Password"]',
        maleRadioBtn:'//input[@type="radio"and @value="Male"]',
    }
};