import readline from 'readline';
import { homedir } from 'os';
import getArgs from './utils/getArgs.js';
import getUserNameFromArgs from './utils/getUserNameFromArgs.js';
import user from './state/user.js';
import commandHandler from './commands/handler.js';
import { currentDir, farewell,  greeting } from './messages/index.js';

const createReadline = () => {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
};

const rl = createReadline();

const printMessage = (message) => process.stdout.write(message);

const endWork = (username) => {
  printMessage(farewell(username));
  rl.close();
};

const enterCommand = async (input, username) => {
  if (input === '.exit') return endWork(username);

  const { USER_INPUT_SPLIT } = process.env;
  const userInput = input.split(USER_INPUT_SPLIT);

  try {
    await commandHandler(userInput);
  } catch (error) {
    printMessage(error);
  }

  const currentPath = process.cwd();
  printMessage(currentDir(currentPath));
};

const registerUser = () => {
  const args = getArgs(process);
  const userName = getUserNameFromArgs(args);
  user.setName(userName);
};

const setHomeDir = () => {
  const homeDirectory = homedir();
  process.chdir(homeDirectory);
};

const startCli = () => {
  process.env['USER_INPUT_SPLIT'] = ' ';

  setHomeDir();
  registerUser();
  const username = user.getName();
  printMessage(greeting(username));

  rl.on('line', (input) => enterCommand(input, username));
  rl.on('SIGINT', () => endWork(username));
};

startCli();
