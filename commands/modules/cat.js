import { readFile } from 'fs/promises';

export default async ([commandValue]) => {
  const file = await readFile(commandValue);
  process.stdout.write(file);
};
