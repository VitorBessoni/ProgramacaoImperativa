


const usarMicroondas = (comida, tempo) => {
    const mensagens = ['Tempo insuficiente', 'Sua comida queimou', 'Kabumm', 'Prato pronto, bom apetite!!!']
    switch (comida) {
        case 'pipoca':
            if (tempo < 10) {
                return mensagens[0];
            } else if (tempo > 20 && tempo <=30) {
                return mensagens[1];
            } else if (tempo > 30) {
                return mensagens[2];
            } else {
                return mensagens[3];
            }

        case 'macarrao':
            if (tempo < 8) {
                return mensagens[0];
            } else if (tempo > 16 && tempo <=24) {
                return mensagens[1];
            } else if (tempo > 24) {
                return mensagens[2];
            } else {
                return mensagens[3];
            }

        case 'carne':
            if (tempo < 15) {
                return mensagens[0];
            } else if (tempo > 30 && tempo <=45) {
                return mensagens[1];
            } else if (tempo > 45) {
                return mensagens[2];
            } else {
                return mensagens[3];
            }


        case 'feijao':
            if (tempo < 12) {
                return mensagens[0];
            } else if (tempo > 24 && tempo <=36) {
                return mensagens[1];
            } else if (tempo > 36) {
                return mensagens[2];
            } else {
                return mensagens[3];
            }


        case 'brigadeiro':
            if (tempo < 8) {
                return mensagens[0];
            } else if (tempo > 16 && tempo <=24) {
                return mensagens[1];
            } else if (tempo > 24) {
                return mensagens[2];
            } else {
                return mensagens[3];
            }

        default:
            return 'Essa opção é inexistente';

    }
}


console.log(usarMicroondas("ferro",20));











