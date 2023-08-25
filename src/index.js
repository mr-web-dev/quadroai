import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* =================================================================
prevented
================================================================= */

// context menu
document.addEventListener('contextmenu', function(e){
  e.preventDefault();
})
// view sourse
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'u' || e.key === 'U' || e.key === 'г' || e.key === 'Г') {
    e.preventDefault();
  };
});
// download
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 's' || e.key === 'S' || e.key === 'ы' || e.key === 'Ы') {
    e.preventDefault();
  };
});
// print
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'p' || e.key === 'P' || e.key === 'з' || e.key === 'З') {
    e.preventDefault();
  };
});
// copy
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'c' || e.key === 'C' || e.key === 'с') {
    e.preventDefault();
  };
});
// cut
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'x' || e.key === 'X' || e.key === 'ч') {
    e.preventDefault();
  };
});
// select all
document.addEventListener('keydown', function(e) {
  if (e.ctrlKey && e.key === 'a' || e.key === 'A' || e.key === 'ф') {
    e.preventDefault();
  };
});