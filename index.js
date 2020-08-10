const {Builder, By, Key, util} = require("selenium-webdriver")
async function example() {
    let driver = await new Builder().forBrowser("chrome").build();
    try{
        await driver.get("https://www.ao.com");
        await (await driver.findElement(By.xpath('//*[@data-item-id="browseAllCategories"]'))).click();
    }
    finally{
        await driver.quit();
    }
    console.log('Test Passed')
}

//Calls the function
example();
