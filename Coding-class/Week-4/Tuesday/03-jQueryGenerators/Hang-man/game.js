$(document).ready(function () {
    console.log("hello");
    var words = ['cat', 'dog', 'rabbit'];
    var randomWord = '';
    var displayString = '';


    function start() {
        // pick a random word
        randomWord = words[Math.floor(Math.random() * words.length)];


        for (var i = 0; i < randomWord.length; i++) {
            displayString += '_ ';
        }
        console.log(displayString);
        $('#randomWord').text(displayString);
    };
    start();


    $(document).keyup(function (event) {
        console.log(event.key);
        if (randomWord.indexOf(event.key) > -1) {
            var index = randomWord.indexOf(event.key)
            console.log(index);
            var currentString = $('#randomWord').html().split(' ').join('');
            // currentString[index] = event.key;
            var newString = ''
            for (var i = 0; i < currentString.length; i++) {
                console.log("we are in the loop");
                if (i === index) {
                    newString += event.key + ' '
                } else {
                    newString += '_ '
                }
            }

            console.log('new string!!', newString);
            $('#randomWord').empty();
            $('#randomWord').text(newString);
            console.log(currentString, "current");
        }
    })



});