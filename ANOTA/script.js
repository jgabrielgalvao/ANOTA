function trocarcor() {
    //Seleciona o elemento do seletor de cores, pega o seu valor e registra em uma variável.
    let Cor =  document.querySelector('#bgcolor').value;
    //Seleciona o elemento ID em que a cor deve ser trocada, entra no estilho e altera o background para cor inserida e adquirada, através do value anterior.
    document.getElementById('meufundo').style.backgroundColor = Cor;
}
function Copiar(id) {
// confirmação idpos do segurado
    var copiar =  document.getElementById(id);

    copiar.select();
    document.execCommand('copy');
}
function Limpar(){
    const checkbox1 = document.getElementById("check")
    const checkbox2 = document.getElementById("check2")
    const checkbox3 = document.getElementById("check3")
    const checkbox4 = document.getElementById("check4")
    const checkbox5 = document.getElementById("check5")
    const checkbox6 = document.getElementById("check6")
    const checkbox7 = document.getElementById("check7")
    const checkbox8 = document.getElementById("check8")
    const checkbox9 = document.getElementById("check9")

    checkbox1.checked = false
    checkbox2.checked = false
    checkbox3.checked = false
    checkbox4.checked = false
    checkbox5.checked = false
    checkbox6.checked = false
    checkbox7.checked = false
    checkbox8.checked = false
    checkbox9.checked = false

    document.getElementById('campo').value = '';
    document.getElementById('campo_dois').value = '';
    document.getElementById('campo_tres').value = '';
    document.getElementById('campo_quatro').value = '';
    document.getElementById('campo_cinco').value = '';
    document.getElementById('campo_seis').value = '';
    document.getElementById('campo_sete').value = '';
    document.getElementById('campo_oito').value = '';
    document.getElementById('campo_nove').value = '';
    document.getElementById('campo_dez').value = '';
    document.getElementById('campo_onze').value = '';
    document.getElementById('campo_doze').value = '';
    document.getElementById('campo_treze').value = '';
    document.getElementById('campo_quatorze').value = '';
    document.getElementById('campo_quinze').value = '';
    document.getElementById('campo_dezesseis').value = '';
    document.getElementById('campo_dezessete').value = '';
    document.getElementById('campo_dezoito').value = '';
    document.getElementById('campo_dezenove').value = '';
    document.getElementById('campo_vinte').value = '';
    document.getElementById('campo_vinteum').value = '';
    document.getElementById('campo_vintedois').value = '';
    document.getElementById('primeira_linha').value = '';
    document.getElementById('segunda_linha').value = '';
    document.getElementById('terceira_linha').value = '';
    document.getElementById('quarta_linha').value = '';
    document.getElementById('quinta_linha').value = '';
    document.getElementById('sexta_linha').value = '';
    document.getElementById('setima_linha').value = '';
    document.getElementById('oitava_linha').value = '';
    document.getElementById('nona_linha').value = '';
    document.getElementById('decima_linha').value = '';
    document.getElementById('decimaprimeira_linha').value = '';
    document.getElementById('campo_vintetres').value = '';
    document.getElementById('campo_vintequatro').value = '';
}