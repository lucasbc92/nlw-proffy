import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

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

      </fieldset>
    </main>
  </div>
);

export default TeacherForm;
