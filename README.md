NBA Wiki React Applications

Objective:
This project aims to develop a NBA player stats application using Javascript, HTML, CSS, and the React Library. The application will request external data from 'balldontlie' API and will also use local data files.

Implementation:

    1. Researched API for application. Downloaded local json file from 'data.nba.net' to obtain NBA unique identifiers for each team and player to access images from 'nba.net'
    2. Use 'balldontlie' API to request stats for each player for the application.
    3. Design NBA application using React.js
    4. Challenges:
        1. Need to find a while to combine two data sets to get the information required.
        2. Had to break down the fetch to search per player, because API had limitations. The 'balldontlie' API will only return 100 results per fetch request. Also, can only make 60 requests per minute.
        3. The data from 'nba.net' are for 2022 NBA Season, the newest season data were not available. The stats from 'balldontlie' are current, so had to do some data cleaning on the data in the local json file.

Installation:

    1. Run nom start in terminal to start the application

Application Features:

    1. Display all NBA teams
    2. Display all players on the Team
    3. View a modal pop-up for each player that displays their stats

[View NBA APP](https://master--tourmaline-bunny-66bbfc.netlify.app/)

![Title Screen](https://raw.githubusercontent.com/isaacdong88/NBA-PROFILE-APP/master/src/NBAWIKI.png)

![Mid Game Image](https://raw.githubusercontent.com/isaacdong88/NBA-PROFILE-APP/master/src/playerStats.png)
