## Content

The boilerplate contains:

- [React Native](https://facebook.github.io/react-native/) (v**0.72.7**)
- [Redux](https://redux.js.org/) (v4.2.1) to help manage state
- [Redux Sagas](https://redux-saga.js.org) (v1.2.3) to separate side-effects and logic from state and UI logic
- [TypeScript](https://www.typescriptlang.org/) configured for React Native
- [Nativewind](https://www.npmjs.com/package/nativewind) (v2.0.11)
- [React Native Vector Icons](https://www.npmjs.com/package/react-native-vector-icons) (v10.0.2)

## Project Structure

```
├── android
├── app.json
├── index.js
├── ios
├── App.tsx //Root component
└── src
    ├── store
       ├── store.ts
    ├── reducers
       ├── matchReducer.ts
       ├── rootReducer.ts
    ├── Actions
       ├── matchActions.ts
    ├── Components
       ├── MatchList.ts
    ├── Screens
       ├── MatcScreen.ts
    ├── model
       ├── BetModel.ts
       ├── MatchModel.ts
       ├── OptionModel.ts
    ├── sagas
       ├── matchSaga.ts
    ├── types
       ├── matchesState.ts
    ├── utils
       ├── api.ts
    app.d.ts    
```

#### Clone & install

* Clone this repo `git clone git@github.com:elfbrtc/Birebin-Assessment-Project.git`
* `cd Birebin-Assessment-Project`
* run `npm install`

#### iOS & Android

* Run `npm start`
