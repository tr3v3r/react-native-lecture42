import { AsyncStorage } from 'react-native';

export const STORAGE_PATH_POSTS = 'STORAGE_PATH_POSTS';

const image_1 = require('../assets/post_placeholder_1.jpg');
const image_2 = require('../assets/post_placeholder_2.jpg');
const image_3 = require('../assets/post_placeholder_3.jpg');


export async function getPosts() {
  try {
    const data = await AsyncStorage.getItem(STORAGE_PATH_POSTS);
    if (!data) throw new Error();

    return JSON.parse(data);
  } catch (error) {
    await AsyncStorage.setItem(
      STORAGE_PATH_POSTS,
      JSON.stringify(
        [
          {
            name: 'Bruce Wayne',
            location: 'Gotham',
            image: image_1,
          },
          {
            name: 'Jim Gordon',
            location: 'Gotham',
            image: image_2,
          },
          {
            name: 'Alfred Pennyworth',
            location: 'Gotham',
            image: image_3,
          },
        ],
      ),
    );

    return getPosts();
  }
}

export async function addPost(post) {
  const data = await getPosts();

  return AsyncStorage.setItem(
    STORAGE_PATH_POSTS,
    JSON.stringify([post, ...data]),
  );
}
