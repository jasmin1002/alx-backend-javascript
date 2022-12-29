export default function handleResponseFromApi(response) {
  const status = 200;
  const body = 'success';
  response
    .then(() => {{ status, body }})
    .catch(() => Error())
    .finally(() => console.log('Got a response from the API'));
}
