let status = true;
const cols = document.querySelectorAll('.all');
let winner;

let check = () => {
    if((cols[0].innerHTML != '') && (cols[1].innerHTML != '') && (cols[2].innerHTML != '')
    && (cols[0].innerHTML == cols[1].innerHTML) && (cols[1].innerHTML == cols[2].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[3].innerHTML != '') && (cols[4].innerHTML != '') && (cols[5].innerHTML != '')
    && (cols[3].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[5].innerHTML)) {
        winner = cols[3].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[6].innerHTML != '') && (cols[7].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[6].innerHTML == cols[7].innerHTML) && (cols[7].innerHTML == cols[8].innerHTML)) {
        winner = cols[6].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[0].innerHTML != '') && (cols[3].innerHTML != '') && (cols[6].innerHTML != '')
    && (cols[0].innerHTML == cols[3].innerHTML) && (cols[3].innerHTML == cols[6].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[1].innerHTML != '') && (cols[4].innerHTML != '') && (cols[7].innerHTML != '')
    && (cols[1].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[7].innerHTML)) {
        winner = cols[1].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[2].innerHTML != '') && (cols[5].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[2].innerHTML == cols[5].innerHTML) && (cols[5].innerHTML == cols[8].innerHTML)) {
        winner = cols[2].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[0].innerHTML != '') && (cols[4].innerHTML != '') && (cols[8].innerHTML != '')
    && (cols[0].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[8].innerHTML)) {
        winner = cols[0].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[2].innerHTML != '') && (cols[4].innerHTML != '') && (cols[6].innerHTML != '')
    && (cols[2].innerHTML == cols[4].innerHTML) && (cols[4].innerHTML == cols[6].innerHTML)) {
        winner = cols[2].childNodes[0].className;
        newGame(1, winner);
    } else if((cols[0].innerHTML != '') && (cols[1].innerHTML != '') && (cols[2].innerHTML != '') 
    && (cols[3].innerHTML != '') && (cols[4].innerHTML != '') && (cols[5].innerHTML != '') 
    && (cols[6].innerHTML != '') && (cols[7].innerHTML != '') && (cols[8].innerHTML != '')){
        newGame(0);
    }
} 

let newGame = (result, winner) => {
    status = false;
    if(result === 1) {
        console.log('vitoria de ' + winner);
    }else {
        console.log('velha');
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

