function isValidName(string) {
  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (
      !(
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        char === " "
      )
    ) {
      return false;
    }
  }
  return true;
}

function isValidCpf(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

function isValidCep(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= "A" &&
    state[0] <= "Z" &&
    state[1] >= "A" &&
    state[1] <= "Z"
  );
}

function validGuardaFormulario(evento) {
  evento.preventDefault();

  const nome = document.getElementById("name").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("rua").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const complemento = document.getElementById("complemento").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !complemento ||
    !bairro ||
    !cidade ||
    !estado
  ) {
    alert("Por favor preenchar todos os campos");
    return;
  }

  if (!isValidName(nome)) {
    alert("O nome deve conter apena letras e espaços");
    return;
  }
  if (!isValidCpf(cpf)) {
    alert("O cpf deve conter 11 digitos numericos");
    return;
  }
  if (!isValidPhone(telefone)) {
    alert("O Telefone deve conter 11 digitos numericos");
    return;
  }
  if (!isValidCep(cep)) {
    alert("O cep deve conter 8 digitos numericos");
    return;
  }
  if (!isValidState(estado)) {
    alert("O Estado deve ser uma sigla  de letras maiuscola");
    return;
  }
  const dadosFormulario = {
    nome,
    cpf,
    telefone,
    cep,
    rua,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
  localStorage.setItem("dadosFormulario", JSON.stringify(dadosFormulario));
  formulario.reset();
  alert("Dados Salvos com sucesso!");
}

formulario.addEventListener("submit", validGuardaFormulario);
