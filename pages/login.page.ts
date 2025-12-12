import { BasePage } from "./base.page";
import { Page } from "@playwright/test";

export class LoginPage extends BasePage {
  constructor(page: Page) { super(page); }

  username = this.page.getByPlaceholder("Username");
  password = this.page.locator("#password");
  btnLogin = this.page.locator("#login-button");

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.btnLogin.click();
  }
}