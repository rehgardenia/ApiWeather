async function clima() {
    let parametro =  document.getElementById('parametro').value; 
    console.log(parametro);
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${parametro}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e446387380msha571c57893e59c4p11df9ejsn8ddf2e92f5aa',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
    
        if (result.current && result.current.condition) {
            document.getElementById('resposta').innerHTML = `${parametro} <br><br> Status: ${result.current.condition.text}<br>
            Temperatura(°C):`;
        } else {
            document.getElementById('resposta').innerHTML = 'Erro: Não foi possível obter as informações do clima.';
        }
    } catch (error) {
        document.getElementById('resposta').innerHTML = 'Erro: ' + error.message;
    }
}

function imgClima(clima){
    let url = "";
    if(clima=="Sunny"){
        url = "ensolarado";
    }
    else if(clima == "Clody"){
        url = "nublado";
    }

}