import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
// import beatrizThome from '../../assets/images/beatriz-thome.png';

import api from "src/services/api";

import "./styles.css";

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post("connections", {
      user_id: teacher.id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name} />
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a
          target="_blank"
          onClick={createNewConnection}
          href={`https://wa.me/${teacher.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>

    /*
    <article className="teacher-item">
      <header>
          <img src={beatrizThome} alt="Beatriz Thomé"/>
          <div>
              <strong>Beatriz Thomé</strong>
              <span>Inglês</span>
          </div>
      </header>

      <p>
          Apaixonada em ensinar seus alunos a expandir seus horizontes ensinando a eles o idioma mais falado no mundo.
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
    */
  );
};

export default TeacherItem;
