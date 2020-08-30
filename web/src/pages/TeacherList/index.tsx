/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState, FormEvent } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css';

const TeacherList = () => {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const searchTeachers = async (e: FormEvent) => {
    e.preventDefault();

    // const response = await api.get
    // (`/classes?subject=${subject}&week_day=${weekDay}&time=${time}`);
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time,
      },
    });
    setTeachers(response.data);
  };

  return (
    <div id="page-teacher-list" className="container">

      <PageHeader title="These are the available teachers.">
        <form id="search-teachers" onSubmit={(e) => searchTeachers(e)}>

          <Select
            name="subject"
            label="Subject"
            value={subject}
            onChange={(e) => { setSubject(e.target.value); }}
            options={[
              { value: 'Art', label: 'Art' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Chemistry', label: 'Chemistry' },
              { value: 'English', label: 'English' },
              { value: 'Geography', label: 'Geography' },
              { value: 'History', label: 'History' },
              { value: 'Mathematics', label: 'Mathematics' },
              { value: 'Physical Education', label: 'Physical Education' },
              { value: 'Physics', label: 'Physics' },
              { value: 'Portuguese', label: 'Portuguese' },
              { value: 'Science', label: 'Science' },
              { value: 'Spanish', label: 'Spanish' },
            ]}
          />
          <Select
            name="week-day"
            label="Week Day"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value); }}
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Time"
            value={time}
            onChange={(e) => { setTime(e.target.value); }}
          />

          <button type="submit">
            Search
          </button>

        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem
            key={teacher.id}
            teacher={teacher}
          />
        ))}
      </main>

    </div>
  );
};

export default TeacherList;
