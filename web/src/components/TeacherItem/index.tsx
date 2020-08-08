/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string,
  bio: string,
  cost: number,
  name: string,
  subject: string,
  whatsapp: string
}

interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem:React.FC<TeacherItemProps> = ({
  teacher,
}) => {
  const createNewConnection = async () => {
    await api.post('/connections', {
      user_id: teacher.id,
    });
  };

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Price/hour
          <strong>R$ {teacher.cost.toFixed(2)}</strong>
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}?text=Hello, ${teacher.name}. I came for your ${teacher.subject} class.`}>
          <img src={whatsappIcon} alt="WhatsApp" />
          Contact
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
