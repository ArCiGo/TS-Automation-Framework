# Automation Framework made with JS + Cypress

The goal of this project was to put into practice my knowledge using this amazing tool for automation testing.

## The project 💻

The SWAG Labs/Sauce Demo store, from Sauce Labs, was automated using JS + Cypress. It generates an HTML report for passed and failed tests. Also, this project has GitHub Actions and Docker. 

## Tools ⚙️

* *Cypress v10.3.1*.
* *cypress-mochawesome-reporter v3.2.0*.
* *GitHub Actions*.
* *Docker*.

## Main project structure 🗂️

```
.
├── .github/
│   └── workflow/
│       └── main.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.spec.cy.js
│   │   ├── logout.spec.cy.js
│   │   └── shoppingCart.spec.cy.js
│   ├── fixtures/
│   │   └── products.json
│   ├── support/
│   │   ├── commands.js
│   │   ├── e2e.js
│   │   └── index.js
│   └── tsconfig.json
├── cypress.config.js
├── cypress.env.json
├── Dockerfile
└── package.json
```

## Setup 🛠️

I developed the code using a Mac, but it should work on a PC.

The following steps can be executed using a terminal (I use [hyper](https://hyper.is/)), or using the terminal provided by VS Code.

1. Clone the repo on your computer at any path you want.-

```bash
git clone https://github.com/ArCiGo/JS-Automation-Framework.git
```
2. In the path you cloned the repo, open the project folder and install the packages.-
```bash
cd JS-Automation-Framework
npm i
````

## Run the tests ⚡
```bash
# If you don't want to open the Cypress GUI, you can execute the following commands:
npm run cypress:open:cli
# or
npm run html-report

# If you want to open the GUI:
npm run cypress:open
```

When you run the tests, a new folder is generated inside the `cypress` folder (`reports`). This folder contains the report for the executed tests. If a test fails, the report will include a screenshot to see what the failure was.

![UI Report Sample](./Img_Report_01.png)
![UI Report Sample](./Img_Report_02.png)

## Extra! 🗞

Do you want to see the same project made with TS? Just click [here!](https://github.com/ArCiGo/JS-Automation-Framework/tree/AutomationFrameworkSample_TS)