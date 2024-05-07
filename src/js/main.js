function exibir(nome, elo){
    if(!nome){
        return 
    }
    document.querySelector('#header').innerHTML = "O Herói de nome " +nome
    document.querySelector('#xpHeroi').innerHTML = "está no nível de "+elo
}
function gerarNumeroInteiro() {
    const min = 999;
    const max = 10001;        
    
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber === min ? min : randomNumber;
}

function elos(xp){
    if(xp == 1000){
        document.querySelector('body').classList.toggle('ferro')
        document.querySelector('img').setAttribute('src', 'assets/ferro.png')
        return "Ferro"
    }else if(xp > 1000 && xp<= 2000){
        document.querySelector('body').classList.toggle('bronze')
        document.querySelector('img').setAttribute('src', 'assets/bronze.png')
        return "Bronze"
    }else if(xp > 2000 && xp<= 5000){
        document.querySelector('body').classList.toggle('prata')
        document.querySelector('img').setAttribute('src', 'assets/prata.webp')
        return "Prata"
    }else if(xp > 5000 && xp<= 7000){
        document.querySelector('body').classList.toggle('ouro')
        document.querySelector('img').setAttribute('src', 'assets/ouro.webp')
        return "Ouro"
    }else if(xp > 7000 && xp<= 8000){
        document.querySelector('body').classList.toggle('platina')
        document.querySelector('img').setAttribute('src', 'assets/platina.webp')
        return "Platina"
    }else if(xp > 8000 && xp<= 9000){
        document.querySelector('body').classList.toggle('asendente')
        document.querySelector('img').setAttribute('src', 'assets/ascendente.png')
        return "Ascendente"
    }else if (xp > 9000 && xp<= 10000){
        document.querySelector('body').classList.toggle('imortal')
        document.querySelector('img').setAttribute('src', 'assets/imortal.png')
        return "Imortal"
    }else if(xp > 10000){
        document.querySelector('body').classList.toggle('radiante')
        document.querySelector('img').setAttribute('src', 'assets/Radiant.webp')
        return "Radiante"
    }else{
        return "Sacola"
    }
}

let nomeHeroi = prompt("Seu nome de Héroi")
let elo = elos(gerarNumeroInteiro())

exibir(nomeHeroi, elo)
