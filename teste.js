const elenco = [
  { name: "Cassio", position: "Goleiro", age: 33, number: 12 },
  { name: "Fagner", position: "Lateral", age: 32, number: 23 },
  { name: "Roger", position: "Atacante", age: 25, number: 10 },
  { name: "Gil", position: "Zagueiro", age: 34, number: 4 },
  { name: "Yuri", position: "Atacante", age: 21, number: 9 },
  { name: "Renato", position: "Meia", age: 34, number: 8 },
];

// elenco.forEach((item) => {
//   console.log(item.age);
// });

function palindromo(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str.length - [i] - 1) {
      console.log("yes");
    } else {
      console.log("no");
    }
  }
}
palindromo("ovo");

/*
for (let i = 0; i < elenco.length; i++) {
  console.log(i);
}
*/
