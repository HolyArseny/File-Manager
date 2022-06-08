import { readFile } from 'fs/promises';

export default async ([commandValue]) => {
  const file = await readFile(commandValue, { encoding: 'utf8' });
  process.stdout.write(file);
};
