// node timer.js --time 5 --message "Hello Tuture"
const program = require('commander');
const ora = require('ora');
const printSysInfo = require('./info');
const timer = require('./timer');

const waitTime = Number(process.argv[3]);
const message = process.argv[5] || '默认信息';

program
  .option('-t, --time <number>', '等待时间（秒）', 3)
  .option('-m, --message <string>', '输出信息: ', 'hello world')
  .parse(process.argv);

setTimeout(() => {
  spinner.stop();
  console.log('输出语句: ', message);
}, waitTime * 1000);

process.on('exit', () => {
  console.log('下次再见');

});

printSysInfo();
console.log('当前时间: ', timer.getCurrentTime());
const spinner = ora('正在加载中，请稍后...').start();