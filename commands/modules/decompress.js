import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { access } from 'fs/promises';
import { pipeline } from 'stream/promises';
import getDirectionPath from '../../utils/getDirectionPath.js';

export default async ([filePath, pathTo]) => {
  await access(filePath).catch(err => { throw err });
  const directionPath = getDirectionPath([filePath, pathTo]);
  const [pathWithoutCompressExt] = directionPath.split('.br');
  const input = await createReadStream(filePath);
  const decompress = createBrotliDecompress();
  const output = createWriteStream(pathWithoutCompressExt);
  try {
    await pipeline(
      input,
      decompress,
      output
    );
  } catch (e) {
    throw e;
  }
};
