let time = 15;
let count = 6;

const init = () =>{
    document.querySelector('.main-quiz').style = 'right: 0; visibility: visible;'
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
            } else if(
                time --
            )
            document.querySelector('.time span').innerHTML = time;
        }, 1000);
    }, 7000);

}