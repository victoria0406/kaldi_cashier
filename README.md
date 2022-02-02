# 칼디 캐셔: K-siren order

## 제작 목적
칼디는 카페 및 커피 동아리이자, 내가 활동한 동아리이다. 칼디에서는 축제를 하는 기간에는 동아리 음료를 판다. 그 때, 일부 동아리원들은 캐셔 역할을 하고, 주문 내역은 종이에 적는다. 나는 이게 전산화하기 충분하다는 생각을 했고, 이를 여러 팀원이 공유하면 더 편할 것이라 생각했다. 따라서 나는 오더링 시스템을 만들 것이다. 이에 대해서는 실시간 관리가 필요하기 때문에, 다른 것보다 백엔드에 대한 이해가 많이 될 것이라 판단하였다. 이번 사이드 플젝은 우선적으로 백엔드를 이해하기 위한 수단이기 때문에, UI UX는 스타벅스를 차용할 것이다. 돈 내는 것은 스스로 하라고 하자...
스타벅스처럼 어플리케이션을 활용하고 싶지만, 단기적으로 사용할 것이며, 사람들의 접근성을 높여야 한다는 취지 때문에 어플리케이션보다는 모바일 웹이 적합하다고 판단하였다.

## 기술 스택
backend: Node.js  
몰입캠프 때 다들 node.js를 사용해서 참고 자료가 많다. 웹을 시도해보지 않은 나에게는 최적의 선택!
frontend: react  
그냥.. 이제 웹하면 리액트 밖에 안 떠오르는 리액트 쓸꺼다... 실사용에 대한 계획이 없으면 그냥 앱 만들고 싶은데...

# 제작 단계
STEP1: 기본적인 프론트엔드 틀을 만든다. 구매자에게는 메뉴를 나열하고, 고르고, 예약할 수 있는 기능을 제공하고, 판매자에게는 주문 현황을 알 수 있는 정보를 제공한다.  
STEP2: 기본적인 백엔드 틀을 만든다. 구매자에게서 예약 내역이 올라오면, 이를 판매자에게 전달하고, 판매자가 메뉴를 제작할 시, 승인 버튼을 눌러 이를 구매자에게 전달하는 기능  
STEP3: 주문자의 정보 및 가격등을 엑셀화 시키는 과정. 나중에 회계 처리에서 유용하니까 쓰고 싶음(사실 미래의 회계 담당자의 고생을 덜기 위한 행동)  
STEP4: UI UX 다듬기. 구매자는 이쁘게, 판매자는 버튼이랑 글씨 큼직큼직하게 하면 됨, 이 단npx create-react-app my-app계에서 모바일 최적화를 진행하자  
