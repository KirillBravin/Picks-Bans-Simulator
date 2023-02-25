let   wrapperBansTeamOne = document.querySelector('.tm-bans-1'),
        wrapperBansTeamTwo = document.querySelector('.tm-bans-2'),
        wrapperPicksTeamOne = document.querySelector('.picks-tm-1'),
        wrapperPicksTeamTwo = document.querySelector('.picks-tm-2'),
        wrapperChampions = document.querySelector('.champion-pull');


let banTeam1 = function (){
    wrapperChampions.addEventListener('click', (e) => {
        if (e.target && e.target.tagName == "BUTTON") {
            for (let i = 0; i < wrapperChampions.childElementCount; i++){
                    if(wrapperChampions.children[i] == e.target){
                        wrapperBansTeamOne.children[0].classList.add(wrapperChampions.children[i].classList[1]);
                    }
            }
         }
    }, {once: true});
};

banTeam1();