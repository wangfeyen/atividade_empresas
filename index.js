import { gerarEmpresas } from "./gerar-empresas.mjs";
const empresas = gerarEmpresas(4);
console.dir(empresas, { depth: null });
let maiorsoma=0;
let idmaiorvenda = 0;
for (let i = 0; i < empresas.length; i++) {
   let soma = 0;
  const empresa = empresas[i];
  console.log(" somatório da venda ",i);
  for (let a = 0; a < empresa.pedidos.length; a++) {
    const val = +empresa.pedidos[a].valor;
    soma=soma+val
  }
  console.log(soma)
  if(maiorsoma<soma){
   maiorsoma=soma
   idmaiorvenda = i
  }
}

console.log("A maior venda foi a venda de número ", idmaiorvenda)


import PromptSync from "prompt-sync"
const prompt = PromptSync(); 
console.log("Você deseja saber mais detalhes sobre a venda? Responda 's' para sim e 'n' para não")
const detal = prompt(" ")
console.log("resposta:",detal)
//if(detal==="s"){
//  console.log("Dados da venda:")
//  console.log(empresas[idmaiorvenda])
//}