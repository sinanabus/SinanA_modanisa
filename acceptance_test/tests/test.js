const { openBrowser, closeBrowser, write, into, goto, textBox, click, button, text, listItem } = require('taiko');
const assert = require("assert");
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
    await goto("http://localhost:8081/")
});

step("Test header contains To Do App", async () => {
    assert.ok(await text("To Do App").exists());
}
);

step("Write <item>", async (item) => {
    await write(item, into(textBox("Create a new todo")));
});

step("Click AddButton", async () => {
    await click(button('Add'));
});

step("ToDoList contains <item>", async (item) => {
    assert.ok(await listItem(item).exists());
});

