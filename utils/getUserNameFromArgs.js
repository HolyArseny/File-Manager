export default (args) => {
  try {
    const nameArg = args.find(el => el.includes('username'));
    const [, username] = nameArg.split('=');
    return username;
  } catch (e) {
    throw Error(
      `Username is required!\nExpected args: -- --username=your__name\n`
    );
  }
};