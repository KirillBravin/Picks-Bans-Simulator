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
    wrapperChampions.addEventListener('click', (e) => {
        if (countBanTeam1 > 5){
            return;
        }
         else if (countBanTeam1 < 5){
            if (e.target && e.target.tagName == "BUTTON") {
                for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperBansTeamOne.children[countBanTeam1].classList.add(wrapperChampions.children[i].classList[1]);
                        }
                }
                countBanTeam1++;
                return banTeam1();
             } 
         }
    }, {once: true});
}

function banTeam2 (){
    wrapperChampions.addEventListener('click', (e) => {
        if (countBanTeam2 > 5){
            return;
        }
         else if (countBanTeam2 < 5){
            if (e.target && e.target.tagName == "BUTTON") {
                for (let i = 0; i < wrapperChampions.childElementCount; i++){
                        if(wrapperChampions.children[i] == e.target){
                            wrapperBansTeamTwo.children[countBanTeam2].classList.add(wrapperChampions.children[i].classList[1]);
                        }
                }
                countBanTeam2++;
                console.log(countBanTeam2);
                return banTeam2();
             } 
         }
    }, {once: true});
}

banTeam1();

function banning (){
    
}