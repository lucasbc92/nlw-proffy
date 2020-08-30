/* eslint-disable no-alert */
// eslint-disable-next-line no-unused-vars
import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';

interface ScheduleItem {
  // eslint-disable-next-line camelcase
  week_day: number;
  from: string;
  to: string;
}

const TeacherForm = () => {
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] = useState<ScheduleItem[]>([
    {
      week_day: 0,
      from: '',
      to: '',
    },
  ]);

  const history = useHistory();

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  };

  const setScheduleItemValue = (position: number, field: string, value: string) => {
    const newScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return {
          ...scheduleItem,
          [field]: value,
        };
      }
      return scheduleItem;
    });

    setScheduleItems(newScheduleItems);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems,
    }).then(() => {
      alert('Successful registration!');
      history.push('/');
    }).catch(() => {
      alert('Error in registration!');
    });
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing that you want to give classes."
        description="The first step is to fill this subscription form."
      />

      <main>
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>

            <legend>Your data</legend>

            <Input
              name="name"
              label="Full Name"
              value={name}
              onChange={(e) => { setName(e.target.value); }}
            />
            <Input
              name="avatar"
              label="Avatar"
              value={avatar}
              onChange={(e) => { setAvatar(e.target.value); }}
            />
            <Input
              name="whatsapp"
              label="WhatsApp"
              value={whatsapp}
              onChange={(e) => { setWhatsapp(e.target.value); }}
            />
            <Textarea
              name="bio"
              label="Bio"
              value={bio}
              onChange={(e) => { setBio(e.target.value); }}
            />

          </fieldset>

          <fieldset>

            <legend>About the Class</legend>

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
            <Input
              name="cost"
              label="Price/hour of your lesson"
              value={cost}
              onChange={(e) => { setCost(e.target.value); }}
            />

          </fieldset>

          <fieldset>
            <legend>
              Schedule
              <button type="button" onClick={addNewScheduleItem}>
                + New schedule
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div className="schedule-item">
                <Select
                  name="week-day"
                  label="Week Day"
                  value={scheduleItem.week_day}
                  onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                  name="from"
                  label="From"
                  type="time"
                  value={scheduleItem.from}
                  onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                />
                <Input
                  name="to"
                  label="To"
                  type="time"
                  value={scheduleItem.to}
                  onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                />
              </div>
            ))}

          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Warning" />
              Warning!
              <br />
              Fill all the data.
            </p>
            <button type="submit">
              Save
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default TeacherForm;
