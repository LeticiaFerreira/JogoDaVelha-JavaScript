const cols = document.querySelectorAll('.all');

let insertSymbol = () => {
    for(let i = 0; i < cols.length; i++) {
        const col = cols[i];
        this.start = 'circle';
        
        col.onclick = () => {
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
        }
    }
}
insertSymbol();
console.log(cols[1]);