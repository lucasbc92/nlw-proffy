import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import api from '../../services/api';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import styles from './styles';

const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('/connections').then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, [totalConnections]);

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Welcome, {`\n`}
        <Text style={styles.titleBold}>
          What do you want to do?
        </Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Study</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Give Classes</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total of {totalConnections} connections realized {' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;