# PROJECT NAME
## Description
Duration: Weekend Project

The problem I was given was to make an application that could run a to do list. My application can take in an input print it to the screen and then you can update the status with the "complete" button, and delete the task with a seperate button. My data and logic has to run through a database which then spits it back onto my screen. I solved it with a GET route, a POST route, a PUT route, and a DELETE route.

## Prerequisites
1. Node
2. PG
3. Express
4. body-parser
5. Postgres
6. Postco 1/2

## Installation
Fork and clone my repo, and then put it into a folder of your choosing. Type npm install when inside your folder in the terminal and it will download all the dependacies that are inside the package.json file. Go into Postico and create a new database called 'toList' and copy the commands from the database.sql file I provided and paste into the SQL query in Postico 2. Next go into Postgres and run the database you just created. Then type node server/server.js into the terminal after that. Then go to a browser and type localhost:5000, and from there everything should be working.
## Usage
1. Type a task into the input field.
2. Press the submit button once you are done typing in the task.
3. This should then print it to the screen (if there is already tasks it will be the bottom most task).
4. Once you are done with a task you should the press the Complete button, this will change the status of your task from "Incomplete" to "Complete".
5. If you don't want to see a task anymore click the delete button to get rid of it.

## Built With
VS code
JS
HTML 5
CSS 


## Acknowledgement
Thank you Matt Black for providing great explanations and lessons for how to build all the components required to make this project.

## Support
If you have suggestions or issues, please email me at coledahlen@gmail.com