import { rename } from 'fs/promises';

export default async ([filePath, fileName]) => {
  await rename(filePath, fileName);
};