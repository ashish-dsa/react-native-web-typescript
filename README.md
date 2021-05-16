# Typescript Template for React Native Web

![ezgif com-gif-maker (10)](https://user-images.githubusercontent.com/19613367/118410660-2ec29180-b6ae-11eb-950c-67995b271db4.gif)

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
