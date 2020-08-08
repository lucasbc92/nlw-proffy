/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

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
}) => (
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
      <a href={`https://wa.me/${teacher.whatsapp}`}>
        <img src={whatsappIcon} alt="WhatsApp" />
        Contact
      </a>
    </footer>
  </article>
);

export default TeacherItem;
