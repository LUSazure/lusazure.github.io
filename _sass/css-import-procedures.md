아오 이거 왜케 복잡해. 사용자가 맘대로 파일 순서 바꿀 수 있으면 안 되나? abc 순서대로 나열하지 말고.
<br><br>

## 1. `assets/style.scss`
1. `minima/skins/대충사용자지정스킨.scss`
2. `minima/initialize.scss`
<br><br>

## 2. `_sass/minima/skins/대충사용자지정스킨.scss`
라이트/다크 모드 색깔 둘 다 `auto.scss` 속에 있음.
`classic.scss`(라이트), `dark.scss`(다크)는 그냥 틱만 해주고 `minima/skins/auto.scss` 불러오는 거임.
<br><br>

## 3. `minima/initialize.scss`
1. 폰트, content-area-width 등 사용자가 바꿀 만한 속성.
2. @mixin은 또 뭐야???
3. `minima/custom-variables.scss`
4. `minima/_base.scss`
5. `minima/_layout.scss`
6. `minima/custom-styles`
<br><br>

## 4. `minima/custom-variables.scss`
init에 있는 변수 덮어쓰기 / 변수 추가 용도.
1. Custom variables
2. Initialized vars overriding
3. Skin vars overriding

## 5. `minima/_base.scss`
`대충사용자지정스킨.scss`, `initialize.scss`, `custom-variables.scss`의 변수를 이용함.

## 6. `minima/_layout.scss`
`대충사용자지정스킨.scss`, `initialize.scss`, `custom-variables.scss`의 변수를 이용함.

## 7. `minima/custom-styles`
`_base.scss`와 `_layout.scss` 덮어쓰기 / 스타일 추가 용도.
1. Custom styles
2. Layout overriding
3. Base overriding
<br><br>

아!!! `auto.scss`를 통째로 덮어씌우지 않고,<br>
그냥 `custom-variables.scss`에서 내 변수 만든 다음에,<br>
`custom-styles.scss`에서 `_base.scss`와 `_layout.scss`을 덮어씌워주면 된다!!!

수정: 아니, 그럼 라이트/다크 모드 변화가 잘 안 되잖아... 모드에 따른 색깔 놀이 할 때는 `auto.scss` 파일 덮어씌우는 게 가장 나을 듯.

근데 확실히 폰트를 맨 마지막에 덮어씌우니까, 처음 로딩할 때 변화하는 것처럼 보이긴 하겠다...