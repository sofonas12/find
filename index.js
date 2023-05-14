function submitNumber() {
    var userInput = document.getElementById("numberInput").value;
    var result = document.getElementById("result");
    if (userInput >= 0 && userInput <= 100) {
      var randomNumber = Math.floor(Math.random() * 100);
      if (userInput == randomNumber) {
        result.innerHTML = "Gratulerer! Du gjettet riktig tall: " + randomNumber;
      } else {
        result.innerHTML = "Dessverre, du gjettet feil tall. Det riktige tallet var: " + randomNumber;
      }
    } else {
      result.innerHTML = "Vennligst skriv inn et tall mellom 0 og 100";
    }
  }
  
  function getRandomNumber() {
    var randomNumber = Math.floor(Math.random() * 100);
    window.alert("Det tilfeldige tallet er: " + randomNumber);
    location.reload();
  }
  