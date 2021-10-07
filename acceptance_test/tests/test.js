const { openBrowser, closeBrowser, write, into, goto } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';


beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Go to local server", async () => {
    await goto("http://localhost:8080/")
});


step("Add <item>", async (item) => {
    await write(item, into(textBox("text box")));
});
