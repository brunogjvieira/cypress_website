import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: "https://automationexercise.com/",
    numTestsKeptInMemory: 1,
    defaultCommandTimeout: 5000,
    requestTimeout: 5000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    chromeWebSecurity: true,

  },
})