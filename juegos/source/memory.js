document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "boostrap",
      img: "img/bootstrap.png",
    },
    {
      name: "boostrap",
      img: "img/bootstrap.png",
    },
    {
      name: "css",
      img: "img/css3.png",
    },
    {
      name: "css",
      img: "img/css3.png",
    },
    {
      name: "github",
      img: "img/github_badge.png",
    },
    {
      name: "github",
      img: "img/github_badge.png",
    },
    {
      name: "html",
      img: "img/html5.png",
    },
    {
      name: "html",
      img: "img/html5.png",
    },
    {
      name: "js",
      img: "img/javascript_1.png",
    },
    {
      name: "js",
      img: "img/javascript_1.png",
    },
    {
      name: "code",
      img: "img/codepen.png",
    },
    {
      name: "code",
      img: "img/codepen.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardsChosen = [];
  var cardsChosenId = [];
  var cardsWon = [];

  function createBoard() {
    for (var i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "img/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      //same card
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      //match
      cards[optionOneId].setAttribute("src", cardArray[optionOneId].img);
      cards[optionTwoId].setAttribute("src", cardArray[optionTwoId].img);
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      //no match
      cards[optionOneId].setAttribute("src", "img/blank.png");
      cards[optionTwoId].setAttribute("src", "img/blank.png");
    }

    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      document.getElementById("win-text").style.display = "block";
      resultDisplay.textContent = "Felicidades";
    }
  }

  //flip the card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length == 2) {
      setTimeout(checkForMatch, 400);
    }
  }

  createBoard();
});
