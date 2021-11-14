# Would Rather App
This app is help you give your option about some thematic

## To get started  right away:

Install dependencies

### `yarn install`

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\

## What You're Getting
```bash

├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── Actions # Reducer actions
    │   ├─── AuthUserActions.js
    │   ├─── SharedActions.js
    │   ├─── UserActions.js
    │   └─── QuestionActions.js
    ├── Components 
    │   ├── App
    │   ├── LeadBoard
    │   │   ├── QuestionCard.js
    │   │   ├── RatherAll.js
    │   │   ├── RatherQuestion.js
    │   │   ├── RatherResult.js
    │   │   └── UserCard.js
    │   ├── Login
    │   └── Menu
    │        └── MenuComponent.js
    ├── Middleware 
    │   ├── index.js
    │   └── Logger.js
    ├── Page 
    │   ├── App
    │   │    └── AppPage.js 
    │   ├── HomePage
    │   │    └── HomePage.js
    │   ├── Login
    │   │    └── LoginPage.js
    │   ├── NewRatherPage
    │   │    └── NewRatherPage.js
    │   ├── RatherPage
    │   │   ├─── LeaderPage.js
    │   │   ├─── RatherBoardPage.js
    │   │   └─── RatherPage.js
    ├── Reducers
    │   ├─── AuthUserReducer.js
    │   ├─── index.js
    │   ├─── QuestionReducer.js 
    │   └─── UserReducer.js
    ├── Utils.css 
    │   ├─── _DATA.js
    │   ├─── api.js 
    │   └─── style.js 
    ├── index.css # Global styles. 
    ├── logo.svg  
    ├── reportWebVitals.js # Global styles. 
    ├── setupTests.js # Global styles. 
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```


