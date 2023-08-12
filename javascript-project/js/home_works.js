const input = document.getElementById('gmail_input')
const button = document.getElementById('gmail_button')
const moveBlock = document.getElementsByClassName('child_block')

//#1
const gmailRegExp = /^[A-Za-z0-9]+\@(gmail)+\.[a-z]{2,4}$/


button.addEventListener('click', () =>{
    if (gmailRegExp.test(input.value)){
        input.style.border = '2px solid green'
    }else{
        input.style.border = '2px solid red'
    }
})

// #2
let k = 0
const move = () =>{
    if (k <447){
        k+=3
        moveBlock[0].style.left = `${k}px`
        setTimeout(move,10)
    }
}
move()