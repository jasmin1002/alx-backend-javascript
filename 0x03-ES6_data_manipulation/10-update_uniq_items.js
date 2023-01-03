export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  for (const [grocery, quantity] of map) {
    if (typeof quantity === 'number' && quantity === 1) {
      map.set(grocery, 100);
    }
  }
}
