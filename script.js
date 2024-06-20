const replaceAt = (string, character, index) => {
    return string.substring(0, index) + character + string.substring(index + character.length);
}

const words = ['ballena','perro','gato','lobo','mapache','cocodrilo','murcielago','hipopotamo','vaca','venado'];
const secreta = words[Math.floor(Math.random()* words.length)];
let hiddenWord = secreta.replace(/./g, "_ ");

document.querySelector('.hiddenWord').innerHTML = hiddenWord;

let errorCounter = 0;
const evaluateWord = () => {
    const letter = document.querySelector('input').value;
    document.querySelector('input').value = '';
    let error = true;
    for(let i = 0; i<secreta.length; i++){
        if(secreta[i]=== letter){
            hiddenWord = replaceAt(hiddenWord, letter, i * 2);
            error = false;
        }
    }
    document.querySelector('.hiddenWord').innerHTML = hiddenWord;

    if(error){
        errorCounter++; 
        document.querySelector('.ahorcado').style.backgroundPosition = -errorCounter * 300 + 'px';
        if(errorCounter === 6){
            document.querySelector('.info').innerHTML = '<h1>!!PERDISTE!!</h1>';
        }
            
    }

    if(!hiddenWord.includes("_")){
        document.querySelector('.info').innerHTML = '<h1>!!GANASTE!!</h1>';
    }
}

document.querySelector('button').addEventListener('click', evaluateWord);
