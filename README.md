# tic-tac-toe

## _Files_

`App.js` is the running most of the main api request/(events). First of user sign up-sign requests.
I have applied bootstrap modals for the sign in, and sign up. 2 sparate modals, which made `index.html` file long and kindda confusing.

I have splitted all my projects into 3 folder as

- game-profile
- user-profile
- main

I tried to create a tree structure at the fist to easy to control whole project at one center.

### Tree structure like:

![Tree](./public/tree-figure.png)

---

`user-profile folder/event.js` runs all api files (sign up,sign in, sign out api requests). <br>

`game-profile` folder also includes proper files game events, game apis, game ui files. <br>

`main` folder stores helper/checker/play/ui (ui-helper) js files that main part of the projects.

## _Behind the Scene_

- _main/play_ runs the interface game. Inputs object holds the whole player moves counts, players moves index, print out result till `createNewGame` function called.
  <br>
- _main/checker_ holds 8 win conditions and requires 2 arguments and returns the result of winning condition.
- _game-profile/game-update-data_ whole js file returns patch data as a required structure.

![wireframes](./public/1.jpg)
![wireframes](./public/2.jpg)

## _User Stories_

- user has to sign up first to see `start game` button
- user can see `new game` after starting 1st game.
- user can start new game anytime by clicking `new game` button
- user can change game board view by clicking `board` button (2 views available)
- user can see game history by clicking `history` button (last 4 games only)
- user can click on these `4 games` (if game hasnt not finished) to continue game from where he left
- user can sign out by clicking `sing out` button
- user can sign up with several times (different emails)
- user can see the current (.) game api update by clicking `history` button
