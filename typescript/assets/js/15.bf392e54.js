(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{414:function(t,s,a){"use strict";a.r(s);var n=a(56),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"제네릭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제네릭"}},[t._v("#")]),t._v(" 제네릭")]),t._v(" "),a("p",[t._v("Java, C#, Golang 같은 정적언어의 경우에는 함수 선언시에 타입을 선언하도록 되어 있습니다. 변수를 선언시에도 타입을 선언하지만(Golang 제외) 대체적으로 정적언어들은 타입을 엄격하게 관리하게끔 되어 있습니다. 그러나 함수를 선언시에 타입을 선언하기 어려운 구조가 있을 수 있습니다. 이럴 때 제네릭을 사용합니다.")]),t._v(" "),a("p",[t._v("제네릭은 선언을 하는 시점이 아닌 생성 시점에서 타입을 결정하며 하나의 타입이 아닌 여러개의 타입을 받을 수 있도록 설계하는 구조를 의미 합니다. 기본형은 다음과 같습니다. "),a("code",[t._v("T")]),t._v("의 경우는 관용적으로 개발자들 사이에서 사용하는 철자이며 꼭 "),a("code",[t._v("T")]),t._v("를 사용하지 않아도 됩니다. "),a("code",[t._v("T")]),t._v("는 Type Parameter의 약자입니다. 제네릭을 사용하면 다양한 타입의 인자값과 리턴값을 사용할 수 있습니다.")]),t._v(" "),a("p",[t._v("타입스크립트 제네릭 기본 형식")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 함수 선언식")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" logMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("messageString")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("string"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Log Message'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("messageNumber")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" logMessage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("number"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("string을 선언하여 선언시점에 타입을 명시하는 것입니다. 또는 number로 선언 하였을 경우 logMessage의 타입은 number로 작동이 됩니다.")]),t._v(" "),a("h2",{attrs:{id:"제네릭-사용-이유"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#제네릭-사용-이유"}},[t._v("#")]),t._v(" 제네릭 사용 이유")]),t._v(" "),a("p",[t._v("제네릭을 사용하는 이유는 하나의 함수를 이용하여 다양한 타입을 받아 재사용성을 높이기 위함 입니다. 또한 "),a("code",[t._v("any")]),t._v("와 다르게 타입을 검사하기 때문에 좀 더 타입스크립트 다운 코딩을 할 수 있습니다. "),a("code",[t._v("any")]),t._v("의 경우에는 타입을 검사하지 않습니다.")]),t._v(" "),a("h2",{attrs:{id:"화살표-함수-제네릭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#화살표-함수-제네릭"}},[t._v("#")]),t._v(" 화살표 함수 제네릭")]),t._v(" "),a("p",[t._v("화살표 함수에서 제네릭을 하나만 사용할 경우에는 <T>뒤에 extends 값을 지정해 줘야 한다. 그렇지 않으면 JSX 문법에 의해 꺽쇠가 HTML 태그로 인식하기 때문입니다. 일반적으로 extends {} 를 많이 사용하지만 그렇게 되어버리면 객체로 한정지어버리기 때문에 unknown을 사용하여 더 많은 값이 들어올 수 있다고 알려줍니다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 화살표 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logMessage "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("unknown")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" text"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 화살표 함수")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logMessageArr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("text1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("text2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("U")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("text1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" text2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);