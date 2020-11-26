## 정중앙 맞추는 속성
{position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%)}

- 정중앙 맞추는 속성들을 적용했는데 
  해당 요소에 너비, 높이가 지정이 안되어 있으면?
  ---> 부모 크기의 50% 너비, 높이를 잡는다.
  
  
## 부모가 body 상태에서는 
요소에 height : 100%가 적용되지 않음

Q. 해결하려면?
- position : absolute ; height : 100%;
- position : fixed ; height : 100%;
- hegith : 100vh;

--------------------------------------------------------------------

## 단위 관련해서 참고 
https://webclub.tistory.com/356
- 구글에서 "css 단위"로 검색해 볼것. 관련 설명 읽기.


## rem단위 vs em 단위
- 해당 폰트의 대문자 M의 너비를 기준으로 상대크기 계산함
- rem : html 기준
- em : 부모를 기준

★★  em/rem 단위 계산법  = 기준크기px / 원하는크기px

ex)   20px / 16px = 1.25rem
      20px / 14px = 1.428rem
      
      기준크기가 달라지면 rem 숫자도 바뀜.

-----------> 너비, 높이, 마진, 패딩, font-size, line-height 등에도 rem/em 단위 적용가능

## vw 단위 vs vh단위
- vw : 뷰포트의 너비 기준 - 현재 너비를 100vw로 봄
- vh : 뷰퍼트의 높이 기준 - 현재 높이를 100vh로 봄

- vmax : 뷰포트가 바뀔 때마다 vw와 vh 중 더 큰 단위 사용
- vmin : 뷰포트가 바뀔 때마다 vw와 vh 중 더 작은 단위를 사용








