import { copyFile } from 'fs/promises';
import { join } from 'path';
import isIncludesFileName from '../../utils/isIncludesFileName.js';

const cp = async ([filePath, pathTo]) => {
  const isIncludes = isIncludesFileName([filePath, pathTo]);
  const directionPath = isIncludes.status
    ? pathTo
    : join(pathTo, isIncludes.fileName);
  await copyFile(filePath, directionPath);
};

export default cp;
