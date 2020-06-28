/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  const [markerList, setMarkerList] = React.useState([]);
  const handlePress = event => {
    setMarkerList([...markerList, {
      'x': event.nativeEvent.locationX.toFixed(),
      'y': event.nativeEvent.locationY.toFixed()
    }])
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TouchableOpacity style={{ activeOpacity: 1, width: '100%', height: '100%' }} onPress={(evt) => handlePress(evt)}>
          {Boolean(markerList.length) &&
            markerList.map((coordinates) => 
              <Image source={require('./marker.png')} style={{ width: 20, height: 25, marginTop: parseInt(coordinates.y), marginLeft: parseInt(coordinates.x), position: "absolute", top: 0, left: 0 }} />
            )
          }
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
