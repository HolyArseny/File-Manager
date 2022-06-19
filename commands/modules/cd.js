import { join } from 'path';
import isRootDir from '../../utils/isRootDir.js';

export default (commandValue) => {
  const { USER_INPUT_SPLIT } = process.env;
  const path = commandValue.join(USER_INPUT_SPLIT);
  const currentPath = process.cwd();
  const nextPath = join(currentPath, path);
  if (!nextPath.includes(isRootDir().root)) throw Error;

  process.chdir(path);
};
