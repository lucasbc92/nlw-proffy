import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

const TeacherForm = () => (
  <div id="page-teacher-form" className="container">
    <PageHeader
      title="How amazing that you want to give classes."
      description="The first step is to fill this subscription form."
    />

    <main>
      <fieldset>

        <legend>Your data</legend>

        <Input name="name" label="Full Name" />
        <Input name="avatar" label="Avatar" />
        <Input name="whatsapp" label="WhatsApp" />
        <Textarea name="bio" label="Bio" />

      </fieldset>

      <fieldset>

        <legend>About the Class</legend>

        <Select
          name="subject"
          label="Subject"
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
        <Input name="cost" label="Cost of your lesson time" />

      </fieldset>

      <fieldset>
        <legend>
          Schedule
          <button type="button">
            + New schedule
          </button>
        </legend>

        <div className="schedule-item">
          <Select
            name="week-day"
            label="Week Day"
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
          <Input name="from" label="From" type="time" />
          <Input name="to" label="To" type="time" />
        </div>
      </fieldset>

      <footer>
        <p>
          <img src={warningIcon} alt="Warning" />
          Warning!
          <br />
          Fill all the data.
        </p>
        <button type="button">
          Save
        </button>
      </footer>
    </main>
  </div>
);

export default TeacherForm;
