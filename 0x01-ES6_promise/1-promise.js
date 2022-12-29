export default function getFullResponseFromApi(success) {
  // promise code goes here
  const promise = new Promise((resolve, reject) => {
    /* eslint-disable */
    if (success) {
      resolve({ status: 200, body: 'Success' })
    } else {
      reject(Error('The fake API is not working currently'))
    };
  });
  return promise;
}
