// Récupération des différents éléments
const text = document.querySelector("#text");
const userInput = document.querySelector(".user__input");
const isPalindrome = document.querySelector("#is__palindrome");
const checkBtn = document.querySelector(".check__btn");

// Déclaration de la fonction checkPalindrome qui va vérifier si le mot ou la phrase est un palindrome
const checkPalindrome = () => {
  /**
   * Explication de la regex (expression régulère):
   * / ... /g It's a global regex. So it'll operate on multiple matches in the string.
   * [ ... ] This creates a character set. Basically it'll match any single character within the listed set of characters.
   * W_ This matches the inverse of "word characters" and underscores. Any non-word character.
   */
  const regularExpression = /[\W_]/g;
  /**
   * replace find all occurences of a regex, and replace it with another string.
   * So my expression replace any non word character, or _ or to an empty string
   */
  let lowerRegValue = text.value.toLowerCase().replace(regularExpression, "");
  let reverseValue = lowerRegValue.split("").reverse().join("");

  // Condition if...else
  if (reverseValue === lowerRegValue) {
    console.log("est un palindrome");
    if (text.value != "") {
      isPalindrome.classList.remove("false");
      isPalindrome.classList.add("true");
      isPalindrome.textContent = "est un palindrome";
      userInput.textContent = text.value;
    } else {
      isPalindrome.textContent = "Entrez un mot ou une phrase";
      userInput.textContent = "";
      isPalindrome.classList.remove("true", "false");
    }
  } else {
    console.log("n'est pas un palindrome");
    isPalindrome.classList.remove("true");
    isPalindrome.classList.add("false");
    isPalindrome.textContent = "n'est pas un palindrome";
    userInput.textContent = text.value;
  }
};

// Ecoute de l'événement "click" et appel de la fonction checkPalindrome
checkBtn.addEventListener("click", checkPalindrome);
