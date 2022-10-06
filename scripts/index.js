const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const btn_generate_password = document.querySelector("#btn-generate-password");
const generate_password_1 = document.querySelector("#generated-password-1");
const generate_password_2 = document.querySelector("#generated-password-2");
const password_length = document.querySelector("#length");
const password_symbols = document.querySelector("#symbols");

btn_generate_password.addEventListener("click", () => {
  generate_password_1.textContent = "";
  generate_password_2.textContent = "";
  generate_password();
});

const generate_password = () => {
  if (password_symbols.value === "ON") {
    for (let i = 0; i < password_length.value; i++) {
      const generate_number = Math.floor(Math.random() * characters.length);
      generate_password_1.textContent += characters[generate_number];
    }
    for (let i = 0; i < password_length.value; i++) {
      const generate_number = Math.floor(Math.random() * characters.length);
      generate_password_2.textContent += characters[generate_number];
    }
  } else if (password_symbols.value === "OFF") {
    const character_without_symbols = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ];
    for (let i = 0; i < password_length.value; i++) {
        const generate_number = Math.floor(Math.random() * character_without_symbols.length);
        generate_password_1.textContent += character_without_symbols[generate_number];
      }
      for (let i = 0; i < password_length.value; i++) {
        const generate_number = Math.floor(Math.random() * character_without_symbols.length);
        generate_password_2.textContent += character_without_symbols[generate_number];
    }
  }
};
