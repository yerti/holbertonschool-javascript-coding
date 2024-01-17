const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isTTY = process.stdin.isTTY;

if (isTTY) {
  console.log('Welcome to Holberton School, what is your name?');
}

rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
  console.log('This important software is now closing');
  rl.close();
});

// Manejar la entrada no interactiva (a través de tubería)
if (!isTTY) {
  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    rl.emit('line', input.trim());
  });
}

