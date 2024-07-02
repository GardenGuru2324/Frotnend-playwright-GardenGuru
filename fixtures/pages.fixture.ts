import { test as base } from "@playwright/test";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { RegisterPage } from "../pages/registerPage";
import { MyPlantsPage } from "../pages/myPlantsPage";

type PageFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
  myPlantsPage: MyPlantsPage;
};

export const test = base.extend<PageFixture>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },
  myPlantsPage: async ({ page }, use) => {
    await use(new MyPlantsPage(page));
  },
});
