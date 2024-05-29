---
layout: post
title: "강의를 로블록스로 알아먹는 편"
lang: 
tags: misc roblox
thumbnail: 
---

강의 노트를 보면 무슨 죄다 로블로블거리고 있다 ㅋㅋㅋㅋㅋㅋ<br>
처음 맛본 객체지향 언어가 파이썬도 아니고, 자바도 아니고···<br>
다름 아닌 [Luau](https://luau-lang.org/)였기에!!!

~~솔직히 말하면, 이 진로를 선택했던 이유마저 *'로블록스 스크립트 캐릭터가 좋아서'*가 반절은 먹고 들어간다...~~
<br><br>

<hr>

>자바 객체연산의 경우에는, `for ( type 변수명 : 배열 이름 )`, 즉 **확장된 for문**을 쓰는 게 좋다.<br>
"야, 다음에 객체가 있어? 한번 `시작 주소`랑 `크기`(size)가 있는지 봐봐."<br>
``` java
sum = 0;
int[] inum = { 10, 20, 30, 40, 50 };
for ( int x : inum ) // Right here!
    sum += x;
System.out.println(sum);
```
그니까 *로블록스*의 `for _, x in pairs(inum)`과 비슷한 듯...?

↑ 바로 한 생각: 로블록스
<br><br><br>

>자바의 [Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) 클래스는 *로블록스*로 치면 [Instance](https://create.roblox.com/docs/reference/engine/classes/Instance) 클래스임.

↑ 로블록스
<br><br><br>

>HTML의 `<head>`에 넣은 `<script>`가 `DOM`(Document Object Model)의 `객체`를 움직이는 것은,<br>
*로블록스*에서 `ServerScriptService`에 넣은 `Script`가 `Workspace`의 `Part`를 움직이는 것에 비유할 수 있다...<br>
그래서 `.onload` 이벤트 리스너가 중요함.

↑ <span lang="en">yet anotha</span> 로블록스
<br><br><br>

`scope`라는 어휘를 접한 곳도, `event listener`라는 개념을 처음 안 곳도, 죄-다 로블록스

근데 꾸미다 보니 포스트가 심하게 알록달록하고 부산스럽구먼, 어찌 고쳐야 할지... 😅