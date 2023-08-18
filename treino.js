
const nome = 'Matheus';

const getEventoAleatorio = () => {
    let nAleatorio = (Math.floor(Math.random() * 3));

    let treinamento = '';

    if (nAleatorio === 0){
        treinamento = 'Maratona'
    }else if (nAleatorio === 1){
        treinamento = 'Triathlon'
    }else if (nAleatorio === 2){
        treinamento = 'Pentathlon'
    };

    return treinamento;
};

const resultadoEvento = getEventoAleatorio();

const getDiasTreino = getEventoAleatorio => {
    let dias = '';

    if (getEventoAleatorio === 'Maratona'){
        dias = '50 dias';
    }else if (getEventoAleatorio === 'Triathlon'){
        dias = '100 dias'
    }else if (getEventoAleatorio === 'Pentathlon'){
        dias = '200 dias'
    }

    return dias;
};

let resultadoDias = getDiasTreino(resultadoEvento);

const logEvento = (n, e, d) => {
    console.log(`${n} você vai correr no ${e} que será daqui ${d}`)
}

logEvento(nome, resultadoEvento, resultadoDias)