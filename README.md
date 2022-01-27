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

```js
setToDos((currentArray) => [toDo, ...currentArray]); // ...은 배열을 뿌려준다
```

ex) new value 와 crrentArray를 합쳐주고 싶다. but [new value, currentArray] => reseult is [value, [currentArray]] 배열안에 배열이 속해 있는 꼴이 된다.
So [value, ...currentArray] -> result is [value, currentv1, currentv2] 기존 배열에 새로운 value를 합쳐 new array가 생기게 된다.

< code challenge >

1. Create an Input -> Enter how much money you hove.
2. After enter the money, Show only the Coins you can buy
3. If the Input is empty, Show all coins
4. If you select a coin, show me the number of coins you can purchase at the bottom.

5. Create an Input -> Enter how much money you hove.

```js
  {loading? <stroung>Loading...</stroung> :
    <div>
      <h2>How much money do you have?</h2>
      <input
        type="number"
        value={money}
        placeholder="Money"
        onChange={onChange}
      ></input>
      {
        money === null ? null : <div>You have {money} USD</div>
      }
```

If 'loading' is True, show 'Loading...'
However, if 'loading' is False, the input is shown because loading is completed. (API response Done)
'loading'이 ture이면, 'Loading...'을 보여주고,
false면, 로딩이 끝나서(API응답완료) 입력창과 선택창을 보여주면 된다.

2. After enter the money, Show only the Coins you can buy
3. If the Input is empty, Show all coins

```js
<select onChange={onSelect} value={choose}>
  {coins.map((coin, index) => (
    <option key={index} value={coin.quotes.USD.price}>
      {coin.name} ({coin.symbol}) : {coin.quotes.USD.price.toFixed(3)}USD
      {money !== 0
        ? ` / you buy : ${Math.floor(money / coin.quotes.USD.price)}`
        : null}
    </option>
  ))}
</select>
```

4. If you select a coin, show me the number of coins you can purchase at the bottom.

```js
{
  choose === "" ? null : (
    <h3>You can purchase this coin: {Math.floor(money / choose)} </h3>
  );
}
```
