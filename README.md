# Create-React-App

javascript를 사용할 땐 꼭 {}를 잊지 말자.

리액트 어플리케이션을 만드는 라이브러리

create-react-app을 사용하면,

1. 개발 서버에 접근 기능
2. 자동으로 새로고침 기능
3. 즉각적으로 어플리케이션 안에 css를 포함시켜 주는 기능

create-react-app을 사용하는 방법

1. nodejs 설치
2. 콘솔 창에서 node 설치 확인 ( node -v) => node 버전이 나오면 성공
3. install npx -> npx를 작동 시킬 수 있으면 준비 완료
4. 프로젝트 폴더를 만들어 줌 (npx create-react-app [프로젝트 이름(my-app)])
5. 만들어진 후 비쥬얼코드에서 폴더 열기
6. 'npm run start' or 'npm start'

create-react-app이 우리에게 주는 도움

1. 사용하지 않은 import가 있다면 알려준다.

`isRequired`와 연결하여 prop가 제공되지 않았을 때
경고가 보이도록 할 수 있습니다.

css Moudule -> 전역적인 css가 아닌 개별의 css를 붙힐 수 있는 모듈

## useEffect

문제점 : API나 state 변경으로 반복적인 rerender
해결 방안 -> useEffect(two argument)
useEffect는 한번만 rendering이 된다. 즉 한번만 불러오면 되는 API한테쓰면 good
Only One! what ever happen only one time render
누군가 타이핑으로 인해 계속 반복적인 렌더링이 된다면 hell

특정한 기능만 실행하는 법

### cleanUp function -> 주로 사용하지 않음(sometimes use)

component가 사라질 때(destory될 때) 무언가 해줄때 사용
