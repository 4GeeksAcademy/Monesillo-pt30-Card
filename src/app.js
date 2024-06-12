/* eslint-disable */
import "bootstrap";
import "./style.css";


window.onload = function() {
  window.onload = () => {
    document.querySelector(".card").classList.add(genRandSuit());
    document.querySelector(".card").innerHTML = genRandNumb();
  };
  
  let genRandNumb = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[indexNumbers];
  };
  
  let genRandSuit = () => {
    let suit = ["diamond", "spade", "heart", "club"];
    let indexSuit = Math.floor(Math.random() * suit.length);
    return suit[indexSuit];
  }
}