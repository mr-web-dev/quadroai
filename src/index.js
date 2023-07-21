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

let admin = false;
document.addEventListener('mousedown', function(){
  if (admin == true) {
    // context menu
    document.addEventListener('contextmenu', function(e){
      e.preventDefault = false;
    })
    // view sourse
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'u' || e.key === 'U') {
        e.preventDefault = false;
      }
    });
    // download
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 's' || e.key === 'S') {
        e.preventDefault = false;
      }
    });
    // print
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'p' || e.key === 'P') {
        e.preventDefault = false;
      }
    });
    // copy
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'c' || e.key === 'C') {
        e.preventDefault = false;
      }
    });
    // cut
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'x' || e.key === 'X') {
        e.preventDefault = false;
      }
    });
    // select
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'a' || e.key === 'A') {
        e.preventDefault = false;
      }
    });
  } else {
    // context menu
    document.addEventListener('contextmenu', function(e){
      e.preventDefault()
    })
    // view sourse
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'u' || e.key === 'U') {
        e.preventDefault();
      }
    });
    // download
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 's' || e.key === 'S') {
        e.preventDefault();
      }
    });
    // print
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'p' || e.key === 'P') {
        e.preventDefault();
      }
    });
    // copy
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'c' || e.key === 'C') {
        e.preventDefault();
      }
    });
    // cut
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'x' || e.key === 'X') {
        e.preventDefault();
      }
    });
    // select
    document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && e.key === 'a' || e.key === 'A') {
        e.preventDefault();
      }
    });
  };
})