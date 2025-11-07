
const produtos = [
  { nome: "Camisa Oficial 2025", preco: 299.99, img: "https://th.bing.com/th/id/OIP.YRQIgENCpyQ_e4i_exKeJwHaHa?w=194&h=194" },
  { nome: "Copo Personalizado", preco: 79.99, img: "https://th.bing.com/th/id/OIP.0wlTam2_i8X5z3cjoYzU1gHaHa?w=182&h=183" },
  { nome: "Tábua Personalizada", preco: 150.00, img: "https://th.bing.com/th/id/OIP.zoikrOHVwh0DtgCkefQFzgHaHa?w=166&h=180" },
  { nome: "Chaveiro da Ponte Preta", preco: 19.00, img: "https://th.bing.com/th/id/OIP.89Z9wveQcvU_jV91mB-rVQAAAA?w=178&h=180" },
  { nome: "Agasalho da Ponte Preta", preco: 250.00, img: "https://i.pinimg.com/736x/2b/6a/70/2b6a7091c7a5dfe3e3e9bb8935b8aab1.jpg" }
];

const container = document.getElementById("produtos-lista");
if (container) {
  produtos.forEach(p => {
    container.innerHTML += `
      <div class="col">
        <div class="card h-100 shadow-sm">
          <img src="${p.img}" class="card-img-top" alt="${p.nome}">
          <div class="card-body text-center">
            <h5 class="card-title">${p.nome}</h5>
            <p class="text-primary fw-bold">R$ ${p.preco.toFixed(2)}</p>
            <button class="btn btn-primary w-100" onclick="adicionarAoCarrinho('${p.nome}', ${p.preco})">Adicionar ao Carrinho</button>
          </div>
        </div>
      </div>
    `;
  });
}


let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function atualizarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  const btnCarrinho = document.getElementById("carrinhoBtn");
  if (btnCarrinho) btnCarrinho.textContent = `🛒 Carrinho (${carrinho.length})`;
}

function adicionarAoCarrinho(nome, preco) {
  carrinho.push({ nome, preco });
  atualizarCarrinho();
  alert(`${nome} foi adicionado ao carrinho!`);
}

atualizarCarrinho();
