const {Builder, By, Key, util, until} = require("selenium-webdriver")


async function example() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();
    
    try{

        await driver.get("https://ao.com");
    
    }
    finally{
        await driver.quit();
    }
}

//Calls the function.
example();