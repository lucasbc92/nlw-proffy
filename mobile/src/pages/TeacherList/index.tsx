import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import api from '../../services/api';

const TeacherList = () => {
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  const [isFiltersVisible, setIsFiltersVisible] = useState(true);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
          return teacher.id;
        })

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  function toggleFilters() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleSubmitFilter() {
    loadFavorites();

    setIsFiltersVisible(false);

    const {data} = await api.get('/classes', {
      params: {
        subject,
        week_day: Number(week_day),
        time,
      }
    }); 
    
    setTeachers(data);
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title='Available Proffys'
        headerRight={(
          <BorderlessButton onPress={toggleFilters}>
            <Feather
              name='filter'
              size={24}
              color='#FFF'
            />
          </BorderlessButton>
        )}
      >
        { isFiltersVisible && 
          (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Subject</Text>
            <TextInput
              style={styles.input}
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder='Which subject?'
              placeholderTextColor='#C1BCCC'
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Week Day</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeekDay(text)}
                  placeholder='Which day?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Time</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder='Which time?'
                  placeholderTextColor='#C1BCCC'
                />
              </View>            
            </View>

            <RectButton style={styles.submitButton} onPress={handleSubmitFilter}>
              <Text style={styles.submitButtonText}>Filter</Text>
            </RectButton>
          </View>
          )
        }
      
      </PageHeader>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {teachers.map((teacher: Teacher) =>
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}
          />)}
      </ScrollView>      
    </View>    
  )
}

export default TeacherList;