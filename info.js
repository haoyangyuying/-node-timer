const os = require('os');

function printSysInfo() {
  console.log('当前用户: ', os.userInfo().username);
  console.log('当前进程: ', process.pid);
  console.log('当前路径: ', __dirname);
  console.log('当前文件: ', __filename);
}

module.exports = printSysInfo;