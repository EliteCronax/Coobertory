const createHead = () => {
    const head = document.head;
    
    const meta1 = document.createElement('meta');
    meta1.charset = 'UTF-8';
    const meta2 = document.createElement('meta');
    meta2.name = 'viewport';
    meta2.content = 'width=device-width, initial-scale=1.0';
    
    const title = document.createElement('title');
    title.textContent = 'Coobertory - Home';
    
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = 'images/coobert.ico';
    favicon.type = 'image/x-icon';
    
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap';
    fontLink.rel = 'stylesheet';
    
    const faLink = document.createElement('link');
    faLink.rel = 'stylesheet';
    faLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    
    [meta1, meta2, title, favicon, fontLink, faLink].forEach(el => head.appendChild(el));
  };
  
  const createMainContent = () => {
    const container = document.createElement('div');
    container.className = 'container';
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Coobertory';
    
    const subtitle = document.createElement('div');
    subtitle.className = 'subtitle';
    subtitle.textContent = 'Your Ultimate Gaming Collection Hub';
    
    const mainButtons = document.createElement('div');
    mainButtons.className = 'main-buttons';
    
    const buttons = [
      { text: 'Browse Games', href: 'pages/games.html', class: 'button' },
      { text: 'Other', href: 'pages/other.html', class: 'button' },
      { text: 'Links', href: 'pages/links.html', class: 'button' },
      { text: 'GitHub', href: 'https://github.com/EliteCronax/Coobertory', class: 'button' },
      { text: 'Discord', href: 'https://discord.gg/ayx9jUzpaF', class: 'discord' }
    ];
    
    buttons.forEach(btn => {
      const a = document.createElement('a');
      a.href = btn.href;
      a.className = btn.class;
      a.textContent = btn.text;
      mainButtons.appendChild(a);
    });
    
    container.append(h1, subtitle, mainButtons);
    return container;
  };
  