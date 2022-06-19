export default ([filePath, newPath]) => {
  const splitedFilePath = filePath.split('/');
  const [fileName] = splitedFilePath.slice(-1);
  const isIncludesFileName = newPath.includes(fileName);
  return { status: isIncludesFileName, fileName };
};
