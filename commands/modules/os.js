import { EOL, cpus, homedir, userInfo, arch } from 'os';

const getCpuInfo = () => {
  const cpuData = cpus();
  const { length } = cpuData;
  const cpuInfo = cpuData.map(({ model, speed }, index) =>
    `${index + 1}. Model: ${model}. Clock rate: ${speed}.\n`
  ).join('');
  const dataToPrint = `\nTotal amount: ${length}.\n${cpuInfo}`;
  console.log(dataToPrint);
};

const getEOL = () => {
  const msg = `\ndefault system End-Of-Line: ${JSON.stringify(EOL)}`;
  console.log(msg);
};

const getHomedir = () => {
  const msg = `\nHome directory: ${homedir()}`;
  console.log(msg);
};
const getUsername = () => {
  const { username } = userInfo();
  const msg = `\nCurrent user: ${username}`;
  console.log(msg);
};

const getArch = () => {
  const msg = `\nCPU architecture: ${arch()}`;
  console.log(msg);
};

const commandMap = {
  EOL: getEOL,
  cpus: getCpuInfo,
  homedir: getHomedir,
  username: getUsername,
  architecture: getArch,
};

export default ([ arg ]) => {
  const [, clearArg ] = arg.split('--');
  commandMap[clearArg]();
};
