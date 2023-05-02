function verdoppeln(zahl, callback) {
    const ergebnis = zahl * 2;
    callback(ergebnis);
}

verdoppeln(10, (ergebnis) => {
    console.log(ergebnis);
});