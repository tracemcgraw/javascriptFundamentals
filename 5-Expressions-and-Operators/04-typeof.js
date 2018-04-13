var name = true;

if(typeof name === 'number'){
    console.log('All the numbers!!!');
} else if(typeof name === 'boolean'){
    console.log('Oooohh true or false!?');
} else if(typeof name === 'string'){
    console.log('Now thats some words!!');
} else{
    console.log('What the hell are you doing?');
}