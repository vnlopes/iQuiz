let time = 20;
let count = 6;
const checkBox = document.querySelector('#true')

const init = () =>{
    document.querySelector('.main-quiz').style = 'opacity: 100%; display: flex;'
    document.querySelector('.welcome').style = 'opacity: 0;'
    let regress = document.querySelector('.regressive');
    regress.style = 'color: white; opacity: 100%; display: flex; z-index: 40; font-weight: 900; font-size: 10rem;'
    
    setInterval(() => {

        if(
            lerClicks.length == 3
        ) {
            time = 0
            document.querySelector('.time span').innerHTML = time;
        }

        if(count == 0){
            count = 0;
            regress.style = 'opacity: 0; display: none;'
            document.body.classList.remove('overflow-y-hidden')
        } else{
            count --
            regress.innerHTML = count
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
    acertos.push('acerto')
    lerClicks.push('le')
}

const mark = () => {
    bTree.disabled = true;
    bTwo.disabled = true;
   bOne.style = 'border: 3px solid #00e40b;'
   lerClicks.push('le')
}

const mark1 = () => {
    bTwo.style = 'border: 3px solid #00e40b;'
    bOne.disabled = true;
    bTree.disabled = true;
    lerClicks.push('le')
}

const confirm = () => {
    alert('Você acertou ' + acertos.length + ' pergutas')
}

// quest 2

const markq1 = () => {
    document.querySelector('#qq1').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qq2').disabled = true;
    document.querySelector('#qq3').disabled = true;
    lerClicks.push('le')
}

const markq2 = () => {
    document.querySelector('#qq2').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qq1').disabled = true;
    document.querySelector('#qq3').disabled = true;
    acertos.push('acerto')
    lerClicks.push('le')
}

const markq3 = () => {
    document.querySelector('#qq1').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qq2').disabled = true;
    document.querySelector('#qq3').disabled = true;
    lerClicks.push('le')
}

// quest 3

const markqq1 = () => {
    acertos.push('acerto')
    document.querySelector('#qqq1').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qqq2').disabled = true;
    document.querySelector('#qqq3').disabled = true;
    lerClicks.push('le')
}

const markqq2 = () => {
    document.querySelector('#qqq2').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qqq1').disabled = true;
    document.querySelector('#qqq3').disabled = true;
    lerClicks.push('le')
}

const markqq3 = () => {
    document.querySelector('#qqq1').style = 'border: 3px solid #00e40b;'
    document.querySelector('#qqq2').disabled = true;
    document.querySelector('#qqq3').disabled = true;
    lerClicks.push('le')
}

let acertos = []

let lerClicks = []

console.log(acertos)