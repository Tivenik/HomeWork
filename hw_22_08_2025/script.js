//Напишите ф-цию, запрашивающую имя, фамилия, отчество и номергруппы студента и выводящую введённые данные

function studentСard () {   
   let str1 = prompt ('название домашней рабоыт'),
       str2 = prompt ('название группы'),
       str3 = prompt ('ФИО студента');

   let line1 = `домашняя работa: "${str1}"`;
   let line2 = `Выполнил: студент гр. ${str2}`;
   let line3 = str3;

   let lengthMax = Math.max (line1.length, line2.length, line3.length);
   console.log(lengthMax);

   console.log("*".repeat(lengthMax + 4));
   console.log("* " + line1.padEnd(lengthMax)+ " *");
   console.log("* " + line2.padEnd(lengthMax)+ " *");
   console.log("* " + line3.padEnd(lengthMax)+ " *");
   console.log("*".repeat(lengthMax + 4));
}

console.log(studentСard())



//Напишите ф-цию, которая должна проверить правильность ввода адресаэл. почты, неиспользуя регулярные выражения. Почта верна при условии

function amailCheck(email) {
  const allowedSpecials = ['@', '.', '-', '_'];
  const forbiddenSymbols = [' ', ',', ';', ':', '!', '?', '#', '$', '%', '^', '&', '*', '(', ')', '=', '+', '/', '\\', '[', ']', '{', '}', '"', "'", '`', '~', '<', '>', '|'];

  let atCount = 0;
  for (let char of email) {
    if (char === '@') atCount++;
  }
  if (atCount !== 1) return false;

  const parts = email.split('@');
  const [local, domain] = parts;

  if (local.length < 3) return false;

  for (let char of email) {
    const code = char.charCodeAt(0);
    if (
      (code >= 1040 && code <= 1103) || code === 1025 || code === 1105) {
      return false;
    }
  }

  const allowedChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@._-';
  for (let char of email) {
    if (!allowedChars.includes(char) || forbiddenSymbols.includes(char)) {
      return false;
    }
  }

  const invalidCombos = ['..', '--', '__', '@@', '.@', '@.', '_@', '@-', '-@','.-', '-.', '._', '_.'];
  for (let combo of invalidCombos) {
    if (email.includes(combo)) return false;
  }

  const firstChar = email[0];
  const lastChar = email[email.length - 1];
  if (allowedSpecials.includes(firstChar) || allowedSpecials.includes(lastChar)) {
    return false;
  }

  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;

  const topLevelDomain = domainParts[domainParts.length - 1];
  if (topLevelDomain.length < 2 || topLevelDomain.length > 11) return false;

  return true;
}

console.log(amailCheck(prompt('mail')));