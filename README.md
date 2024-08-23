# Todo App

## Overview

Todo App is a sleek and intuitive task management application developed with React.js and designed using Figma for an optimal UI/UX experience. This app enables you to create, manage, and organize tasks efficiently.

**TodoApp** allows you to:

-  Add and edit tasks with ease.
-  Categorize tasks to stay organized.
-  Track and manage your to-do list effectively.

As a frontend-based web application, TodoApp operates entirely within your browser, which means that all task data is stored locally on your device's browser.

**Example:**

Suppose you need to keep track of various tasks and deadlines. With TodoApp, you can:

1. Create a Task List: Add tasks such as "Buy groceries."
2. Organize Tasks: Sort tasks into categories like "Work," "My Day," or "Personal"
3. Manage and Update: Easily update task details, mark tasks as completed, or delete tasks when they are no longer needed.

## Table of Contents

1. [Features](##Features)
2. [Installation](##Installation)
3. [Usage](##Usage)
4. [Contributing](##Contributing)
5. [License](##License)
6. [Contact](##Contact)

## Features

TodoApp offers a range of features designed to help you manage and organize your tasks efficiently. Here’s what you can do with the app:

-  Add and Edit Tasks: Quickly add new tasks and modify existing ones. Whether it’s a simple reminder or a complex to-do item, you can manage your tasks effortlessly.

-  Categorize Tasks: Organize your tasks into customizable categories. Use predefined categories like "My Day," or "Personal," or even create your own to suit your needs.

-  Track and Manage Your To-Do List: Keep track of your progress with a clear and organized view of your tasks. Mark tasks as completed, and easily update or remove tasks as needed.

-  Local Storage: As a frontend-based application, TodoApp stores all your task data locally in your browser. This ensures that your data remains private and accessible only from your device.

-  User-Friendly Interface: Todo App provides a sleek and intuitive user experience, making task management both efficient and enjoyable.

## Installation

### Step-by-Step Guide to Deploy and Start

1. **Clone the Repository**

   Clone the Repository:
   Use Git to clone the repository from GitHub to your local machine. Replace `<repository-url>` with the URL of the GitHub repository.

   ```bash
   git clone <repository-url>
   ```

   Navigate to the Project Directory:
   Change into the project directory created by the clone command.

   ```bash
   cd <repository-name>
   ```

2. **Install Project Dependencies**
   Install Dependencies:
   Use npm to install the necessary dependencies listed in package.json.
   ```bash
   npm install
   ```
3. **Build the Project for Production**
   Build the Project:
   Create a production-ready version of the project. This command generates the build files in the dist directory.

   ```bash
   npm run build
   ```

   The dist folder will now contain the optimized assets for deployment.

4. **Serve the Production Build Locally**
   To test the production build locally, you need to serve it using a static file server.
   In any version, you will likely need to use `sudo`

   -  **Using serve**
      Install serve Globally (if not already installed):

      ```bash
      npm install -g serve
      ```

      Serve the Production Build:
      Navigate to the project directory and serve the dist folder.

      ```bash
      serve -s dist
      ```

      Access the Project:
      Open your web browser and go to http://localhost:5000 (or the port specified) to view the locally served production build.

   -  **Using http-server**
      Install http-server Globally (if not already installed):

      ```bash
      npm install -g http-server
      ```

      Serve the Production Build:
      Navigate to the project directory and serve the dist folder.

      ```bash
      http-server dist
      ```

      Access the Project:
      Open your web browser and go to http://localhost:8080 (or the port specified) to view the locally served production build.

5. **Run the Development Server (optional)**
   For development purposes, you might want to run the development server which provides hot reloading and other development features.
   Start the Development Server:
   Run the development server provided by Vite.
   ```bash
   npm run dev
   ```
   Access the Project:
   Open your web browser and go to http://localhost:5173 (default port for Vite) to see the development build.

### Prerequisites

-  Git.
-  Node.js (>=16.0.0)
-  npm (>=7.0.0)