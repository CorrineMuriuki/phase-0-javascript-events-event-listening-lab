function addingEventListener() {
    //set a variable to refer to a specific ID button
const button = document.getElementById('button');

//Once we have the button we pass the function, i passed an anonymous function
button.addEventListener('click', function() {
console.log('click');
});
}
