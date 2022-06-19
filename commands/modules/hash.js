import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export default async ([ pathToFile ]) => {
  const file = await readFile(pathToFile, 'utf-8');
  const hash = await createHash('sha256').update(file).digest('hex');
  const msg = `\nFile hash: ${hash}\n`;
  console.log(msg);
};