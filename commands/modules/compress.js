import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export default async ([filePath, pathTo]) => {
  const input = await createReadStream(filePath);
  const compress = createBrotliCompress();
  const output = await createWriteStream(pathTo);
  try {
    input.pipe(compress).pipe(output);
  } catch (e) {
    throw e;
  }
};