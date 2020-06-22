/**
 * To avoid ejecting from create-react-app and wanting to make it easy to manage photos
 * used, using node, fetch a list of photos and add them as an environment variable.
 */
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const getPhotos = async (photoPath) => {
  const files = await readdirAsync(photoPath);
  const photos = files.filter(
    (file) => path.extname(file).toLowerCase() === '.jpg',
  );

  return photos;
};

const getStyles = async (stylesPath) => {
  const json = await readFileAsync(stylesPath);

  return JSON.parse(json);
};

(async () => {
  try {
    const [
      defaultPhotos,
      defaultStyles,
      smallPhotos,
      smallStyles,
    ] = await Promise.all([
      getPhotos('./public/photos'),
      getStyles('./public/photos/styles.json'),
      getPhotos('./public/photos/small'),
      getStyles('./public/photos/small/styles.json'),
    ]);

    const photos = defaultPhotos.map((photo) => {
      const predicate = (p) => p === photo;
      const smallFile = smallPhotos.find(predicate);
      const defaultStyleKey = Object.keys(defaultStyles).find(predicate);
      const smallStyleKey = Object.keys(smallStyles).find(predicate);

      return {
        large: {
          file: `/photos/${photo}`,
          style: defaultStyleKey && defaultStyles[defaultStyleKey],
        },
        small: smallFile && {
          file: `/photos/small/${photo}`,
          style: smallStyleKey && smallStyles[smallStyleKey],
        },
      };
    });

    await writeFileAsync(
      './.env.local',
      `REACT_APP_PHOTOS="${JSON.stringify(photos)}"`,
    );
    console.log('PHOTOS=', photos);
  } catch (err) {
    console.error(err);
  }
})();
