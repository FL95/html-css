/*The variable statement "var" declares
* a variable in the script.
* Syntax: var variable-name*/
var username;
/*Below a value is assigned to the "username
* variable.
*
* The value is the prompt method,
* which is similar to the alert method
* but instead prompts the user with a
* popup dialog box asking for input,
* with OK and Cancel buttons.
*
* Syntax: variable = value*/
username = prompt ("What's your name?");
/*The above prompt method reads in the
* user input into the variable "username"
* which is used in the below alert method.
*
* Here in order to concatenate the word
* "Hello" and the variable in a readable
* manner, a space is used at the end of
* "Hello" and a plus sign is used for the concatenation of the "username" variable.
*
* Without the space the message would appear:
* "Hello,username" instead of "Hello, username"
* Syntax: (string + variable/string)*/
alert ("Hello, " + username);