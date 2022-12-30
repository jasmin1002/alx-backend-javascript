export default function divideFunction(numerator, denominator) {
//   try {
//     // code goes here
//     if (!denominator) throw new Error("cannot divide by 0");
//     return numerator / denominator;
//   } catch (err) {
//     // error code
//     console.error(err);
//   }
  if (!denominator) throw Error('cannot divide by 0');
  return numerator / denominator;
}
