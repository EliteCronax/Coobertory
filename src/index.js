document.addEventListener('DOMContentLoaded', () => {
    createHead();
    addStyles();
    
    const body = document.body;
    body.appendChild(createMainContent());
    body.appendChild(createSettingsModal());
    
    initializeSettings();
  });  