let   wrapperBansTeamOne = document.querySelector('.tm-bans-1'),
        wrapperBansTeamTwo = document.querySelector('.tm-bans-2'),
        wrapperPicksTeamOne = document.querySelector('.picks-tm-1'),
        wrapperPicksTeamTwo = document.querySelector('.picks-tm-2'),
        wrapperChampions = document.querySelector('.champion-pull');

let countBanTeam1 = 0;
let countBanTeam2 = 0;
let countPickTeam1 = 0;
let countPickTeam2 = 0;
let count = 0;

function banTeam1 (){
    if (count <5) {
    wrapperChampions.addEventListener('click', (e) => {
        if(countBanTeam1 < 5){ 
            if (e.target && e.target.tagName == "BUTTON") {
                for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperBansTeamOne.children[countBanTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                        }
                }
                countBanTeam1++;
                count++;
             }
             return banTeam1();
            }
    }, {once: true});
}  

else if (count >= 5 && count < 10){
        wrapperChampions.addEventListener('click', (e) => {
            if (countBanTeam2 < 5){
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let j = 0; j < wrapperChampions.childElementCount; j++){
                            if(wrapperChampions.children[j] == e.target){
                                wrapperBansTeamTwo.children[countBanTeam2].classList.add(wrapperChampions.children[j].classList[1]);
                            }
                    }
                    countBanTeam2++;
                    count++;
                    return banTeam1();
                 } 
             }
        }, {once: true});
    }

   else if (count > 0){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam1 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamOne.children[countPickTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                        }
                    }
                    countPickTeam1++;
                    count++;
                    console.log(count);
                }
            }
        }, {once: true});
    }

/*     else if (count > 100){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam2 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamTwo.children[countPickTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                        }
                    }
                    countPickTeam2++;
                    count++;
                    console.log(count);
                }
            }
        }, {once: true});
    } */
}

banTeam1();