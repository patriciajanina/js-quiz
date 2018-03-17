document.addEventListener('DOMContentLoaded', function () {

    function SimpleClass(questions) {
        this.question = questions;
        this.counter = 0;
    }

    //on click adding to counter +1
    //if there is no more questions go to question 1
    var progress = document.querySelector('#progress');
    SimpleClass.prototype.counterMethod = function () {
        this.counter++;
        progress.innerHTML = 'Question ' + this.counter + ' of ' + this.question.length;
        if (this.counter >= this.question.length) {
            this.counter = 0;
        }
    };
    //display on website question and question's options
    SimpleClass.prototype.instanceMethod = function () {
        var array = this.question[this.counter].ques;
        var ask = document.querySelector('#question');
        //display question in html
        ask.innerHTML = this.question[this.counter].term;
        for (var i = 0; i < array.length; i++) {
            var choice = document.querySelector('#choice' + i);
            choice.innerHTML = this.question[this.counter].ques[i];
        }
    };
    //choose option and check is if correct
    //add event Listener on click and show value of selected element

    var opinion = document.querySelector('.quiz-answer');
    var explanation = document.querySelector('.explain');
    //check is choosen option is equal to answer
    SimpleClass.prototype.choosingOption = function () {
        var rightAnswer = this.question[this.counter].answer;
        var explain = this.question[this.counter].explanation;
        var btn = document.querySelectorAll('.btn');
        //looping trough all buttons
        for (var i = 0; i < btn.length; i++) {
            //adding on click to buttons
            btn[i].addEventListener('click', function () {
                //if clicked option is equal answer return
                if (this.firstChild.innerHTML == rightAnswer) {
                    opinion.innerHTML = 'Yes!';
                    return explanation.innerHTML = explain;
                    //if is not return
                } else {
                    explanation.innerHTML = ' ';
                    return opinion.innerHTML = 'Nope...'
                }
            });
        }
    };

    //build a Question object
    function Question(term, quess, answer, explanation) {
        this.term = term;
        this.ques = quess;
        this.answer = answer;
        this.explanation = explanation;
    }

    //my questions array with new objects containing four attributes
    //new Question('', ['', '','' , ''], '', ''),
    var questions = [
        new Question('What is Object in JavaScript?', ['collection of properties', 'java script book', 'programming language', 'blog build with JavaScript'], 'collection of properties', 'The JavaScript object is a collection of properties and the each property associated with the name-value pairs. The object can contain any data types (numbers, arrays, object etc.)'),
        new Question('What is ‘this’ in JavaScript?', ['refers to the object which owns the method', 'eference to the current object instantiated', 'can be set by assignment during execution', 'a current window'], 'refers to the object which owns the method', 'In most cases, the value of this is determined by how a function is called. It can\'t be set by assignment during execution, and it may be different each time the function is called.'),
        new Question('What is difference between call and apply?', ['only call is using to call a functions', 'You can use apply if you know how many argument are going to pass to the functions', 'The .apply() method is little bit faster than .call() method', 'Both (call and apply) are using to call a functions'], 'Both (call and apply) are using to call a functions', 'CALL-Call a function with the specified arguments. You can use call, if you know how many argument are going to pass to the functions. APPLY-Call a function with argument provided as an array. You can use apply if you don\'t know how many argument are going to pass to the functions. Both (call and apply) are using to call a functions.\n' +
            '\n' +
            'Here is an advantage over apply and call. The .call() method is little bit faster than .apply() method.'),
        new Question('difference between == and === in JavaScript', ['“==” checks only type', '“==” and "=" it\'s the same', '“===” checks only type', '“===” check value and type'], '“===” check value and type', 'The double equals (==) are used for check only value of its variables but triple equals (===) are used for check value and type as well of its variables.'),
        new Question('Explain why Asynchronous code is important in JavaScript?', ['The response and data come from the parent\'s call-back method.', 'You can\'t define a global variable for call-back method', 'we are not able to execute multiple things', 'The response and data don\'t come from the parent\'s call-back method'], 'The response and data come from the parent\'s call-back method.', 'Using Asynchronous code, we are able to execute multiple things/JavaScript call at the same-time without locking the DOM or main thread.\n' +
            'You can define a global variable for call-back method.\n' +
            'You can use call-back method because JavaScript is lexical scoped and can\'t define a variable in the call-back methods.\n' +
            'The response and data come from the parent\'s call-back method.\n' +
            'etc..'),
        new Question('Name two ways to change the context of a JavaScript method', ['setters ang getters', 'none of them', 'constructors and functions', 'the call or apply methods'], 'the call or apply methods', 'Functions are one of the fundamental building blocks in JavaScript. A function is a JavaScript procedure—a set of statements that performs a task or calculates a value. To use a function, you must define it somewhere in the scope from which you wish to call it.'),
        new Question('Can a JavaScript constructor return a primitive value (e.g. a number or a string)?', ['yes', 'no', 'can return only string', 'can return only number'], 'no', 'The second piece of magic eluded to above is the ability for a constructor to return a specific, possibly pre-existing object, rather than a reference to a new instance. This would allow you to manage the number of actual instances yourself if needed; possibly for reasons of limited resources or whatnot.'),
        new Question('In JavaScript, are objects passed by reference or by value?', ['reference and value', 'by reference', 'by value', 'none of them'], 'by reference', 'In JavaScript, all objects are passed by reference. When you make a change to a reference to an object, you change the actual object. Primitive types are however, passed by value.'),
        new Question('What is the name of the property that allows you to add properties and methods to an object?', ['inherit', 'function', 'constructor', '`prototype`'], '`prototype`', 'JavaScript’s prototype object generates confusion wherever it goes. Seasoned JavaScript professionals, even authors frequently exhibit a limited understanding of the concept.'),
        new Question('If a string is a primitive value, why does it have a split() method?', ['Because any string has a wrapper object that provides numerous methods for that type.', 'because JavaScript values enjoy the “first-class” nature of objects', 'they have wrapper objects that constantly “wrap” the primitive value ', 'Functions as a matter of fact, inherit from Object'], 'Because any string has a wrapper object that provides numerous methods for that type.', 'Although primitive JavaScript values do not enjoy the “first-class” nature of objects, they have wrapper objects that temporarily “wrap” the primitive value and provide various methods. Moreover, once a primitive wrapper’s method has finished executing, that primitive value is un-wrapped and returned to its normal primitive state.'),


    ];
    //new object - passing my question
    var simple = new SimpleClass(questions);
    //on click event with new object methods
    var check = document.querySelector('.check');
    check.addEventListener('click', function (e) {
        simple.counterMethod();
        simple.instanceMethod();
        simple.choosingOption();
        opinion.innerHTML = '';
        explanation.innerHTML = '';
        e.preventDefault()
    });
    simple.instanceMethod();
    simple.choosingOption();
    simple.counterMethod();
});