import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';
import SplashScreen from 'react-native-splash-screen';
import codePush from 'react-native-code-push';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://8c2e4f1b548549b1afa0bde7e0f444fa@o1108838.ingest.sentry.io/6136799',
  tracesSampleRate: 1.0,
});

function App() {
  useEffect(() => {
    codePush.sync({
      installMode: codePush.InstallMode.IMMEDIATE,
    });
    SplashScreen.hide();
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Home />
    </>
  );
}

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(Sentry.wrap(App));
