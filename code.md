## **CSS 작성 방식**

- Panda Css를 사용하여 CSS-IN-JS 방식을 활용합니다.

## 컴포넌트 제작 규칙

- 컴포넌트는 함수 선언문 형태로 제작합니다.
- 컴포넌트의 이름은 카멜 케이스 표기법을 이용하여 작성합니다.
- 컴포넌트의 첫 이름은 대문자로 시작합니다.

## 생성자 제작 규칙

- 생성자 함수 및 class를 제작할때는 대문자 카멜 케이스 방식을 사용합니다.

```jsx
class ConstructorName {
  ...
}

or

function ConstructorName (){
	...
}
```

- `prototype`을 직접 조작하는 것을 피하고 항상 `class`를 이용한다.

```jsx
// bad
function Queue(contents = []) {
	this._queue = [...contents];
}
Queue.prototype.pop = function () {
	const value = this._queue[0];
	this._queue.splice(0, 1);
	return value;
};

// good
class Queue {
	constructor(contents = []) {
		this._queue = [...contents];
	}
	pop() {
		const value = this._queue[0];
		this._queue.splice(0, 1);
		return value;
	}
}
```

## 변수, 함수 제작 규칙

- 변수의 선언은 가급적 const를 사용하며 var를 사용하지 않는다.
- 참조를 재할당 해야한다면 `var` 대신 `let` 을 사용한다.
- 변수명은 카멜케이스 표기법으로 표시한다( 생성자 처럼 첫 글자 대문자 X ).
- 우선적으로 const를 그룹화하고 let을 그룹화한다

```jsx
// bad
let i,
	len,
	dragonball,
	items = getItems(),
	goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

- `let`과 `const`을 사용할 때는 블럭 스코프 이기 때문에, 변수가 사용될 적당한 위치에 변수를 선언한다. 단, `let`과 `const`를 사용할 수 없다면, `var`로 상단에 변수를 선언한다.

```jsx
// bad
function foo() {
	var i = 0;
	if (i > 0) {
		var j = 0;
	}
}

// good
function foo() {
	var i = 0;
	var j = 0;
	if (i > 0) {
		j = 0;
	}
}
```

## 객체 생성 규칙

- 객체는 리터럴 구문을 사용하여 제작한다.

```jsx
// bad
const item = new Object();

// good
const item = {};
```

## 화살표 함수 사용 규칙

- 화살표 함수의 인자값이 하나만 있더라도 ()는 생략하지 않는다.
- 실행되는 코드가 한줄이라 하더라고 반드시 {}를 생성하여 코드블럭 형태로 만든다.

```jsx
// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map((x) => x * x);
```

- arrow function 문법(`=>`)과 비교 연산자 (`<=`, `>=`)를 함께 사용할 경우, 소괄호(`()`)를 이용하여 혼란스럽지 않도록 표현한다.

```jsx
// bad
const itemHeight = (item) =>
	item.height > 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) =>
	item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item) =>
	item.height > 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item) => {
	const { height, largeSize, smallSize } = item;
	return height > 256 ? largeSize : smallSize;
};
```

## 모듈 사용 규칙

- 비표준 모듈시스템이 아닌 (`import`/`export`) 를 항상 사용한다.

```jsx
// bad
const AirbnbStyleGuide = require("./AirbnbStyleGuide");
module.exports = AirbnbStyleGuide.es6;

// ok
import AirbnbStyleGuide from "./AirbnbStyleGuide";
export default AirbnbStyleGuide.es6;

// best
import {es6} from "./AirbnbStyleGuide";
export default es6;

```

- wildcard import 는 이용하지 않는다.

```jsx
// bad
import * as AirbnbStyleGuide from "./AirbnbStyleGuide";

