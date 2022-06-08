import { writeFile } from 'fs/promises';
import { join } from 'path';

export default async ([commandValue]) => {
  const currentDir = process.cwd();
  const listFromPath = commandValue.split('/');
  const [lastItem] = listFromPath.slice(-1);
  const filePath = join(currentDir, lastItem);
  await writeFile(filePath, '');
};