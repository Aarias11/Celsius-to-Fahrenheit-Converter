document.querySelector('#conversion').addEventListener('click', convert)

function convert() {
    let temp = document.querySelector('#userInput').value
    temp = Math.ceil(temp) * 9/5 + 32

    document.querySelector('#result').innerText = temp
}





// userInput

// conversion

// result