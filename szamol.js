const szamol = () => {
    let r = +document.getElementById("sugar").value;
    let m = +document.getElementById("magas").value;

    let A = 2 * r * Math.PI * (r + m);
    let V = r * r * Math.PI * m;

    document.getElementById("felszin").innerHTML  = "Felszín:  " + A.toFixed(3);
    document.getElementById("terfogat").innerHTML = "Térfogat: " + V.toFixed(3);
}

document.getElementById("gomb").onclick = szamol;
