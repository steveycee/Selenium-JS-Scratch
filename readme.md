# Selenium JS Scratch Project

For Windows 10 using nodeJS (I like to use Visual studio code IDE).

The intention here is to create a space where I can build and check tests to be run inside of New Relic Synthetics. As such please note that clever patterns like page object model are not necessarally used as everything has to happen in the one file with limited scope.

That being said it should also serve as a nice basic example of Selenium Webdriver using nodeJS.

## Before you start:

This looks like it might be a lot but I've just gone into a lot of detail.

### If you're really new:

* If you're really new get an IDE to work in, I recommend Visual Studio Code which you can get from [here.](https://code.visualstudio.com/)
* Also download node JS from [here.](https://nodejs.org/en/) *Get LTS (latest stable)*

### If you're kinda new - Setting up your browser and environment variables

* Download and unzip a webdriver (Gecko for this project which you can find [here.](https://github.com/mozilla/geckodriver/releases/))
* Set an environment variable 
    * Unzip Gecko
    * Make a note of the path where it lives (C:/user/folder/unzippedthing)
    * Press start in Windows and type variables
    * Open edit system environment variables
    * Click environment variables in the bottom right
    * Click Path in the list in the top pane
    * Click Edit...
    * Click New
    * Paste in the folder location you made a note of above
    * Press ok
    * Open command prompt or powershell as admin
    * type geckodriver and press enter (if you went for geckodriver, if not type the name of the webdriver you went for thats in the folder you set in the environment variables)
    * you should see another command prompt open with ```342####.... geckodriver etc...``` - if you something roughly like this, you're good.

### If you're kinda new - Setting up your project and installing what you need

* Create a folder for our project to live in.
* Create a new file inside the folder you defined above called index.js
* Open Visual Studio Code and click terminal > new terminal from the menu bar at the top. This should open a terminal in the bottom half of the screen.
* Inside Visual Studio Code click File > Open Folder 
    * Open the folder you created earlier for your project to live in.
    * You'll know you're in the right place as you should be able to see the index.js you created earlier on.
* **Optional** You can type nmp init into your command line/terminal and create a project with a name and author etc.
* Install Selenium via NPM (go [here](https://www.npmjs.com/package/selenium-webdriver) to read more)
    * you can do this by going to the terminal and typing: ```npm install selenium-webdriver``` and pressing return.

Now you're ready to go to your index.js file and start writing your first test. I've provided a super simple test below.

## Basic Single file test

```
// filename: index.js

const {Builder, By, Key, util} = require("selenium-webdriver")
async function example() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("https://www.ao.com");
}

example(); //calls the function

// type: 'node index' into command prompt or powershell openned at the file location of index.js
```
Test should, open a firefox instance and navigate to ao.com, *should* not fail and should not close the browser window

## Useful links:

* Short tutorial on using Selenium JS in conjunction with VS Code on Windows [here.](https://www.youtube.com/watch?v=fj0Ud16YJJw)
* Selenium-Webdriver API docs for Javascript [here.](https://www.selenium.dev/selenium/docs/api/javascript/)
* Modern Webdriver using JS [here.](https://webdriver.io/)
* Cypress JS end to end testing [here.](https://www.cypress.io/)
* A bit on New Relics Synthetics [here.](https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/getting-started/introduction-new-relic-synthetics)
