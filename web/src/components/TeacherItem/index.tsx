import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import beatrizThome from '../../assets/images/beatriz-thome.png';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
          <img src={beatrizThome} alt="Beatriz Thomé"/>
          <div>
              <strong>Beatriz Thomé</strong>
              <span>Inglês</span>
          </div>
      </header>

      <p>
          Apaixonada em ensinar seus alunos a expandir seus horizontes ensinado a eles o idioma mais falado no mundo.
          <br/><br/>
          Graduada em letras pela escola de magia de Hogwarts, localizada na Inglaterra e doutora em desencanto de quem acha que não consegue falar em inglês, pelo Instituto Durmstrang, localizado no extremo norte da Europa.
      </p>

      <footer>
          <p>
              Preço/Hora
              <strong>R$ 75,00</strong>
          </p>
          <button type="button">
              <img src={whatsappIcon} alt="Whatsapp"/>
              Entrar em contato
          </button>
      </footer>
    </article>
  )
}

export default TeacherItem;