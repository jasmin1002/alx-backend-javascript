import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // code goes here
  const photo = uploadPhoto();
  const user = createUser();
  const promises = [photo, user];

  return Promise.all(promises)
    .then((responses) => {
      console.log(
        `${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`
      );
    })
    .catch(() => console.log('Signup system offline'));
}
