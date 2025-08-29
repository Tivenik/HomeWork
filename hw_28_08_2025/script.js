
function generatePassword (length = 8){
  let password = '';
  for (let i = 0; i <= length; i++){
    password += Math.floor(Math.random()*10)
  }
  return password;
}

console.log (generatePassword ());