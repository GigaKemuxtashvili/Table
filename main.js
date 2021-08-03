const theadTr = document.querySelector(".table-thead-tr");
const tbody = document.querySelector(".table-body");


function generateColor() {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}

function generateTheadTrHtml(m) {
    for (var i = 1; i < m; i += 2) {
        theadTr.innerHTML += `<th style = 'background-color: ${ generateColor() } '>${i}</th>`
    }
}

function generateTbodyHtml(m,n) {
    for (var i = 1; i < m; i += 2){
        var tr = "<tr>"
        for (var j = 1; j < m; j += 2){
            var td = `<td style= "background-color:${generateColor()}">${i * j}</td>`
            tr+=td;
        }
        tr += "</tr>"
        tbody.innerHTML += tr;
    }
}


function generateTable(m, n) {
    generateTheadTrHtml(m);
    generateTbodyHtml(m,n);
}

generateTable(prompt("Enter m"), prompt("Enter n"))