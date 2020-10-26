export let inputEmailValidated = false;
export let inputPasswordValidated = false;

export default function validateField(field) {
  // lógica para verificar se existem erros
  function verifyErrors() {
    let foundError = false;

    for (let error in field.validity) {
      // se não for customError
      // então verifica se tem erro
      if (field.validity[error] && !field.validity.valid) {
        foundError = error;
      }
    }

    console.log("Erro encontrado: ", foundError);
    return foundError;
  }

  function customMessage(typeError) {
    const messages = {
      text: {
        valueMissing:
          "O campo " + field.placeholder.toLowerCase() + " é obrigatório",
        patternMismatch: field.placeholder + " inválido",
      },
      email: {
        valueMissing: "O campo email é obrigatório",
        patternMismatch:
          "Por favor, preencha com um email válido, do tipo: example@example.com",
      },
      password: {
        valueMissing: "O campo senha é obrigatória",
        patternMismatch:
          "A senha tem que ter no mínimo 8 caracteres, pelo menos um número, uma letra maiúscula, uma letra minúscula e um caractere especial",
      },
    };

    return messages[field.type][typeError];
  }

  function setCustomMessage(message) {
    const spanError = document.querySelector("span.errors");

    if (message) {
      spanError.innerHTML = message;
    } else {
      spanError.innerHTML = "";
    }
  }

  return function () {
    const error = verifyErrors();
    //const buttonEnter = document.querySelector("#buttonSubmit");

    if (error) {
      if (field.type === "email") inputEmailValidated = false;
      else if (field.type === "password") inputPasswordValidated = false;

      const message = customMessage(error);

      field.style.borderColor = "#FF6D53";
      // field.style.backgroundColor = "#FFE9E6";
      setCustomMessage(message);
    } else {
      if (field.type === "email") inputEmailValidated = true;
      else if (field.type === "password") inputPasswordValidated = true;

      field.style.borderColor = "#48DD89";
      // field.style.backgroundColor = "#E1FAEA";
      setCustomMessage();
    }
  };
}

export function enableOrDisableButtonSubmit(idButton) {
  const buttonSubmit = document.querySelector("#" + idButton);

  if (
    inputEmailValidated &&
    inputPasswordValidated &&
    buttonSubmit.enabled === undefined
  ) {
    buttonSubmit.removeAttribute("disabled");
    buttonSubmit.setAttribute("enabled", "");
  } else if (
    !inputEmailValidated ||
    (!inputPasswordValidated && !buttonSubmit.disabled)
  ) {
    buttonSubmit.removeAttribute("enabled");
    buttonSubmit.setAttribute("disabled", "");
  }
}

/*document.querySelector("form").addEventListener("submit", (event) => {
  console.log("enviar o formulário");
  event.preventDefault();
});*/
