const spawn = require('child_process').spawn;

// spawn : 새로운 프로세스 띄우면서 명령어 실행
// 세번째 인수로 { shell : true } 넣으면 exec 처럼 셸을 실행해서 명령어 수행!
var process = spawn('python', ['test.py']);

process.stdout.on('data', function (data) {
    console.log(data.toString());
});

process.stderr.on('data', function (data) {
    console.error(data.toString());
});