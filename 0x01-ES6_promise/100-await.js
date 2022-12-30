import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
  // code goes here
  return {
    photo: await uploadPhoto(),
    user: await createUser(),
  };
}
