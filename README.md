# Go-wiki
고데기 회원들의 tmi를 저장하는 웹페이지 입니다.<br>
7명의 tmi에는 개인정보가 포함되지 않습니다.<br><br>


## 기본 환경설정
```
npm install // Node.js package install
npm start app.js // Node.js 실행
```

또는 아래와 같은 방법으로도 Node.js 를 실행할 수 있습니다.
> [pm2](https://pm2.keymetrics.io) 는 node.js 애플리케이션을 무중단으로 운영할 수 있도록 돕는 Node.js의 프로세스 매니저 입니다.
```
npm install pm2@latest -g // option '-g' means installing this package globally
pm2 start ./bin/www --watch // 소스 수정 시 자동반영
```

브라우저를 실행하고 주소창에 아래의 url을 입력하세요.
```
localhost:3000
```
위키의 대문 페이지가 보이는지 확인하세요.