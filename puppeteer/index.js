const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://www.piadas.com.br/?page=3");
  await page.screenshot({ path: "piadas.png" });

  await browser.close()

})();
