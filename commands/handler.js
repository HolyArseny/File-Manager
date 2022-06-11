import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { inputError, executionError } from '../messages/index.js';


const commandMap = {};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulesPath = path.join(__dirname, 'modules');

const importCommands = async () => {
  const result = await readdir(modulesPath);
  for (const file of result) {
    const filePath = path.join(modulesPath, file);
    const fileURL = pathToFileURL(filePath);
    const module = await import(fileURL);
    const [name] = file.split('.');
    commandMap[name] = module.default;
  }
};
importCommands();

export default async (userInput) => {
  const [ command, ...commandValue ] = userInput;
  const currentCommand = commandMap[command];
  if (!currentCommand) throw inputError;

  try {
    await commandMap[command](commandValue);
  } catch (e) {
    throw executionError;
  }
};