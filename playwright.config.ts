import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    headless: false,          // Navegador visible
    screenshot: 'on',         // Capturas automáticas en cada paso
    video: 'on-first-retry',  // Video solo si falla la prueba en el primer intento
    trace: 'on',              // Trazas en cada test
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    baseURL: 'https://www.saucedemo.com',

    // Hace que el navegador se vea mas lento (para que puedas observar)
    launchOptions: {
      slowMo: 300             // Ajusta entre 100–500 según tu gusto
    }
  },

  reporter: [
    ['html', { open: 'never' }], // No abre automáticamente, tú decides cuando verlo
  ],

  retries: 1,   // Reintenta una vez si falla
  timeout: 30000
});
