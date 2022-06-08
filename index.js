import readline from 'readline';
import getArgs from './utils/getArgs.js';
import getUserNameFromArgs from './utils/getUserNameFromArgs.js';
import user from './state/user.js';
import commandHandler from './commands/handler.js';
import { currentDir, farewell,  greeting } from './messages/index.js';

const registerUser = () => {
  const args = getArgs(process);
  const userName = getUserNameFromArgs(args);
  user.setName(userName);
};

const createReadline = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
};

const printMessage = (message) => process.stdout.write(message);

const enterCommand = async (input) => {
  const userInput = input.split(' ');
  try {
    await commandHandler(userInput);
  } catch (error) {
    printMessage(error);
  }

  const currentPath = process.cwd();
  printMessage(currentDir(currentPath));
};

const endWork = (rl, username) => {
  printMessage(farewell(username));
  rl.close();
};

const startCli = () => {
  const rl = createReadline();
  registerUser();

  const username = user.getName();
  printMessage(greeting(username));

  rl.on('line', enterCommand);
  rl.on('SIGINT', () => endWork(rl, username));
};

startCli();
