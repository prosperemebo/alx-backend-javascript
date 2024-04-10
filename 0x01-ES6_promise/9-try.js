export default function guardrail(mathFunction) {
  const queue = [];

  mathFunction()
    .then((result) => queue.push(result))
    .catch((error) => queue.push(error.toString()) )
    .finally(() => queue.push('Guardrail was processed'));

  return queue;
}
