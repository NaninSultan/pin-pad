# PIN-pad-app
App with a pin pad that checks if the input of 4 digit code is correct

# Application description
User has a pin pad with numbers from 0 to 9 that they can use to input a four digit code. 

App then checks if the code is correct and returns a message.

User has 3 attempts to input the right code and after every incorrect try the attempts are reduced by 1 and message "ERROR" is shown.

In the case of the correct code the app returns "OK" as a message in which case attempts are NOT reduced.

In the case of three incorrect tries in a row the user gets locked out for 30 seconds with a message "LOCKED".

When less than four digits are written no attempts are reduced and the message "Your pin should contain 4 digits" is shown.

# Application main features:

PIN pad
Twelwe buttons (one for each number from 0 to 9 as well as "C" for Clear and "OK" for Submit)
Number of remaining attempts
Timer
Message alert
Easy to integrate
Responsive

# Technologies

Buillt with:
HTML
CSS
React JS

# List of libraries

Frontend:
-react-router-dom - Enables routing in our web applications

# How to clone, install and start application:
​
-To get a local copy up and running follow these simple example steps:
​
1. First step is to clone the repository:
​
git clone https://github.com/NaninSultan/number-guessing-game
​
2. Second step is to install NPM packages:
​
npm install
​
3. Third step is to start the project:
​
npm start