export default function getFullResponseFromApi(success) {
  return promise = new Promise((resolve, reject) => {
    /* eslint-disable */
    success
      ? resolve({ status: 200, body: 'Success' })
      : reject(Error('The fake API is not working currently'));
  });
}
