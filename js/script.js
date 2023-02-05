const   banButtonsTeamOne = document.querySelectorAll('.banTeam1'),
        banButtonsTeamTwo = document.querySelectorAll('.banTeam2'),
        pickButtonsTeamOne = document.querySelectorAll('.pickTeam1'),
        pickButtonsTeamTwo = document.querySelectorAll('.pickTeam2'),
        champions = document.querySelectorAll('.champion');

const listenClick = () => {
    console.log('click');
};

banButtonsTeamOne.forEach(btn => {
    btn.addEventListener('click', listenClick);
});