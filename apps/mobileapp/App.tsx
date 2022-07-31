/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from './src/components/Button/Button';
import {CYAN_BLUE, WHITE} from './src/constants/styles/colors';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    height: '100%',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <View style={styles.viewStyle}>
        <Button
          style={styles.buttonStyle}
          buttonProps={{title: 'The first component'}}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    padding: 7,
    color: WHITE,
    borderRadius: 17,
    backgroundColor: CYAN_BLUE,
  },
});

export default App;
