let donut = [
    {
        amount: 375,
        value: 'g',
        name: 'Weizenmehl'

    },
    {
        amount: 1,
        value: ' Pkt.',
        name: 'Trockenhefe'
    },
    {
        amount: 150,
        value: 'g',
        name: 'Milch'
    },
    {
        amount: 50,
        value: 'g',
        name: 'Zucker'
    },
    {
        amount: 60,
        value: 'g',
        name: 'Butter'
    },
    {
        amount: 1,
        value: '',
        name: 'Ei(er)'
    },
    {
        amount: 1,
        value: ' Prise(n)',
        name: 'Salz'
    },
]

async function includeHTML() {
    let includeElements = document.querySelectorAll('[w3-include-html]');
    for (let i = 0; i < includeElements.length; i++) {
        const element = includeElements[i];
        file = element.getAttribute("w3-include-html"); // "includes/header.html"
        let resp = await fetch(file);
        if (resp.ok) {
            element.innerHTML = await resp.text();
        } else {
            element.innerHTML = 'Page not found';
        }
    }
    renderDonut();
}


function renderDonut() {
    let donutMenu = document.getElementById('tbl');
    donutMenu.innerHTML += '';
    for (i = 0; i < donut.length; i++) {
        const donuts = donut[i];
        donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount']}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
    }
}

function renderIncrement() {
    let input = document.getElementById('inputfield').value;
    if (input == 1) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount']}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }
    } else if (input == 2) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount'] * 2}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }
    } else if (input == 3) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount'] * 3}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }

    } else if (input == 4) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount'] * 4}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }

    } else if (input == 5) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount'] * 5}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }

    } else if (input == 6) {
        let donutMenu = document.getElementById('tbl');
        donutMenu.innerHTML = '';
        for (i = 0; i < donut.length; i++) {
            const donuts = donut[i];
            donutMenu.innerHTML += `
            <tr>
                <td class="amount">${donuts['amount'] * 6}${donuts['value']}</td>
                <td class="amount">${donuts['name']}</td>
            </tr>
            `
        }
    }

}


