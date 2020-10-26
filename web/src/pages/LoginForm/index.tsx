import React from "react";

import Input from "src/components/Input";
import Checkbox from "src/components/Checkbox";
import Logo from "src/components/Logo";
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import validateField, {
  enableOrDisableButtonSubmit,
} from "src/components/Input/input-validate.js";

import "./styles.css";

function LoginForm() {
  return (
    <div id="page-login-form" className="container">
      <Logo></Logo>

      <main>
        <form action="">
          <fieldset>
            <legend>Fazer login</legend>

            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onBlur={(e) => {
                let field = e.target;
                const validation = validateField(field);
                validation();

                enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
              onChange={(e) => {
                let field = e.target;
                const validation = validateField(field);
                validation();

                enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />
          </fieldset>

          <footer>
            <div className="footer-top">
              <Checkbox label="Lembrar-me"></Checkbox>
              <a href="#">Esqueci minha senha</a>
            </div>

            <button id="buttonSubmit" type="submit" disabled>
              Entrar
            </button>

            <span className="errors">
              Preencha os campos corretamente para habilitar o botão enviar
            </span>

            <div className="footer-bottom">
              <p>
                Não tem conta? <br />
                <a href="#">Cadastre-se</a>
              </p>

              <div>
                <p>É de graça</p>
                <img src={purpleHeartIcon} alt="Coração Roxo" />
              </div>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default LoginForm;
