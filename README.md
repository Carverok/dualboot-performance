# dualboot-performance
This repository contains a performance testing suite for the OrangeHRM Demo Application, developed using K6, JavaScript, and Node.js. The tests simulate realistic user behavior and measure key performance metrics, providing insights into response times, error rates, and throughput for various scenarios.

## System requirements
- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- MacOS 12 Monterey, MacOS 13 Ventura, or MacOS 14 Sonoma.
- Debian 11, Debian 12, Ubuntu 20.04 or Ubuntu 22.04, with x86-64 or arm64 architecture.

## Recommended Development Environment

We recommend using [Visual Studio Code](https://code.visualstudio.com/) to work with this project. Visual Studio Code provides excellent support for JavaScript and TypeScript development, including extensions that enhance the Playwright testing experience.

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

### Testing execution
### Node JS and K6
```sh
# To install project dependencies run:
npm install
```

### Running scenarios
```sh
# To search employee scenario run:
npm run search
```

```sh
# To add employee scenario run:
npm run add-employee
```