let   wrapperBansTeamOne = document.querySelector('.tm-bans-1'),
        wrapperBansTeamTwo = document.querySelector('.tm-bans-2'),
        wrapperPicksTeamOne = document.querySelector('.picks-tm-1'),
        wrapperPicksTeamTwo = document.querySelector('.picks-tm-2'),
        wrapperChampions = document.querySelector('.champion-pull');

/* console.dir(wrapperBansTeamOne.children[0]);
console.dir(wrapperChampions.children[0]);
wrapperBansTeamOne.children[0].outerHTML = wrapperChampions.children[0].outerHTML; */


/* wrapperChampions.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
        for (let i = 0; i < wrapperChampions.childElementCount; i++){
            if(wrapperChampions.children[i] == e.target){
                console.log('asd');
                wrapperBansTeamOne.children[0].outerHTML = wrapperChampions.children[i].outerHTML;
            }
        }
    }
}); */

wrapperChampions.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == "BUTTON") {
        for (let i = 0; i < wrapperChampions.childElementCount; i++){
                if(wrapperChampions.children[i] == e.target){
                    wrapperBansTeamOne.children[0].outerHTML = wrapperChampions.children[i].outerHTML;
                }
        }
     }
}, {once: true});