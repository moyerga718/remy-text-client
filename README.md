# Remy: A Text-Based Adventure (front-end)

## About
Remy is a retro-inspired text-based adventure game. This repo is for the client-side portion of the game. 

## Technologies Used
The front-end for this project was built with React (Create React App).

## How it works

Upon starting the app, the user is able to create an account, sign into an account, or go to an about page. After signing in, the user can start a new game, load 
an existing game, or delete any of their existing games. 

Once the user is within the game screen, they are prompted with a situation (Ex. "There is a tree to the north of you with a red ball underneath it"), a text input, and a player inventory. The user progresses through the game by exploring the world, picking up items, and using those items in the proper places. The user can figure out how and where to use items by reading item descriptions and paying attention to environmental clues. 

The user moves the player by responding to the situations with two-word phrases in the text input section. If the user wants to go north, they can type "Go North" into the text input and hit enter. This will send the text string and with the current game data to the backend server where the text string is parsed and validated. If the action is identified as a valid action for this situation, the game object is updated accordingly and sent back to the client side. The user is then prompted with a new situation and the process starts over.

The end of the game is triggered by going to a certain area after using specific items in the right place. There are two different endings, which trigger based on which items were used. I'd say more here, but I don't want to spoil the game!
