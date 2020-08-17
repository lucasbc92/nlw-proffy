import React from 'react';
import { View, ImageBackground } from 'react-native';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

const GiveClasses = () => {
  return (
    <View style={styles.container}>
      <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
        
      </ImageBackground>
    </View>
  );
}

export default GiveClasses;