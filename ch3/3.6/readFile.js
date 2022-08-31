const fs = require('fs');

// 읽을 파일의 경로를 지정 (명령어를 실행하는 콘솔 기준의 경로)
fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        throw err;
    }
    // 버퍼(Buffer) 형식
    console.log(data);
    // 버퍼(Buffer) -> 문자열
    console.log(data.toString());
})