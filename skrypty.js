let count;
function licznik() {
    let countStorage = parseInt(localStorage.getItem('count'));
    
    // console.log(countStorage);
    
    if(isNaN(countStorage)) {
        countStorage = 0;
    } 
    countStorage++;
    document.getElementById('counterResult').innerHTML = `Liczba wejść na stronę: ${countStorage}`;
    localStorage.setItem('count', countStorage);
}

licznik();