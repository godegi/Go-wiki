# Go-wiki
고데기 회원들의 tmi를 저장하는 웹페이지 입니다.<br>
7명의 tmi에는 개인정보가 포함되지 않습니다.<br><br>


## 기본 환경설정<br>
```
npm install // Node.js package install
npm start app.js // Node.js 실행
```

또는 아래와 같은 방법으로도 Node.js 를 실행할 수 있습니다.
> [pm2](https://pm2.keymetrics.io) 는 node.js 애플리케이션을 무중단으로 운영할 수 있도록 돕는 Node.js의 프로세스 매니저 입니다.<br>
```
npm install pm2@latest -g // option '-g' means installing this package globally
pm2 start ./bin/www --watch // 소스 수정 시 자동반영
```

브라우저를 실행하고 주소창에 아래의 url을 입력하세요.<br>
```
localhost:3000
```
위키의 대문 페이지가 보이는지 확인하세요.
<br><br>
### Firebase 실시간 데이터베이스 연결하기<br>

Firebase는 NoSQL 클라우드 호스팅 데이터베이스로, 데이터는 JSON으로 저장되며 연결된 모든 클라이언트에 실시간으로 동기화 됩니다.


[고데기 firebase console](https://go-wiki-38165-default-rtdb.firebaseio.com) 로 이동해 '프로젝트 설정(톱니바퀴)' > 'SDK 설정 및 구성' 을 확인합니다.
```
const firebaseConfig = {

  /*
  * Your web app's Firebase configuration
  */

};
```
<br>
프로젝트 하위에 'Config' 디렉토리를 만들고 config.js 파일을 추가합니다.<br>
(gitignore 에 Config 디렉토리가 명시되어 있습니다. 반드시 Config 디렉토리를 만들고 config.js 파일을 추가해주세요.)

```
// config.js 내용

const firebaseConfig = {
 
  /*
  * Your web app's Firebase configuration
  */
  
};

module.exports = firebaseConfig;
```
이제 firebase DB를 사용할 수 있습니다.