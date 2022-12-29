import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
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
