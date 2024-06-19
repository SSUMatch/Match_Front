<h1> Match </h1>

<h3> 서비스 이름 및 소개 </h3>

```
Match는 축구를 좋아하는 사람들을 편리하게 해줍니다.
축구 경기를 뛰고 싶은 사람들끼리 Match해준다는 의미로, 축구 경기 매칭 및 결과 확인 등의 서비스를 제공합니다.
```
<br/>
<hr/>

<h3> 개발 현황 </h3>

- ~24.06.17 v1.0 배포(https://match-xi.vercel.app) MVP 기능 위주 배포
- 24.06.18~  코드 최적화 및 react query 적용중, v1.1 개발중

## **💻 사용 기술**

### Front

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white) ![VITE](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
<br>
![React-Query](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=react-query&logoColor=white)
![Axios](https://img.shields.io/badge/axios-DB5C3F?style=for-the-badge&logo=axios&logoColor=white)
![Emotion](https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=Emotion&logoColor=white)![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Storybook](https://img.shields.io/badge/storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000.svg?style=for-the-badge&logo=notion&logoColor=white)


### **Web 스택 선정 이유**

- React

SPA(Single Page Application)의 장점 중 하나인 "하나의 페이지로 새로고침이나 깜빡임 없이 페이지를 구현" 함으로써 한눈에 페이지를 효과적으로 보여줌

컴포넌트 기반 구조를 통해 코드의 재사용성을 높이고, 동일한 UI 요소들을 일관성 있게 사용할 수 있게함

라우팅 시 필요한 부분만 변경하여  사용자에게 거의 즉각적인 반응을 제공할 수 있음

- Vite

Rollup을 사용하여 프로덕션 빌드를 처리하며, 이는 빠르고 효율적인 번들링을 제공

CRA와 비교하여 더 작은 번들 크기와 더 빠른 로드 시간을 제공할 수 있음

- TypeScript

변수의 이름뿐만 아니라 데이터의 타입 체크를 통해 코드 안정성 향상 및 오탈자 방지

타입을 통해 컴포넌트를 보다 재사용성 높은 구조로 만들 수 있음


- emotion / tailwind-css

복잡한 컴포넌트, 큰 레이아웃 구조를 잡는 데 이름이 필요한 경우 : emotion

단한 컴포넌트, 가독성을 해치지 않는다면 빠른 개발을 위해 : tailwind

각 상황에 알맞은 스타일링을 시도

- recoil

atom을 통해 상태관리를 보다 직관적으로 구현

React의 컴포넌트 생명주기와 잘 어울리며, 상태의 흐름을 보다 명확하게 볼 수 있음

- Eslint

Airbnb style guide를 통해 일관성 있는 코드 제공

- react-query(v1.0에선 미구현)

자동으로 데이터를 캐싱하고, 주기적으로 갱신하여 최신 데이터를 유지

페이징처리, 지연 로딩 데이터와 같은 성능 최적화 효과를 기대할 수 있음

서버 상태 관리에도 용이


- storybook

컴포넌트의 퍼블리싱 상태, props 값들을 쉽게 시험해볼 수 있음


<br>


## 🔖 Naming Rules

- component : **CamelCase**
    - 최상위 태그 : **-Layout**
    - 차상위 태그 : **-Container** >> **-Wrapper** >> **-Box**
- constant : **UPPER SAKE CASE**
- 변수 : **CamelCase**
- Interface
    - props : **PascalCase**
    - api response : **PascalCase**

<br>

## **🗂️ Commit Convention**

- `feat` : 새로운 기능 추가(기능 단위)
- `fix` : 버그 수정
- `chore` : 패키지 추가, 라이브러리, dependencies 설정, 셋팅 관련(빌드 스크립트, 패키지 변동사항)
- `docs` : 문서 수정(및 추가)
- `style` : 스타일 수정(코드 형식, 세미콜론 추가: 로직에 변화X)
- `refactor` : 코드 리팩토링
- `init` : 프로젝트 생성 후 첫 커밋

<br>
