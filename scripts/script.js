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
            cols[col].style.border = '4px solid rgb(183, 185, 197)';
            cols[col].style.backgroundColor = 'rgb(37, 35, 35)';
        }
        msg.innerHTML = 'VITORIA <button>Jogar novamente</button>';
        msg.style.display = 'flex';
        if(winner === 'square') {
        msg.style.backgroundColor = 'var(--mainRed)';
        } else {
            msg.style.backgroundColor = 'var(--mainBlue)';
        }
    }else {
        console.log('velha');
    }
    const button = document.querySelector('.msg button');
    button.onclick = () => {
        status = true;
        msg.style.display = 'none';
        msg.innerHTML = '';
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
                    console.log('sai fora cara');
                }else {
                    if(this.start == 'circle') {
                        this.start = 'square';
                    } else {
                        this.start = 'circle';
                    }
                    col.innerHTML = div;
                }
                check();
                console.log(status);
            }
            
        }

        
    }
    
    
}

play();

