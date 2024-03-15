async function includeHTML() {
  let includeElements = document.querySelectorAll("[w3-include-html]");
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html"); // "includes/header.html"
    let resp = await fetch(file);
    if (resp.ok) {
      element.innerHTML = await resp.text();
    } else {
      element.innerHTML = "Page not found";
    }
  }
}

let originalAmount = [`75g`, '100g', '0.5', '0.25', '100g', '50g', '2', '1 EL', '0.25 TL', '0.5 TL', '1 EL', 'Etwas'];
let ingredient = ['Reis', 'Hähnchenbrust', 'Schalotte', 'Paprika', 'Brokkoli', 'grüne Bohnen', 'Möhren', 'Olivenöl', 'Kurkuma', 'Rosmarin', 'Sojasouce', 'Salz & Pfeffer'];
let amount = [...originalAmount];
function load() {
  let list1 = document.getElementById("table");
  list1.innerHTML = '';

  for (let i = 0; i < amount.length; i++) {
    if (i % 2 === 0) {
      list1.innerHTML += `
        <tr class="trgrey">
          <td class="amount">${amount[i]}</td> <td>${ingredient[i]}</td>
        </tr>
      `;
    } else {
      list1.innerHTML += `
        <tr>
          <td class="amount">${amount[i]}</td> <td> ${ingredient[i]}</td>
        </tr>
      `;
    }
  }
}
function calculate() {
  let portion = parseFloat(document.getElementById("inputfield").value);

  if (portion < 1) {
    alert("Geben Sie mindestens 1 Portion ein!");
  } else if (portion > 10) {
    alert("Die maximale Anzahl sind 10 Portionen!");
  } else {
    for (let i = 0; i < amount.length; i++) {
      if (!isNaN(parseFloat(originalAmount[i]))) {
        let match = originalAmount[i].match(/^(\d+(?:\.\d+)?)\s*([^\d]+)?$/); // Überprüfet, ob der Betrag eine Zahl und ein optionaler Buchstabe ist
        if (match) {
          let value = parseFloat(match[1]) * portion; // Multiplizieret den Wert mit der Portionszahl
          let unit = match[2] || ''; // Verwendet den gefundenen Buchstaben oder leer, wenn keiner vorhanden ist
          if (value % 1 === 0) {
            amount[i] = value.toFixed(0); // Rundet auf die nächste Ganzzahl, wenn der Betrag eine Ganzzahl ist.
          } else {
            amount[i] = value.toFixed(2); // Rundet auf zwei Dezimalstellen, wenn der Betrag keine Ganzzahl ist.
          }
          amount[i] += unit; // Fügt den Buchstaben hinzu
        }
      }
    }
    load();
  }
}

function sendMail(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  fetch("https://formspree.io/f/mvoeqwgj", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      Accept: "application/json",
    },
  })
    .then(() => {
      window.location.href = "../site/send.html";
    })
    .catch((error) => {
      console.log(error);
    });
}
function showMenu() {
  document.getElementById("menu").classList.add("shownav");
}
function closeMenu() {
  document.getElementById("menu").classList.remove("shownav");
}

function gnocchi() {
  let portion = document.getElementById("inputfield").value;
  let gnocchi = 200;
  let tomatos = 1;
  let sievedtomatos = 0.5;
  let onions = 1;
  let garlic = 2;
  let oil = 1;

  if (portion < 1) {
    alert("Geben Sie mindestens 1 Portion ein!");
  } else if (portion > 10) {
    alert("Die maximale Anzahl sind 10 Portionen!");
  } else {
    amountgnocchi = gnocchi * portion;
    document.getElementById("1").innerHTML = `${amountgnocchi}g`;

    amounttomatos = tomatos * portion;
    document.getElementById("2").innerHTML = `${amounttomatos} große`;

    amountsievedtomatos = sievedtomatos * portion;
    document.getElementById("3").innerHTML = `${amountsievedtomatos} Dose(n)`;

    amountonions = onions * portion;
    document.getElementById("4").innerHTML = `${amountonions} große`;

    amountgarlic = garlic * portion;
    document.getElementById("5").innerHTML = `${amountgarlic}`;

    amountoil = oil * portion;
    document.getElementById("6").innerHTML = `${amountoil}EL`;
  }
}