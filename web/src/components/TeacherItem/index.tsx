import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF-HBkvKkQU_A/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=q59UONWa6j8IE1uowpiNPM4JLNG4XEMKOpcC9u7-Sy4" alt="Lucas Bueno Cesário" />
        <div>
          <strong>Lucas Bueno Cesário</strong>
          <span>Chemistry</span>
        </div>
      </header>

      <p>
        Best chemistry teacher from Florianópolis.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Contact
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
