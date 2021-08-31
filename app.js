document.querySelector('TextArea').addEventListener('input', function (event) {

    let Text = event.target.value.toString();

    document.getElementById('Characters').innerHTML = "Characters= " + Text.length
    
    document.getElementById('Words').innerHTML = "Words= " + Text.match( /(\w+)/g ).length

});