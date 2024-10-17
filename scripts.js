/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = "bdðfghjklmnprstvxþ".split("");

/** Íslenskir sérhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    if (str.trim() === "") return "";
    const split = str.split(" ");
    let longest = split[0];
    for (let i = 1; i < split.length; i++) {
      if (split[i].length > longest.length) {
        longest = split[i];
      }
    }
    return longest;
  }
  return null;
}
console.assert(
  longest("a bc dce") === "dce",
  "longest: skilar lengsta orði í streng"
);
console.assert(
  longest("a b c") === "a",
  "longest: skilar fyrsta tilviki af lengsta orði setningar"
);
console.assert(
  longest("Halló heimur!") === "heimur!",
  "longest: skilar lengsta orði ásamt greinamerkjum"
);
console.assert(
  longest("") === "",
  "longest: skilar tómum streng ef inntak er tómur strengur"
);
console.assert(
  longest(false) === null,
  "longest: skilar null ef inntak er ekki strengur"
);

function shortest(str) {
  if (isString(str)) {
    if (str.trim() === "") return "";
    const split = str.split(" ");
    let shortest = split[0];
    for (let i = 1; i < split.length; i++) {
      if (split[i].length < shortest.length) {
        shortest = split[i];
      }
    }
    return shortest;
  }
  return null;
}
console.assert(
  shortest("a bc dce") === "a",
  "shortest: skilar stysta orði í streng"
);
console.assert(
  shortest("a b c") === "a",
  "shortest: skilar fyrsta tilviki af stysta orði setningar"
);
console.assert(
  shortest("Halló hey!") === "hey!",
  "shortest: skilar stysta orði ásamt greinamerkjum"
);
console.assert(
  shortest("") === "",
  "shortest: skilar tómum streng ef inntak er tómur strengur"
);
console.assert(
  shortest(false) === null,
  "shortest: skilar null ef inntak er ekki strengur"
);

function reverse(str) {
  if (isString(str)) {
    if (str.trim() === "") return "";
    const split = str.split("");
    const reversed = split.reverse();
    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("Halló") === "óllaH",
  "reverse: skilar öfugsnúnum streng"
);
console.assert(
  reverse("") === "",
  "reverse: skilar tómum streng ef inntak er tómur strengur"
);
console.assert(
  reverse(false) === null,
  "reverse: skilar null ef inntak er ekki strengur"
);

function palindrome(str) {
  if (isString(str)) {
    if (str === "") return false;
    str = str.toLowerCase();
    const reversedStr = reverse(str);
    if (str === reversedStr) {
      return true;
    }
  }
  return false;
}
console.assert(
  palindrome("halló") === false,
  "palindrome: ef ekki samhverft, skila false"
);
console.assert(
  palindrome("hahah") === true,
  "palindrome: ef samhverft, skila true"
);
console.assert(
  palindrome("") === false,
  "palindrome: skilar false ef strengur er tómur"
);
console.assert(
  palindrome(141) === false,
  "palindrome: skilar false ef inntak er ekki strengur"
);
console.assert(
  palindrome("Ara") === true,
  "palindrome: enginn munur á há- og lágstöfum"
);

function vowels(str) {
  if (isString(str)) {
    let counter = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (VOWELS.includes(str.charAt(i))) {
        counter++;
      }
    }
    return counter;
  }
  return 0;
}
console.assert(
  vowels("hAlló") === 2,
  "vowels: skilar fjölda sérljóða í streng"
);
console.assert(vowels("") === 0, "vowels: skilar 0 ef strengur er tómur");
console.assert(
  vowels(true) === 0,
  "vowels: skilar 0 ef inntak er ekki strengur"
);

function consonants(str) {
  if (isString(str)) {
    let counter = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
      if (CONSONANTS.includes(str.charAt(i))) {
        counter++;
      }
    }
    return counter;
  }
  return 0;
}
console.assert(
  consonants("Þeir") === 2,
  "consonants: skilar fjölda sérljóða í streng"
);
console.assert(
  consonants("") === 0,
  "consonants: skilar 0 ef strengur er tómur"
);
console.assert(
  consonants(true) === 0,
  "consonants: skilar 0 ef inntak er ekki strengur"
);

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert(
    "Velkomin í setningagreininn, sláðu inn streng í boxið að neðan eða veldu Cancel til að hætta við"
  );

  const str = prompt("Skrifa inntak:");

  if (str === null || str.trim() === "" || str === "Cancel") {
    return;
  }

  const longestWord = longest(str);
  const shortestWord = shortest(str);
  const reversedStr = reverse(str);
  const vowelCount = vowels(str);
  const consonantsCount = consonants(str);
  const isPalindrome = palindrome(str);

  const result = `
  Lengsta orðið: ${longestWord}
  Stysta orðið: ${shortestWord}
  Fjöldi sérhljóða: ${vowelCount}
  Fjöldi samhljóða: ${consonantsCount}
  Er strengur palindrome: ${isPalindrome}
  Öfugsnúinn strengur: ${reversedStr}
  `;

  alert(result);

  if (confirm("Viltu gera aftur?")) {
    start();
  }
}
