
Please Refer To This Links:
-  [Backend Repo](https://github.com/vaibhavpnimkar/quant_oops_tech_hack_proctor_backend)
-  [Browser](https://github.com/vaibhavpnimkar/browser)
  
# Proctoring System

![Project Logo](link_to_your_logo.png)

## Overview

The Proctoring System is a comprehensive solution designed for secure and efficient monitoring during remote examinations. It combines advanced features such as remote monitoring, AI monitoring with LLM models, kiosk mode, user impersonation, document ID verification, and identity verification.

## Features

1. **Remote Monitoring**
   - Enables real-time monitoring of candidates during remote examinations.
   - Provides insights into user activity and behavior.

   ![Remote Monitoring](images/remote_monitoring.png)

2. **AI Monitoring with LLM Models**
   - Utilizes advanced Artificial Intelligence models, specifically Large Language Models (LLM), for intelligent monitoring.
   - Analyzes user interactions and detects anomalies or suspicious behavior.

   ![AI Monitoring](images/ai_monitoring.png)

3. **Kiosk Mode**
   - Facilitates a secure and controlled testing environment by restricting access to unauthorized applications or resources.
   - Enhances the integrity of the examination process.

   ![Kiosk Mode](images/kiosk_mode.png)

4. **User Impersonation**
   - Allows authorized personnel to impersonate users for administrative purposes.
   - Streamlines troubleshooting and support processes.

   ![User Impersonation](images/user_impersonation.png)

5. **Document ID Verification**
   - Integrates document verification mechanisms to ensure the authenticity of user-provided identification.
   - Enhances the overall security of the system.

   ![Document ID Verification](images/document_id_verification.png)

6. **Identity Verification**
   - Implements robust identity verification protocols, such as biometric authentication or multi-factor authentication.
   - Ensures that the correct individuals are participating in the examination.

   ![Identity Verification](images/identity_verification.png)

## Getting Started

To get started with the Proctoring System, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/proctoring-system.git

## How to use

- Download the zip by clicking on the green `Code` button and then clicking Download.
- Extract the downloaded files in your desired location.
- Open Command Prompt in that folder or you can use VS Code's integrated terminal as well {for that you have to first open the folder in VS Code}
- run `npm install`
- run `npm install -D @types/node` in case if its not installed for some reason, if it is then ignore this step.
- Development environment is all set, you can now run the dev server by running `npm run dev`
- Now start building your application.

## Structure

Let us see how this code has been setup:

- Just like any other React App, this uses `src` folder as the root folder for our app so that our root files are separate from our app files.
- In your vite configuration file, which is in `vite.config.js` , you'll see an import alias that has been set which helps us to make the imports look clean. It looks like this.

```js
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },,
```

- If you want to configure your Tailwind CSS setup for the app, you can check the `tailwind.config.js` file.
- Please take a look at the `components.json` file which holds the configuration for our shadcn/ui library just in case you want to change something.
- Global CSS file is set to `src/index.css`. You can modify the color codes and other stuff in there to theme the application according to your need.
- `src/assets` will hold your app assets.
- `src/components` will hold all your app components both from shadcn/ui and your custom components.
- `src/lib` will hold your helper files and other config files.
- `src/pages` will hold your all the pages that the app might contain.
