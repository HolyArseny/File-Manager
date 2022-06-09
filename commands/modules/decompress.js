import { createBrotliDecompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

export default async ([filePath, pathTo]) => {
  const input = await createReadStream(filePath);
  const decompress = createBrotliDecompress();
  const output = createWriteStream(pathTo);
  try {
    input.pipe(decompress).pipe(output);
  } catch (e) {
    throw e;
  }
};
