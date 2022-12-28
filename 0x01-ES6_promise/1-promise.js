export default function getFullResponseFromApi(success) {
  // promise code goes here
  return new Promise((resolve, reject) => {
    /* eslint-disable */
    success
      ? resolve({ status: 200, body: 'success' })
      : reject(Error('The fake API is not working currently'));
  });
}
