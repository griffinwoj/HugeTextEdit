// const butInstall = document.getElementById('buttonInstall');

// // Logic for installing the PWA
// // TODO: Add an event handler to the `beforeinstallprompt` event
// window.addEventListener('beforeinstallprompt', (event) => {});

// // TODO: Implement a click event handler on the `butInstall` element
// butInstall.addEventListener('click', async () => {});

// // TODO: Add an handler for the `appinstalled` event
// window.addEventListener('appinstalled', (event) => {});

//below is the modified source code

const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
  // Update UI to notify the user about the installation option
  butInstall.style.display = 'block';
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the installation prompt
    deferredPrompt.prompt();
    const result = await deferredPrompt.userChoice;
    if (result.outcome === 'accepted') {
      console.log('PWA installation accepted');
    } else {
      console.log('PWA installation dismissed');
    }
    deferredPrompt = null;
    // Hide the installation button
    butInstall.style.display = 'none';
  }
});

// Add a handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed');
});
