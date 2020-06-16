/**
 * To avoid ejecting from create-react-app and wanting to make it easy to manage photos
 * used, using node, fetch a list of photos and add them as an environment variable.
 */
const fs = require('fs');

fs.readdir('./public/photos', (err, files) => {
  const photos = files.join(' ');

  fs.writeFile('./.env.local', `REACT_APP_PHOTOS=${photos}`, (err, files) => {
    console.log('PHOTOS=', photos);
  });
});
