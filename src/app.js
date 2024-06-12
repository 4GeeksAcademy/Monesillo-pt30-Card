import "bootstrap";
import "./style.css";

window.onload = function() {
  const randomCard = () => {
    let suit = ["♠", "♥", "♣", "♦"];
    let numberCard = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "Q",
      "K"
    ];

    const randomArrayValue = array => {
      return array[Math.floor(Math.random() * array.length)];
    };

    const cardNumberElement = document.getElementById("numberInCard");
    cardNumberElement.innerHTML = randomArrayValue(numberCard);

    let randomSuit = randomArrayValue(suit);
    const color = randomSuit === "♥" || randomSuit === "♦" ? "red" : "black";
    const cardSuitElement = document.querySelectorAll(".suitInCard");
    cardSuitElement.forEach(suit => {
      suit.style.color = color;
      suit.innerHTML = randomSuit;
    });
  };
  randomCard();
};
