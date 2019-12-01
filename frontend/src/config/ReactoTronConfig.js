import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '172.20.10.8' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
