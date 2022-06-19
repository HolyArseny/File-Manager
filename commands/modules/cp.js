import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { pipeline } from 'stream/promises';
import getDirectionPath from '../../utils/getDirectionPath.js';

const cp = async ([filePath, pathTo]) => {
  await access(filePath).catch(err => { throw err });
  const directionPath = getDirectionPath([filePath, pathTo]);
  const input = createReadStream(filePath);
  const output = createWriteStream(directionPath);
  try {
    await pipeline(
      input,
      output,
    );
  } catch (e) {
    throw e;
  }
};

export default cp;
