const name_role = document.querySelector(".name-role-text")

const loopText = ["Mouaad ELBARRIK", "a FULL STACK Devlopper"] // expretion to show
let textIsShowing = "" // text is displaying 
const delaiBetweenLetter = 250 //letter to letter delai in: ms
let writePos = 0 //the curent char to write
let state = 0 // witch expretion we are in 
console.log("t ")

writeText() // invoke the function right a way 
function writeText() { // this fun will start the writing prosses
    WriteNextLetter()
    function WriteNextLetter() { // self explanatory
        textIsShowing = `${textIsShowing.slice(0, textIsShowing.length - 1)}${loopText[state][writePos]}_` // adding the next letter to textIsShowing
        name_role.textContent = textIsShowing // puting it is the screen

        setTimeout(() => { // waiting the (delaiBetweenLetter)
            writePos++
            if (writePos === loopText[state].length) { // do we finish the expretion ?
                state = (state + 1) % 2 // go to the next expr
                blink("_")
                setTimeout(() => {
                    blink("_")

                }, 900);
                setTimeout(() => {
                    deleteNextLetter() // delete
                }, 2000);
            }
            else
                WriteNextLetter()
        }, delaiBetweenLetter);
    }


    function deleteNextLetter() {
        textIsShowing = `${textIsShowing.slice(0, textIsShowing.length - 2)}█` // removeing the next letter to textIsShowing
        name_role.textContent = textIsShowing // puting it is the screen

        setTimeout(() => { // waiting the (delaiBetweenLetter/10)
            writePos--
            if (writePos === 0) { // do we finish the expretion ?
                blink("█")
                setTimeout(() => {
                    // debugger
                    WriteNextLetter()
                }, 1000)
            }
            else {
                deleteNextLetter() // delete the next one
            }
        }, delaiBetweenLetter / 10);
    }
    function blink(char) {
        setTimeout(() => {
            textIsShowing = `${textIsShowing.slice(0, textIsShowing.length - 1)}`
            name_role.textContent = textIsShowing // puting it is the screen

        }, 400)
        setTimeout(() => {
            textIsShowing = `${textIsShowing.slice(0, textIsShowing.length)}${char}`
            name_role.textContent = textIsShowing // puting it is the screen

        }, 900)
    }
}