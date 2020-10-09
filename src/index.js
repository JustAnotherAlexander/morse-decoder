const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {

    expr=expr.split('');
    let result =[];
    let dots_and_dashes = [];

    while (expr.length>0) {
    result.push(expr.splice(0,10));
    }
    console.log('morse code: '+ result);
    console.log('result[0]: '+result[0]);
    for (let j=0; j<result.length; j++) {
        for (let i=0; i<10; i+2) {
            dots_and_dashes.push(result[j].splice(i,2));
        }
        for (let k=0; k<10; k++) {
            if ((dots_and_dashes[k][0]==1 && dots_and_dashes[k][1]==1)){
                dots_and_dashes.splice(0,2,'-');
            } else if ((dots_and_dashes[k][0]==1 && dots_and_dashes[k][1]==0)) {
                dots_and_dashes.splice(0,2,'.');
              } else if ((dots_and_dashes[k][0]==0 && dots_and_dashes[k][1]==0)) {
                dots_and_dashes.splice(k,1);
            }
        }
        result[j]=dots_and_dashes.join('');
    }
    
    console.log(result);
}


module.exports = {
    decode
}