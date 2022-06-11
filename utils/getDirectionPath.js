import { join } from 'path';
import isIncludesFileName from './isIncludesFileName.js';

export default ([filePath, pathTo]) => {
  const isIncludes = isIncludesFileName([filePath, pathTo]);
  return isIncludes.status ? pathTo : join(pathTo, isIncludes.fileName);
};
