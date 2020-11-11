import React from 'react'

import Input from 'src/components/Input'
import Logo from 'src/components/Logo'
import validateField from 'src/components/Input/input-validate.js'

import backIcon from '../../assets/images/icons/back.svg'

import './styles.css'

function RegisterForm() {
  return (
    <div id="page-register-form" className="container">
      <main>

        <a href="/login">
          <img src={backIcon} alt="voltar"></img>
        </a>
        
        <form action="">
         
          <fieldset>
            <legend>Cadastro</legend>

            <p>
              Preencha os dados abaixo <br /> para começar
            </p>

            <Input
              name="name"
              type="text"
              placeholder="Nome"
              pattern="[a-zA-ZáéíóúÁÉÍÓÚãÃ\s]+$"
              required
              onBlur={e => {
                const field = e.target
                const validation = validateField(field)
                validation()

                // enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />

            <Input
              name="last_name"
              type="text"
              placeholder="Sobrenome"
              pattern="[a-zA-ZáéíóúÁÉÍÓÚãÃ\s]+$"
              required
              onBlur={e => {
                const field = e.target
                const validation = validateField(field)
                validation()

                // enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />

            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onBlur={e => {
                const field = e.target
                const validation = validateField(field)
                validation()

                // enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />

            <Input
              name="password"
              type="password"
              placeholder="Senha"
              pattern="(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
              required
              onBlur={e => {
                const field = e.target
                const validation = validateField(field)
                validation()

                // enableOrDisableButtonSubmit("buttonSubmit");
              }}
            />
          </fieldset>

          <footer>
            <span className="errors"></span>
            <button id="buttonSubmit" type="submit">
              Concluir cadastro
            </button>
          </footer>
        </form>
      </main>

      <Logo></Logo>
    </div>
  )
}

export default RegisterForm
