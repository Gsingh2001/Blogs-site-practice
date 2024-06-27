import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import icons from '/public/assets/Logo/icon.json';

const root = document.getElementById('root');

icons.icons.forEach(icon => {
  const link = document.createElement('link');
  Object.keys(icon).forEach(attr => {
    if (attr !== 'name' && attr !== 'content') {
      link.setAttribute(attr, icon[attr]);
    }
  });
  if (icon.name) {
    const meta = document.createElement('meta');
    meta.setAttribute('name', icon.name);
    meta.setAttribute('content', icon.content);
    document.head.appendChild(meta);
  } else {
    document.head.appendChild(link);
  }
});

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
