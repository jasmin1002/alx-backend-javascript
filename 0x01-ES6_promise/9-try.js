export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    // [result, 'Guardrail was processed']
    queue.push(result);
  } catch (err) {
    queue.push(err.toString());
  }
  queue[queue.length] = 'Guardrail was processed';
  return queue;
}
