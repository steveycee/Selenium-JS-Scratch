const {Builder, By, Key, util, until} = require("selenium-webdriver")

//To run > node hp_hmc_basicCheck.spec

async function example() {
    let driver = await new Builder()
        .forBrowser("chrome")
        .build();
    
    try{

        // FLAKE: Given what is targetted below this will only work for the UK site.

        await driver.get("https://ao.com");

        // COOKIE BANNER(S) - Hyper Jank nonsense to get rid of them/it.

        //Set variant
        //FLAKE: When we stop with the whole variant stuff it will fail here as the variant cookie may not be in place at all.

        await driver.manage().deleteCookie('AOLCookieBannerTestVariant');
        await driver.manage().addCookie({name:'AOLCookieBannerTestVariant', value: 'in-traffic-split-variant'});

        //Accept Banner

        await driver.manage().deleteCookie('AOCookiebannerConsent');
        await driver.manage().addCookie({name:'AOCookiebannerConsent', value: 'accepted'});
            
        //Refresh is here for if the banner is already up, as far as I can tell it only does the one check for the accepted cookie. 
        //Could alternatively not refresh and instead just dismiss it via the UI but it feel like the name of the cookie is less likely to change than a locator, also this may be a little quicker.
        
        await driver.navigate().refresh();

        // HMC TEST

        //FLAKE: Some flake here, race condition issue sometimes we are looking for the element before its there mitigated by the above wait.
        //James P would be rolling in his grave.
        await driver.wait(until.elementLocated(By.xpath('//*[@data-filtername="cat"]')), 30000);
        await driver.findElement(By.xpath('//*[@data-filtername="cat"]')).click();

        await driver.wait(until.elementLocated(By.xpath('//*[@data-hmc-catid="tvs"]')), 30000);
        await driver.findElement(By.xpath('//*[@data-hmc-catid="tvs"]')).click();

        await driver.wait(until.elementLocated(By.className('searchNow')), 30000);
        await driver.findElement(By.className('searchNow')).click();



        //CHECK ITS A LISTER

        //FLAKE: If we decide to go to cat pages or w/e from the HMC then this will fail incorrectly OR if for w/e reason we change the pattern of the lister URL.

        await driver.getCurrentUrl().then(function (url) {
                if (url.match(/\/l\//ig)) {
                    console.log("PASS: Resulting URL matches a lister pattern");
                }else{
                    console.log("FAIL: Resulting URL did not match a lister pattern");
                }
            });


        // await driver.getCurrentUrl();
    
    }
    finally{
        // await driver.quit();
    }
}

//Calls the function.
example();