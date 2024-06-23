function LotteryCard (index ,isWinning){
    this.index = index;
    this.isWinning = isWinning;
    this.handleTry = function(attempt,square,squareConteiner){
        if(this.isWinning){
            alert("Congrats! you have won")
            square.classList.add('square-correct')   
        } else{
            if (attempt === 3) {
                alert('Sorry it was your last turn')
                squareConteiner.innerHTML = null;

                return
            }
            alert('Try one more time')
            square.classList.add('square-wrong')
        }
    };

}

const card = [
    new LotteryCard(1,false),
    new LotteryCard(7,false),
    new LotteryCard(5,false),
    new LotteryCard(6,false),
    new LotteryCard(2,false),
    new LotteryCard(10,false),
    new LotteryCard(4,true),
    new LotteryCard(12,false),
    new LotteryCard(3,false),
    new LotteryCard(11,false),
    new LotteryCard(9,false),
    new LotteryCard(8,false),
]

function renderSquares(squres){
    let attempt = 0;
    const squareConteiner = document.querySelector('.squares-container')
     squres.forEach((item) => {
        const square = document.createElement('div')
        const squresIndex = document.createElement('h4')
        squresIndex.innerHTML = item.index
        square.appendChild(squresIndex)
        square.classList.add('square')
        square.addEventListener('click', ()=>
            item.handleTry(++attempt,square,squareConteiner)
         )
        squareConteiner.appendChild(square)
     });
}


renderSquares(card)
