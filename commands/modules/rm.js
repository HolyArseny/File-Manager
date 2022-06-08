import { rm } from 'fs/promises';

export default async ([filePath]) => {
  await rm(filePath);
};
