let time = 10;
let count = 6;
const checkBox = document.querySelector('#true')

const init = () =>{
    document.querySelector('.main-quiz').style = 'opacity: 100%;'
    document.querySelector('.welcome').style = 'opacity: 0;'
    let regress = document.querySelector('.regressive')
    regress.style = 'color: white; opacity: 100%; z-index: 10; font-weight: 900; font-size: 10rem;'
    
    setInterval(() => {
        if(count == 0){
            count = 0;
            regress.style = 'opacity: 0;'
        } else{
            count --
            regress.innerHTML = count
            console.log(contain)
            console.log(regress)
        }

        
    }, 1000);


    setTimeout(() => {
        fift = setInterval(() => {
            if(time === 0){
                clearInterval(fift)
                time = 0;
                alert('Seu tempo acabou!')
                confirm()
            } else if(
                time --
            )
            document.querySelector('.time span').innerHTML = time;
        }, 1000);
    }, 7000);

}

let bOne = document.querySelector('#q1');
let bTwo = document.querySelector('#q2');
let bTree = document.querySelector('#q3');

const mark2 = () => {
    bOne.disabled = true;
    bTwo.disabled = true;
    checkBox.checked = true;
    bTree.style = 'border: 3px solid #00e40b;'
    // if(checkBox.checked == true){
    //     alert('Parabéns, você acertou!')
    // } else {
    //     alert ('Você errou! ;(')
    // }
}

const mark = () => {
    bTree.disabled = true;
    bTwo.disabled = true;
   bOne.style = 'border: 3px solid #00e40b;'
}

const mark1 = () => {
    bTwo.style = 'border: 3px solid #00e40b;'
    bOne.disabled = true;
    bTree.disabled = true;
}

const confirm = () => {
    if(checkBox.checked == true){
        alert('Parabéns, você acertou!')
    } else {
        alert ('Você errou! ;(')
    }
}
