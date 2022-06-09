import { homedir } from 'os';
import { join } from 'path';

const homeDirectory = homedir();

export default ([commandValue]) => {
  const currentPath = process.cwd();
  const nextPath = join(currentPath, commandValue);
  if (!nextPath.includes(homeDirectory)) throw Error;
  process.chdir(commandValue);
};
