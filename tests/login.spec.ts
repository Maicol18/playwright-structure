import { test, expect } from "@playwright/test";
import env from "../helpers/env";
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";

test("Login exitoso con env.ts", async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  // Navegar a la página inicial
  await loginPage.navigate(env.baseURL);

  // Login usando datos de env.ts
  await loginPage.login(env.user, env.password);

  // Validar que estamos en la página Home
  await expect(homePage.title).toHaveText("Products");
});
