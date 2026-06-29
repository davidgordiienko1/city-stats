const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: true
  });

  const context = await browser.newContext({
    acceptDownloads: true
  });

  const page = await context.newPage();

  const url = process.env.ONEDRIVE_STATS_URL;

  console.log("Downloading:", url);

  await page.goto("about:blank");

  const downloadPromise = page.waitForEvent("download");

  await page.evaluate((downloadUrl) => {
    window.location.href = downloadUrl;
  }, url);

  const download = await downloadPromise;

  await download.saveAs("stats.json.new");

  console.log("Download complete.");

  await browser.close();
})();
