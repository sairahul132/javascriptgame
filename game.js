function guessNumber()
{
    var inputValue = document.getElementById("guess").value

    var randomValue = Math.floor(Math.random(0.1*100)+1);

if (inputValue===randomValue) {

document.getElementById("message").textContent = "Your Guess is right";
randomValue++
} 
else if(inputValue>randomValue)
{
    document.getElementById("message").textContent = "Your Guess is higher";
    randomValue++
}
else    
{
    document.getElementById("message").textContent = "Your Guess is lower";
    randomValue++
}   
randomValue++
}

