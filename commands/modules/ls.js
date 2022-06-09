import { readdir } from 'fs/promises';

export default async () => {
  const fileList = await readdir(process.cwd());
  const visibleItems = fileList.filter(el => !el.startsWith('.'));
  const tabs = '        ';
  const filesToString = `\n${visibleItems.join(tabs)}\n`;
  process.stdout.write(filesToString);
};
