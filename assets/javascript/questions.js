var questions = [
    {
        question: 'What will <code>typeof null</code> return?',
        answers: ['\'object\'', '\'null\'', '\'undefined\'', '\'number\''],
        solution: '\'object\'', //0,
        explanation: 'In the first implementation of JavaScript, JavaScript values were represented as a type tag and a value. The type tag for objects was 0. null was represented as the NULL pointer (0x00 in most platforms). Consequently, null had 0 as type tag, hence the bogus typeof return value.',
    },
    {
        question: 'Which Array method changes the Array itself?',
        answers: ['Array.prototype.splice()', 'Array.prototype.slice()'],
        solution: 'Array.prototype.splice()',
        explanation: 'The splice() method changes the contents of an array by removing existing elements and/or adding new elements.',
    },
    {
        question: 'Which operator is the only JavaScript operator that takes three operands?',
        answers: ['The conditional (ternary) operator', 'The assignment operator', 'Logical OR (||)', ],
        solution: 'The conditional (ternary) operator',
        explanation: 'The conditional (ternary) operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.',

    },
    {
        question: 'What does the acronym ECMA in ECMAScript stand for?',
        answers: [
            'European Computer Manufacturers Association',
            'Electronic Computer Manufacturers Association',
            'Elitist Cheese Manufacturers Association',
        ],
        solution: 'European Computer Manufacturers Association',
        explanation: 'Ecma International is an international private (membership-based) non-profit standards organization for information and communication systems. It acquired its current name in 1994, when the European Computer Manufacturers Association (ECMA) changed its name to reflect the organization\'s global reach and activities.',

    },
    {
        question: 'Who is the creator of the JavaScript programming language?',
        answers: [
            'Brendan Eich',
            'Tim Berners-Lee',
            'Dennis Ritchie',
            'Steve Wozniak'
        ],
        solution: 'Brendan Eich',
        explanation: 'Brendan Eich is an American technologist and creator of the JavaScript programming language. He co-founded the Mozilla project, the Mozilla Foundation and the Mozilla Corporation, and served as the Mozilla Corporation\'s chief technical officer and briefly its chief executive officer.',

    },
    {
        question: 'When was JavaScript released for the first time?',
        answers: [
            '1995',
            '1994',
            '1996',
            '1999'
        ],
        solution: '1995',
        explanation: 'Although it was developed under the name Mocha, the language was officially called LiveScript when it first shipped in beta releases of Netscape Navigator 2.0 in September 1995, but it was renamed JavaScript when it was deployed in the Netscape Navigator 2.0 beta 3 in December.',

    },
    {
        question: 'What differentiates Array.prototype.forEach() from Array.prototype.map()?',
        answers: [
            'It returns undefined',
            'Can also be used for objects',
            'The callback function is invoked with the current index',
        ],
        solution: 'It returns undefined',
        explanation: 'Whereas Array.prototype.map() returns an array consisting of the values returned by the callback function Array.prototype.forEach() always returns undefined.',

    },
    {
        question: 'What will <code>parseInt(\'abc123\')</code> return?',
        answers: ['NaN', '123', '1', 'Throws an error'],
        solution: 'NaN',
        explanation: 'An integer number parsed from the given string. If the first character cannot be converted to a number, NaN is returned.',

    },
    {
        question: 'What is the result of computing <code>35 / Infinity</code>?',
        answers: ['0', 'NaN', 'Infinity', 'Throws an error'],
        solution: '0',

    },
    {
        question: 'What was the original name of JavaScript?',
        answers: ['Mocha', 'Java', 'LiveScript', 'ECMAScript'],
        solution: 'Mocha',
        explanation: 'JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape.',

    },
    {
        question: 'What does the term AJAX stand for?',
        answers: ['Asynchronous JavaScript and XML', 'Asynchronous JavaScript Attax', 'Accessible Javascript and XML'],
        solution: 'Asynchronous JavaScript and XML',
        explanation: 'The name is shorthand for Asynchronous JavaScript + XML, and it represents a fundamental shift in what’s possible on the Web.',
    },
    {
        question: 'Which technology is one of the cornerstones of AJAX?',
        answers: ['XMLHttpRequest', 'Web Storage API', 'Cryptography', 'FTP'],
        solution: 'XMLHttpRequest',
        explanation: 'XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. XMLHttpRequest is used heavily in AJAX programming.',

    },
    {
        question: 'What differentiates <code>let</code> from <code>var</code>?',
        answers: ['let supports block scope', 'var can only be assigned once', 'Variables declared with var are always global'],
        solution: 'let supports block scope',
        explanation: 'The let statement declares a block scope local variable, optionally initializing it to a value.',

    },
    {
        question: 'What will the following piece of JavaScript return? <code>[1, 2, 3].splice(2)</code>',
        answers: ['[3]', '[1, 2]', 'undefined', '[1]'],
        solution: '[3]',
        explanation: 'Return value: An array containing the deleted elements.',

    },
    {
        question: 'What will the following piece of JavaScript return? <code>[1, null, 3].join()</code>',
        answers: ['\'13\'', '\'1null3\'', '\'103\'', 'Throws an error'],
        solution: '\'13\'',
        explanation: 'The string conversions of all array elements are joined into one string. If an element is undefined or null, it is converted to the empty string.',

    },
    {
        question: 'What will the following piece of JavaScript return? <code>[1, 2, 3].indexOf(1, 2)</code>',
        answers: ['-1', '0', '1', 'Throws an error'],
        solution: '-1',
        explanation: 'The second parameter, fromIndex, specifies the index to start the search at. If the index is greater than or equal to the array\'s length, -1 is returned, which means the array will not be searched.',

    },
    {
        question: 'What will the following piece of JavaScript return? <code>[1, 2, 3].every(n => n !== null)</code>',
        answers: ['true', 'false', '[1, 2, 3]', 'Throws an error'],
        solution: 'true',
        explanation: 'The every() method tests whether all elements in the array pass the test implemented by the provided function.',

    },
    {
        question: 'What will the following piece of JavaScript return? <code>[1, \'a\'].filter(elem => typeof elem !== \'number\')</code>',
        answers: ['[\'a\']', '[1]', '[]', '[1, \'a\']'],
        solution: '[\'a\']',
        explanation: 'The filter() method creates a new array with all elements that pass the test implemented by the provided function.',
    },
    {
        question: 'What will the following piece of JavaScript return? <code>Array.from(\'abc\')</code>',
        answers: ['[\'a\', \'b\', \'c\']', '[\'abc\']', '[]', '\'abc\''],
        solution: '[\'a\', \'b\', \'c\']',
        explanation: 'The Array.from() method creates a new Array instance from an array-like or iterable object.',
    },
];
