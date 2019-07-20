let status = true;
const cols = document.querySelectorAll('.all');
const msg = document.querySelector('.msg');
let winner;

let check = () => {
    if((cols[0].innerHTML != '') && (cols[1].innerHTML != '') && (cols[2].innerHTML != '')
    && (cols[0].innerHTML == cols[1].innerHTML) && (cols[1].innerHTML == cols[2].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner, [0, 1, 2]);
    } else if((cols[3].innerHTML != '') && (cols[4].innerHTML != '') && (cols[5].innerHTML != '')
    && (cols[3].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[5].innerHTML)) {
        winner = cols[3].childNodes[0].className;
        newGame(1, winner, [3, 4, 5]);
    } else if((cols[6].innerHTML != '') && (cols[7].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[6].innerHTML == cols[7].innerHTML) && (cols[7].innerHTML == cols[8].innerHTML)) {
        winner = cols[6].childNodes[0].className;
        newGame(1, winner, [6, 7, 8]);
    } else if((cols[0].innerHTML != '') && (cols[3].innerHTML != '') && (cols[6].innerHTML != '')
    && (cols[0].innerHTML == cols[3].innerHTML) && (cols[3].innerHTML == cols[6].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner, [0, 3, 6]);
    } else if((cols[1].innerHTML != '') && (cols[4].innerHTML != '') && (cols[7].innerHTML != '')
    && (cols[1].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[7].innerHTML)) {
        winner = cols[1].childNodes[0].className;
        newGame(1, winner, [1, 4, 7]);
    } else if((cols[2].innerHTML != '') && (cols[5].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[2].innerHTML == cols[5].innerHTML) && (cols[5].innerHTML == cols[8].innerHTML)) {
        winner = cols[2].childNodes[0].className;
        newGame(1, winner, [2, 5, 8]);
    } else if((cols[0].innerHTML != '') && (cols[4].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[0].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[8].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner, [0, 4, 8]);
    } else if((cols[2].innerHTML != '') && (cols[4].innerHTML != '') && (cols[6].innerHTML != '')
    && (cols[2].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[6].innerHTML)) {
        winner = cols[2].childNodes[0].className;
        newGame(1, winner, [2, 4, 6]);
    } else if((cols[0].innerHTML != '') && (cols[1].innerHTML != '') && (cols[2].innerHTML != '') 
    && (cols[3].innerHTML != '') && (cols[4].innerHTML != '') && (cols[5].innerHTML != '') 
    && (cols[6].innerHTML != '') && (cols[7].innerHTML != '') && (cols[8].innerHTML != '')){
        newGame(0);
    }
} 

let newGame = (result, winner, arr) => {
    status = false;
    if(result === 1) {
        for(col of arr) {
            cols[col].className += ' win';   
        }
        msg.innerHTML = 'VITORIA <button>Jogar novamente</button>';
        msg.style.display = 'flex';
        if(winner === 'square') {
        msg.style.backgroundColor = 'var(--mainRed)';
        } else {
            msg.style.backgroundColor = 'var(--mainBlue)';
        }
    }else {
        msg.innerHTML = '#VELHA# <button>Jogar novamente</button>';
        msg.style.display = 'flex';
        msg.style.backgroundColor = 'rgba(49, 49, 49, 0.8)';
        msg.style.color = '#eee';
    }
    const button = document.querySelector('.msg button');
    button.onclick = () => {
        status = true;
        msg.style.display = 'none';
        msg.innerHTML = '';
        for(col of cols) {
            col.innerHTML = '';
            col.classList.remove("win");
        }
    }  
}

let play = () => {
    
    for(let i = 0; i < cols.length; i++) {
        const col = cols[i];
        this.start = 'circle';
        
        col.onclick = () => {
            
            if(status === true) {
                let div = `<div class="${start}"></div>`;
                if(col.innerHTML) {
                    console.log('quadrado já selecionado');
                }else {
                    if(this.start == 'circle') {
                        this.start = 'square';
                    } else {
                        this.start = 'circle';
                    }
                    col.innerHTML = div;
                }
                check();
            }
            
        }

        
    }
    
    
}

play();

