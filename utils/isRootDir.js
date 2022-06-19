import { parse } from 'path';

export default () => {
  const cwd = process.cwd();
  const { root } = parse(cwd);
  return { status: cwd === root, root };
};
