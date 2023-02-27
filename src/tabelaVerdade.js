/*
V ou V = V | V e V = v | V xor V = F | !v = f
V ou f = V | v e f = f | v xor f = v | !f = v
f ou f = f | f e f = f | f xor f = f | 
*/
// o OU é representado por 2 pipes ||
// o E é representado pelos 2 &&
// podemos usar o diferente para substituir o xor
function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2; // Ou
  const comprarTv50 = trabalho1 && trabalho2; // E
  //const comprarTv32 = !!(trabalho ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2; // xor
  const manterSaudavel1 = !comprarSorvete; // negação

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}
