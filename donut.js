let donut = [
    {
        amount: 750,
        value: 'g',
        name: 'Weizenmehl'

    },
    {
        amount: 2,
        value: ' Pkt.',
        name: 'Trockenhefe'
    },
    {
        amount: 300,
        value: 'g',
        name: 'Milch'
    },
    {
        amount: 100,
        value: 'g',
        name: 'Zucker'
    },
    {
        amount: 120,
        value: 'g',
        name: 'Butter'
    },
    {
        amount: 2,
        value: '',
        name: 'Ei(er)'
    },
    {
        amount: 2,
        value: ' Prise(n)',
        name: 'Salz'
    },
]

function renderDonut() {
    let donutMenu = document.getElementById('donutContent');
    donutMenu.innerHTML += '';
    donutMenu.innerHTML += `
    <div class="main">
    <h1>Donut Rezept</h1>
    <div class="donutImg"><img src="/img/donut.jpg"></div>
    <div class="svg-container">
    <div class="icons"><img src="/img/icons/clock-regular.svg"><span>15 min.</span></div>
    <div class="icons"><img src="/img/icons/brain-solid.svg"><span>Simple</span></div>
    <div class="icons"><img src="/img/icons/calendar-alt-regular.svg"><span>14.06.2016</span></div>
    </div>
    <div>
    <form class="form" type="submit">
    <label>Zutaten für</label>
    <input class="input" type="number" min="1" max="6" value="1">
    <button class="btn-form">Portionen</button>
    </form>
    </div>
    </div>`
    renderTable();
    cookingTime();
}

function renderTable() {
    let donutMenu = document.getElementById('tbl');
    donutMenu.innerHTML += '';
    for (i = 0; i < donut.length; i++) {
        const donuts = donut[i];
        donutMenu.innerHTML += `
            <tr>
                <td>${donuts['amount']}${donuts['value']} ${donuts['name']}</td>
            </tr>
            `
    }
}

function cookingTime() {
    document.getElementById('cookingTime').innerHTML = `
    <div class="cooking">
    <h2>Zubereitung</h2>
    <div class="svg-container">
     <div class="icons"><img src="/img/icons/clock-regular.svg"><span>Arbeitszeit 25 min.</span></div>
      <div class="icons"><img src="/img/icons/clock-regular.svg"><span>Backzeit 20 min.</span></div>
       <div class="icons"><img src="/img/icons/clock-regular.svg"><span>Gesamtzeit ca. 2 Std.</span></div>
       </div>
       <p>
       In einem Topf die Milch erwärmen und die Butter darin schmelzen. Mehl
        und Trockenhefe in einer Schüssel vermengen und die übrigen Zutaten
        sowie die warme Milch-Butter-Mischung hinzugeben. Alles mit den
        Knethaken eines Mixers oder der Küchenmaschine ca. 5 Min. zu einem
        glatten Teig kneten. Anschließend an einem warmen Ort für mind. 30 Min.
        gehen lassen. Den Teig auf einer bemehlten Arbeitsplatte mit den Händen
        durchkneten und gut 1 cm dick ausrollen. Mit einem Donut-Ausstecher (8 -
        9 cm) Teigstücke ausstechen. Diese erneut ca. 30 Min. gehen lassen. Um
        die Donuts ausbacken zu können, muss Pflanzenöl in einem Topf auf etwa
        180 °C erhitzt werden. Ob die Temperatur erreicht ist, sieht man, wenn
        man einen Holzstiel in das Öl hält und sich Bläschen daran bilden. Die
        Donuts werden in dem heißen Öl von beiden Seiten je 2 Min. ausgebacken.
        Mit einer Schaumkelle herausnehmen und auf Küchenkrepp abtropfen lassen.
        Die fertigen Donuts entweder in gesiebtem Puderzucker wälzen oder in
        eine Glasur aus Milch und Puderzucker dippen und mit Zuckerperlen
        bestreuen. Tipp: Die Donuts können auch mit Butter bestrichen im
        Backofen bei 200 °C Ober-/Unterhitze 15 Min. gebacken werden. Wer keine
        Donut-Ausstecher zur Hand hat, nimmt einfach zwei unterschiedlich große
        Gläser oder Plätzchen-Ausstecher.
       </p>
    </div>
    `
}