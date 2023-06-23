# Huge Text Editor - Progressive Web App

Huge Text Editor is a Progressive Web App (PWA) that provides a text editing functionality with advanced features. This application allows users to create, edit, and save text content efficiently. It utilizes modern web technologies and provides a seamless experience across different devices and platforms.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

The Huge Text Editor PWA app provides the following features:

- Client-server folder structure for easy development and organization.
- Backend server setup that serves the client application.
- Bundling of JavaScript files using Webpack.
- Generation of HTML, service worker, and manifest files using Webpack plugins.
- Compatibility with next-gen JavaScript syntax for seamless functionality in modern browsers.
- Immediate creation of an IndexedDB database for storage.
- Autosave functionality using IndexedDB when clicking off the DOM window.
- Retrieval of saved content from IndexedDB upon reopening the text editor.
- Installation capability to download the app as an icon on the desktop.
- Registration of a service worker using Workbox for offline support.
- Pre-caching of static assets for improved performance.
- Proper build scripts for deployment to Heroku.

## Installation

To install and run the Huge Text Editor PWA app locally, please follow these steps:

1. Clone the repository:
git clone https://github.com/griffinwoj/HugeTextEdit
2. Navigate to the project root directory:
   npm install

## Usage

To start the Huge Text Editor PWA app locally, follow these steps:

1. From the project root directory, run the following command:
  npm run start
  This command will start the backend server and serve the client application.

2. Open your web browser and visit `http://localhost:3000` to access the Huge Text Editor app.

## Technologies Used

The Huge Text Editor PWA app utilizes the following technologies:

- JavaScript
- React
- IndexedDB
- Webpack
- Workbox
- Heroku

## Contributing

Contributions to the Huge Text Editor PWA app are welcome and encouraged! If you find any issues or have suggestions for improvements, please feel free to submit a pull request.

## License
Source Code provided by edX.org under the MIT License.
The Huge Text Editor PWA app is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
