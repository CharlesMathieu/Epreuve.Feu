/*Créez un programme qui affiche un rectangle dans le terminal.


Exemples d’utilisation :
$> python exo.py 5 3
o---o
|   |
o---o

$> python exo.py 5 1
o---o

$> python exo.py 1 1
o


Gérer les problèmes potentiels d’arguments.
 */

const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[3]);
if (x == 0 || y == 0) {
  console.log("error");
  process.exit();
}
if (x == 1) {
  console.log("error");
  process.exit();
}
if (x == 1 && !y) {
  console.log("o");
  process.exit();
}
if (y == 1) {
  console.log(`o${"-".repeat(x - 2)}o`);
  process.exit();
}
const ligne = `o${"-".repeat(x - 2)}o`;

console.log(ligne);

for (let i = 0; i < y - 2; i++) {
  console.log(`|${" ".repeat(x - 2)}|`);
}
console.log(ligne);
