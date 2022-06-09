import { homedir } from 'os';

const homeDirectory = homedir();

export default () => {
  const currentPath = process.cwd();
  if (currentPath === homeDirectory) return;
  process.chdir('../');
};