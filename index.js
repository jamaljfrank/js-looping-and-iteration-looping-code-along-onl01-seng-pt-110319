

function writeCards(names, occasion) {
  let i = 0;
  while (i < names.length) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    i++;
  }

  return names;
}

writeCards(names, occasion);





