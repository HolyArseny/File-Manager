import rm from './rm.js';
import cp from './cp.js';

export default async ([filePath, newPath]) => {
  await cp([filePath, newPath]);
  rm([filePath]);
};