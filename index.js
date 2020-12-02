const { build } = require('./sequential-exec');
const commands = [
  'mkdir test',
  'touch ./test/readme.txt',
  'echo Hello world >> ./test/readme.txt',
  'cat ./test/readme.txt',
  'rm -rf test',
];

build(commands);
