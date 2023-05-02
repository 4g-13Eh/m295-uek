async function simuliereVerzoegerung(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function addiereNachVerzoegerung(a, b, ms){
    try{
        const ergebnis = await simuliereVerzoegerung(ms).then(() => a + b);
        console.log(ergebnis);
    } catch(err){
        console.error(err);
    }
}

addiereNachVerzoegerung(3, 7, 2000)