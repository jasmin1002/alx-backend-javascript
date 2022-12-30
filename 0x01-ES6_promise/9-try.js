export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  }
  queue[queue.length] = 'Guardrail was processed';
  return queue;
}
