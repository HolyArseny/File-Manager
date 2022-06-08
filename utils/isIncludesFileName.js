export default ([filePath, newPath]) => {
  const [fileName] = filePath.split('/');
  const isIncludesFileName = newPath.includes(fileName);
  return { status: isIncludesFileName, fileName };
};
