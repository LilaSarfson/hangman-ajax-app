// Código principal de la aplicación

// Obtener las películas de
// https://github.com/hjorturlarsen/IMDB-top-100/blob/master/data/movies.json

//ESTADO
let peliculaAdivinar = "inside out";
let movieGuess = peliculaAdivinar.replaceAll(/[a-zA-z]/g, "*");
let attempts = 5;
let checkedLetters = [];
let finishGame = 0;
// Estoy jugando : 0
// Gané: 1
//Perdí: -1

for (let index = 0; index < movieGuess.length; index++) {
    const letras = movieGuess[index];

    let asterisco = document.createElement("span");
    asterisco.textContent = letras;
    let puzzle = document.querySelector("#puzzle");
    puzzle.appendChild(asterisco);

}

let lettersTried = document.querySelector("#letters-tried");


window.addEventListener("keypress", function (e) {

    if (attempts == 0) {
        return;
    }

    let keypress = e.key;
    let message = document.querySelector("#guesses");

    message.textContent = `Te quedan ${attempts} intentos `;

    if (!/^[a-z]$/i.test(keypress)) {
        // esto no es una letra de la a la z
        return;
    }


    if (checkedLetters.includes(keypress)) {

    }
    else {
        checkedLetters.push(keypress);
        let asterisco = document.createElement("span");
        asterisco.textContent = checkedLetters[checkedLetters.length - 1];
        lettersTried.appendChild(asterisco);
    }


    for (let index = 0; index < peliculaAdivinar.length; index++) {
        const letras = peliculaAdivinar[index];
        if (keypress == letras) {
            movieGuess = movieGuess.slice(0, index) + keypress + movieGuess.slice(index + 1);
            console.log(movieGuess);
        }
    }
    document.querySelector("#puzzle").innerHTML = "";

    for (let index = 0; index < movieGuess.length; index++) {
        const letras = movieGuess[index];

        let asterisco = document.createElement("span");
        asterisco.textContent = letras;
        let puzzle = document.querySelector("#puzzle");
        puzzle.appendChild(asterisco);

    }

    if (!peliculaAdivinar.includes(keypress) && attempts > 0) {
        attempts--;
    }
    if (attempts == 0) {
        message.textContent = "Has perdido!!"
    }

});



/**
 * 1. Capturar el evento keyup
 * 2. Ver si la tecla capturada está en la palabra a adivinar (movie). event.key -> nos dice la tecla que ha pulsado el usuario
 * 3. Si está-->
 *    3.1 Recorrer el string original con movie.forEach((nextLetter, index) => {})
 *    3.2. Cada vez que encuentro una posición del string que es igual a la letra adivinada, habría algo así como...
 *    movie = movie.slice(0, index) + nextLetter + movie.slice(index+1);
 *  3.2 Actualizar el DOM con movieGuess. Lo más sencillo es 'limpiar' todo el HTML de id="puzzle"; y volver a generar todos los <span>. Alternativamente, podríamos actualizar el <span> que coincida con la posición del string donde iría la letra acertada.
 * 
 * 
 * Corregir: 13.10
 * 
 */