import { faker } from "@faker-js/faker";

export function gerarEmpresas(numeroDeEmpresas) {
  const empresas = [];

  const status = [
    "Aguardando Pagamento",
    "Pagamento Aprovado",
    "Enviado",
    "Entregue",
  ];

  for (let i = 0; i < numeroDeEmpresas; i++) {
    const empresa = {
      id: i,
      nome: faker.company.name(),
      endereco: faker.location.streetAddress(),
      telefone: faker.phone.number(),
      email: faker.internet.email(),
      produtos: [],
      pedidos: [],
    };
    for (let j = 0; j < 5; j++) {
      empresa.produtos.push({
        id: j,
        nome: faker.commerce.productName(),
        preco: faker.commerce.price(),
        descricao: faker.commerce.productDescription(),
        categoria: faker.commerce.department(),
      });
    }
    for (let k = 0; k < 10; k++) {
      empresa.pedidos.push({
        id: k,
        data: faker.date.recent(),
        valor: faker.commerce.price(),
        status: status[Math.floor(Math.random() * status.length)],
      });
    }
    empresas.push(empresa);
  }
  return empresas;
}

