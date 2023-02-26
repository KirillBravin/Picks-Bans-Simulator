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
    if (count < 5) {
    wrapperChampions.addEventListener('click', (e) => {
        if(countBanTeam1 < 5){ 
            if (e.target && e.target.tagName == "BUTTON") {
                for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperBansTeamOne.children[countBanTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                }
                countBanTeam1++;
                count++;
             }
             return banTeam1();
            }
    }, {once: true});
}  

if (count > 4 && count < 10){
        wrapperChampions.addEventListener('click', (e) => {
            if (countBanTeam2 < 5){
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                            if(wrapperChampions.children[i] == e.target){
                                wrapperBansTeamTwo.children[countBanTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                                wrapperChampions.children[i].classList.add('black-white');
                                wrapperChampions.children[i].style = "pointer-events:none;";
                                break;
                            }
                    }
                    countBanTeam2++;
                    count++;
                    return banTeam1();
                 } 
             }
        }, {once: true});
    }

   if (count == 10){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam1 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamOne.children[countPickTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam1++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }

    if (count > 10 && count < 13){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam2 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamTwo.children[countPickTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam2++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }

    if (count > 12 && count < 15){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam1 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamOne.children[countPickTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam1++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }

    if (count > 14 && count < 17){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam2 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamTwo.children[countPickTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam2++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }

    if (count > 16 && count < 19){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam1 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamOne.children[countPickTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam1++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }
    if (count == 19){
        wrapperChampions.addEventListener('click', (e) => {
            if (countPickTeam2 < 5) {
                if (e.target && e.target.tagName == "BUTTON") {
                    for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperPicksTeamTwo.children[countPickTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                            wrapperChampions.children[i].classList.add('black-white');
                            wrapperChampions.children[i].style = "pointer-events:none;";
                            break;
                        }
                    }
                    countPickTeam2++;
                    count++;
                    return banTeam1();
                }
            }
        }, {once: true});
    }
}

banTeam1();