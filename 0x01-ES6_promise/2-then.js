export default function handleResponseFromApi(response) {
  response
    .then(() => console.log('Got a response from the API'))
    .catch(() => Error());
}