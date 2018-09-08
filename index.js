const asyncFn = async function() {
  return await 'hello' + ' ' + 'world';
}

console.log(asyncFn());
