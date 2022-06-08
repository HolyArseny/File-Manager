import os from 'os';

const homedir = os.homedir();

export default () => {
  const currentPath = process.cwd();
  if (currentPath === homedir) return;
  process.chdir('../');
};