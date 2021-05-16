# Typescript Template for React Native Web

![ezgif com-gif-maker (12)](https://user-images.githubusercontent.com/19613367/118410958-ce345400-b6af-11eb-922d-2697ceb17b82.gif)

* Android + iOS + Web
* Storybook
* React Native Paper
* Custom Webpack
* Plop file generator
* React Navigation
* Jest
* Prettier
* Eslint

### Install global dependencies - Brew, Node, Cocoapods and Yarn

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
brew install node
sudo gem install cocoapods
npm i -g yarn
```

### Install local dependencies - node modules, pods and cleanup

```sh
yarn clean
```

### Rename app

```sh
npx react-native-rename "New App Name"
```

### Generate components and screens

```sh
yarn generate component
yarn generate screen
```

### Run - iOS, Android and Web respectively

```sh
yarn ios
yarn android
yarn web
```

### Deploy

```sh
yarn build
```
