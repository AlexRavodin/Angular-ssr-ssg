const fs = require('fs');
const path = require('path');

const browserPath = path.join(__dirname, 'dist/ssg-only/browser/web.config');
const distPath = path.join(__dirname, 'dist/ssg-only/web.config');
const mainJsBrowserPath = path.join(__dirname, 'dist/ssg-only/browser/start-server.js');
const mainJsDistPath = path.join(__dirname, 'dist/ssg-only/start-server.js');

if (fs.existsSync(browserPath)) {
  fs.renameSync(browserPath, distPath);
  console.log('web.config moved to dist/ssg-only');
} else {
  console.error('web.config not found in browser folder');
}

if (fs.existsSync(mainJsBrowserPath)) {
  fs.renameSync(mainJsBrowserPath, mainJsDistPath);
  console.log('start-server.js moved to dist/ssg-only');
} else {
  console.error('start-server.js not found in browser folder');
}
