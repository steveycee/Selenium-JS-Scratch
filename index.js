const {Builder, By, Key, util} = require("selenium-webdriver")
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ao.com");
    // await (await driver.findElement(By.className("aoSiteLogoLink"))).click();
    // await (await driver.findElement(By.class("???DATAID"))).sendKeys("Samsung", Key.RETURN);
}

//Calls the function
example();
