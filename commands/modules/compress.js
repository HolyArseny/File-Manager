import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import getDirectionPath from '../../utils/getDirectionPath.js';

export default async ([filePath, pathTo]) => {
  const directionPath = getDirectionPath([filePath, pathTo]);
  const input = createReadStream(filePath);
  const compress = createBrotliCompress();
  const output = createWriteStream(directionPath + '.br');
  try {
    await pipeline(
      input,
      compress,
      output
    );
  } catch (e) {
    throw e;
  }
};