/*
Problem
  - input  => string containing 1 or more tokens seperated by spaces
  - output => no output unless command is given to print (the register value)

  - Given a string of 1 or more space seperated tokens,
  - for each command do one of the following
    - place value into the register
    - push value from register into the stack
    - pop value from stack and place in register
    - operate on popped value from stack and place in register
    - print register value
    - Assume all tokens are valid
    - default values for stack and register are [] and 0
Data Structure
  - array representing the stack
  - number representing the register
  - array representing the commands
Algorithm
  - given a string 'tokens'
  - set stack to an empty array
  - set register to 0
  - split tokens into an array of space seperated strings
  - loop over the array, for each token
    - if token is print => print the register
    - if token if push => push the register onto the stack
    - if token is pop => pop a value from the stack and place in the register
    - if token is an operation => operate on a pop'd value and place into register
    - else => coerce token into a number and place it into register
      
*/

function minilang(tokens) {
  let stack = [];
  let register = 0;

  tokens.split(' ').forEach(token => {
    switch (token) {
      case 'PRINT': 
        console.log(register);
        break;
      case 'PUSH': 
        stack.push(register);
        break;    
      case 'POP': 
        register = stack.pop();
        break;
      case 'ADD': 
        register = stack.pop() + register;
        break;
      case 'SUB': 
        register = register - stack.pop();
        break;
      case 'MULT': 
        register = stack.pop() * register;
        break;
      case 'DIV': 
        register = Math.floor(register / stack.pop());
        break;          
      case 'MOD': 
        register = Math.floor(register % stack.pop());
        break; 
      default:
        register = Number(token);   
    }
  })
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
/*
*/