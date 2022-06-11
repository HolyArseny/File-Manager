import { sep } from 'path';
import isRootDir from '../../utils/isRootDir.js';

export default () => {
  if (isRootDir().status) return;
  process.chdir(`..${sep}`);
};