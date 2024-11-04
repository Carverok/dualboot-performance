# dualboot-performance
This repository contains a performance testing suite for the OrangeHRM Demo Application, developed using K6, JavaScript, and Node.js. The tests simulate realistic user behavior and measure key performance metrics, providing insights into response times, error rates, and throughput for various scenarios.

## System requirements
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Recommended Development Environment

We recommend using [Visual Studio Code](https://code.visualstudio.com/) to work with this project. Visual Studio Code provides excellent support for JavaScript and TypeScript development, including extensions that enhance the Playwright testing experience.

> **⚠ Important Note:**  
> To work with this project, you must have the [K6](https://grafana.com/docs/k6/latest/set-up/install-k6/) tool installed on your system. Please follow the official [installation guide](https://grafana.com/docs/k6/latest/set-up/install-k6/) to set it up before proceeding.

## Requirements
- **Node.js**
- **K6 CLI**: [Installation Guide](https://grafana.com/docs/k6/latest/set-up/install-k6/)
    ```sh
    # Windows:
    # If you use the Windows Package Manager, install the official packages from the k6 manifests (created by the community):
    winget install k6 --source winget
    ```

## Steps to Get Started with Visual Studio Code

**Clone the Project**  
Open Visual Studio Code, and use the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) to select **Git: Clone**. Enter the repository URL to clone this project to your local machine.

## Testing execution
### Node JS and K6
```sh
# To install project dependencies run:
npm install
```

# Running performance test
1. **Log In**: Go to [OrangeHRM Demo Site](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login) and log in with your credentials.

2. **Open Developer Tools**:
   - Press `F12` (or right-click the page and select **Inspect**) to open Developer Tools.

3. **Navigate to the Application Tab**:
   - In the Developer Tools menu, click on the **Application** tab.

4. **Locate the Cookie**:
   - Under **Storage**, expand the **Cookies** section.
   - Select the site URL to view the cookies stored for the site.

5. **Copy the Cookie Value**:
   - Find the `orangehrm` cookie in the list.
   - Right-click on the **Value** field, select **Copy**, and save this value for future use.

6. **Paste cookie value**
    - Open the `search-employee-api.js` file and paste the value in the `COOKIE_VALUE` constant.

7. **Run the command**
    ```sh
    npm run search-api
    ```

### Running app test

```sh
# To search employee with k6 browser scenario run:
npm run search
```

```sh
# To add employee with k6 browser scenario run:
npm run add-employee
```

### Dinamic reports
After running the `npm run search-api` command an html file called `html-report.html` should be generated. You can open this file which will print a dashboard with an overview of all metrics executions. 