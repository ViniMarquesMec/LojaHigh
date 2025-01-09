function toggleDiscount() {
  const discontBody = document.getElementById("aplicar-desconto-body");
  const icon = document.getElementById("troca-icone");

  // Verificar o estado atual do discontBody
  if (discontBody.style.display === "none" || !discontBody.style.display) {
    // Mostrar o corpo do desconto
    discontBody.style.display = "block";
    // Alterar ícone para "up"
    icon.classList.remove("bx-chevron-down");
    icon.classList.add("bx-chevron-up");
  } else {
    // Ocultar o corpo do desconto
    discontBody.style.display = "none";
    // Alterar ícone para "down"
    icon.classList.remove("bx-chevron-up");
    icon.classList.add("bx-chevron-down");
  }
}
function togglePix() {
  const qrCodeBody = document.getElementById("aplicar-pix");
  const iconPix = document.getElementById("troca-icone-pix");
  if (qrCodeBody.style.display === "none" || !qrCodeBody.style.display) {
    qrCodeBody.style.display = "block";

    iconPix.classList.remove("bx-chevron-down");
    iconPix.classList.add("bx-chevron-up");
  } else {
    qrCodeBody.style.display = "none";

    iconPix.classList.remove("bx-chevron-up");
    iconPix.classList.add("bx-chevron-down");
  }
}

const discontCupom = {
  DESCONTO10: 0.1, // 10% DE DESCONTO
  DESCONTO20: 0.2, // 20% DESCCONTO
  DESCONTO50: 0.5, // 50% DE DESCONTO
};

function applyDiscont() {
  const discontCode = document
    .getElementById("disconto-code")
    .value.trim()
    .toUpperCase(); // VALOR DIGITADO
  const discontMensageElement = document.getElementById("disconto-mesage"); // Elemento de desconto para mensagem de desconto
  const totalPriceElement = document.getElementById("total-price");
  // VERIFICAR SE O CUPOM DE DESCONTO E VALIDO

  if (discontCupom[discontCode]) {
    const discount = discontCupom[discontCode];
    console.log(discount);

    const originalPrice = 288;
    const discoutPrice = originalPrice * (1 - discount);

    // ATUALIZAR O PREÇO COM O DESCONTO
    totalPriceElement.innerText = `Preço Total: ${discoutPrice.toFixed(2)}`;

    // ARMAZENAR O CUPOM DE DESCONTO NO LOCALSTORE

    localStorage.setItem("discont", discontCode);

    // EXIBIR A MENSAGEM DE DESCONTO
    discontMensageElement.style.color = "green";
    discontMensageElement.innerText = `Desconte de ${discontCode} aplicado`;

    // LIMPAR O CAMPO INPUT(elemento)
    document.getElementById("disconto-code").value = "";
  } else {
    //SE O CUPOM NAO FOR VALIDO
    //LIMPAR A MENSAGEM
    discontMensageElement.style.color = "red";
    discontMensageElement.innerText = "Cupom invalido";
  }
}

function checkStoredDiscount() {
  const storedDiscount = localStorage.getItem("discount");
  const discontMensageElement = document.getElementById("discount-message");

  if (storedDiscount) {
    localStorage.removeItem("discount");
  }

  discontMensageElement.innerText = "";
}

window.onload = checkStoredDiscount;
