export default (process) => {
  const { argv } = process;
  const args = argv.slice(2);
  return args;
};