import { createWriteStream } from 'fs';
import { join } from 'path';

export default async ([commandValue]) => {
  const currentDir = process.cwd();
  const listFromPath = commandValue.split('/');
  const [lastItem] = listFromPath.slice(-1);
  const filePath = join(currentDir, lastItem);
  const tempFile = await createWriteStream(filePath);
  await tempFile.write('');
};