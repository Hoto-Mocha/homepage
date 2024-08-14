const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.listen(8080, function() {
    console.log(`Node.js 서버 실행 중 >>> http://localhost:8080`);
});

app.use(express.static(path.join(__dirname, 'webapp/build')))

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'webapp/build/index.html'));
})

app.get('/name', function(req, res) {
    res.json({name: '홍길동'});
})



// 리액트 라우터를 사용하는 경우 이것을 최하단에 작성하는 것이 좋다.
app.get('*', function(req, res) { // 모든 경로에 대해서 아래 페이지로 이동하도록 설정. 아래 페이지로 이동해서 리액트 라우터를 사용하게 된다.
    res.sendFile(path.join(__dirname, 'webapp/build/index.html'));
})