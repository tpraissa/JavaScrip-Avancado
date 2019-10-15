class DateHelper{
    textoParaData(texto){
        return new Date(...texto.split('-').map((item, indice) => item - indice % 2));
    }

    dataParaTexto(data){
        return data.getDate() 
        + '/' + (date.getMonth() + 1) 
        + '/' + data.getFullYear();
    }
}