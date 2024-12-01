const createSettingsModal = () => {
    const modal = document.createElement('div');
    modal.className = 'settings-modal';
    
    const header = document.createElement('div');
    header.className = 'modal-header';
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Settings';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'close-btn';
    closeBtn.textContent = '×';
    
    header.append(h3, closeBtn);
    modal.appendChild(header);
    
    const settingsItems = createSettingsItems();
    modal.appendChild(settingsItems);
    
    return modal;
  };
  
  const initializeSettings = () => {
    const settingsIcon = document.querySelector('.settings-icon');
    const settingsModal = document.querySelector('.settings-modal');
    const closeBtn = document.querySelector('.close-btn');
    
    settingsIcon.addEventListener('click', () => {
      settingsModal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
      settingsModal.style.display = 'none';
    });
  };