// good
import AirbnbStyleGuide from "./AirbnbStyleGuide";
```

- import는 중복되지 않게 한 곳에서 import 한다.

```jsx
// bad
import foo from "foo";
// … some other imports … //
import { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";

// good
import foo, { named1, named2 } from "foo";
```

- export가 하나일 경우, default export를 사용한다.

```jsx
// bad
export function foo() {}

// good
export default function foo() {}
```

## 프로퍼티 규칙

- 프로퍼티에 억세스하는 경우는 점 `.` 을 사용한다.

```jsx
const luke = {
	jedi: true,
	age: 28,
};

// bad
const isJedi = luke["jedi"];

// good
const isJedi = luke.jedi;
```

## 동등과 일치연산자 규칙

- `==` 이나 `!=` 보다 `===` 와 `!==` 을 사용한다.
- Boolen에 대해서는 단축형을 사용한다.

```jsx
// bad
if (name !== "") {
	// ...stuff...
}

// good
if (name) {
	// ...stuff...
}

// bad
if (collection.length > 0) {
	// ...stuff...
}

// good
if (collection.length) {
	// ...stuff...
}
```

## switch와 삼항 연산자 규칙

- `case`, `default` 구문에서 `let`, `const`, `function`, `class`가 사용 되는 경우에는 중괄호(`{}`)를 사용한다.

```jsx
// bad
switch (foo) {
	case 1:
		let x = 1;
		break;
	case 2:
		const y = 2;
		break;
	case 3:
		function f() {
			// ...
		}
		break;
	default:
		class C {}
}

// good
switch (foo) {
	case 1: {
		let x = 1;
		break;
	}
	case 2: {
		const y = 2;
		break;
	}
	case 3: {
		function f() {
			// ...
		}
		break;
	}
	case 4:
		bar();
		break;
	default: {
		class C {}
	}
}
```

- 중첩 3항 연산자는 사용하지 않는다.

```jsx
// bad
const foo = maybe1 > maybe2 ? "bar" : value1 > value2 ? "baz" : null;

// better
const maybeNull = value1 > value2 ? "baz" : null;

const foo = maybe1 > maybe2 ? "bar" : maybeNull;

// best
const maybeNull = value1 > value2 ? "baz" : null;

const foo = maybe1 > maybe2 ? "bar" : maybeNull;
```

- 불필요한 3항 연산자는 사용하지 않는다.

```jsx
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

## 주석 규칙

- 복수행의 코멘트는 `/** ... */` 을 사용한다. 그 안에는 설명과 모든 파라미터, 반환값에 대해 형이나 값을 기술한다.

```jsx
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {
	// ...stuff...

	return element;
}

// good
/**
 * make() returns a new element
 * based on the passed in tag name
 *
 * @param {인자 이름} 해당 인자에 들어가는 값에 대한 설명
 * @return {리턴 값 이름} 리턴 값에 대한 설
 */
function make(tag) {
	// ...stuff...

	return element;
}
```

- 단일행 코멘트에는 `//` 을 사용한다. 코멘트를 추가하고 싶은 코드의 상부에 배치한다. 또한, 코멘트의 앞에 공백을 넣는다.

```jsx
// bad
function getType() {
	console.log("fetching type...");
	// set the default type to "no type"
	const type = this._type || "no type";

	return type;
}

// good
function getType() {
	console.log("fetching type...");

	// set the default type to "no type"
	const type = this._type || "no type";

	return type;
}

// also good
function getType() {
	// set the default type to "no type"
	const type = this._type || "no type";

	return type;
}
```

## 공백 규칙

- 공백은 탭을 사용한다.

```jsx
// bad
function() {
∙∙∙∙var name;
}

// bad
function() {
∙var name;
}

// good
function() {
  var name;
}
```

- 주요 중괄호 ({}) 앞에는 공백을 1개 넣는다.

```jsx
// good
// text() 탭 {}
function test() {
	console.log("test");
}

// bad
dog.set("attr", {
	age: "1 year",
	breed: "Bernese Mountain Dog",
});
```

- 제어구문 (`if` 문이나 `while` 문 등) 의 소괄호(`()`) 앞에는 공백을 1개 넣는다. 함수선언이나 함수호출시 인수리스트의 앞에는 공백을 넣지 않는다.

```jsx
// bad
if (isJedi) {
	fight();
}

// good
if (isJedi) {
	fight();
}

// bad
function fight() {
	console.log("Swooosh!");
}

// good
function fight() {
	console.log("Swooosh!");
}
```

- 연산자 사이에는 공백을 넣는다.

```jsx
// bad
const x = y + 5;

// good
const x = y + 5;
```

- 파일 끝에는 개행문자를 1개 넣는다.

```jsx
// bad
(function(global) {
  // ...stuff...
})(this);

// bad
(function(global) {
  // ...stuff...
})(this);↵
↵

// good
(function(global) {
  // ...stuff...
})(this);↵
```

- 문의 앞과 블록의 뒤에는 빈행을 남겨둔다.

```jsx
// bad
if (foo) {
	return bar;
}
return baz;

// good
if (foo) {
	return bar;
}

// bad
const obj = {
	foo() {},
	bar() {},
};
return obj;

// good
//다른코드
// 여기가 띄워짐
const obj = {
	foo() {},

	bar() {},
};
// 여기가 띄워짐
return obj;
```

## 콤마 사용 규칙

- 콤마는 뒤에 표기한다.

```jsx
const story = [once, upon, aTime];

// good
const story = [once, upon, aTime];
```

- 항상 뒤에 콤마를 표시하여 트롤링 콤마를 사용한다.

```jsx
// bad
const hero = {
     firstName: "Florence",
-    lastName: "Nightingale"
+    lastName: "Nightingale",
+    inventorOf: ["coxcomb graph", "modern nursing"]
};

// good
const hero = {
     firstName: "Florence",
     lastName: "Nightingale",
+    inventorOf: ["coxcomb chart", "modern nursing"],
};
```

## 세미콜론

- ;은 문장의 끝에 항상 표기한다

```jsx
// bad
(function () {
	const name = "Skywalker";
	return name;
})()(
	// good
	() => {
		const name = "Skywalker";
		return name;
	},
)();

// good
(() => {
	const name = "Skywalker";
	return name;
})();
```
