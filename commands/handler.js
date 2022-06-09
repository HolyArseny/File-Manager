import { readdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { inputError, executionError } from '../messages/index.js';


const commandMap = {};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const modulesPath = path.join(__dirname, 'modules');

const result = await readdir(modulesPath);
result.forEach(async (file) => {
  const filePath = path.join(modulesPath, file);
  const module = await import(filePath);
  const [name] = file.split('.');
  commandMap[name] = module.default;
});

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