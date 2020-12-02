const { exec } = require('child_process');
const commands = [
  'mkdir test',
  'touch ./test/readme.txt',
  'echo Hello world >> ./test/readme.txt',
  'cat ./test/readme.txt',
  'rm -rf test',
];

const run = (cmd, next) => {
  try {
    exec(cmd, (error, stdout, stderr) => {
      next(error, stdout, stderr);
    });
  } catch (error) {
    console.error(error);
  }
};

const build = (cmds) => {
  const cmd = cmds.shift();
  run(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error.message);
      return;
    }
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);
    if (cmds.length > 0) build(cmds);
  });
};

build(commands);
