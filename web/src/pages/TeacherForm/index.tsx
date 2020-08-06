import React from 'react';
import PageHeader from '../../components/PageHeader';

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

        <div className="input-block">
          <label htmlFor="name">Full name</label>
          <input type="text" id="name" />
        </div>

        <div className="input-block">
          <label htmlFor="avatar">Avatar</label>
          <input type="text" id="avatar" />
        </div>

        <div className="input-block">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input type="text" id="whatsapp" />
        </div>

      </fieldset>
    </main>
  </div>
);

export default TeacherForm;
