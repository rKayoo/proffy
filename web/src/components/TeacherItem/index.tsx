import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
          <header>
            <img src="https://i.pinimg.com/originals/37/e3/c1/37e3c1a157bf5886ef0ef45b31fddd23.jpg" alt=""/>
            <div>
              <strong>Hermione Granger</strong>
              <span>Levitação</span>
            </div>
          </header>

          <p>
            Ensino as pessoas a levitarem a objetos
            <br/><br/>
            Mudo a vida das pessoas pelo wingardium leviosa. Mais de mil bruxos aprenderam 
            a levitar uma pena comigo. É LEVIOSA, e não leviosá.
          </p>

          <footer>
            <p>
              Preço/hora
              <strong>R$ 100,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
            </button>
          </footer>
        </article>
  );
}

export default TeacherItem; 