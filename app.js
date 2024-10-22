let button  = document.getElementById('buton');

let buttonOne  = document.getElementById('buton-1');

let buttonTwo  = document.getElementById('buton-2');

let buttonThree  = document.getElementById('buton-3');

let buttonfour  = document.getElementById('buton-4');

let div = document.getElementById('div-1');





button.addEventListener('click', eventButon);

buttonOne.addEventListener('click', eventButonOne);

buttonTwo.addEventListener('click', eventButonTwo);

buttonThree.addEventListener('click', eventButonThree);

buttonfour.addEventListener('click', eventButonFour);

div.addEventListener('mouseover', evetDiv);

div.addEventListener('mouseout', mouseOut);



function eventButon(){
    button.style.backgroundColor = 'red';
    button.style.border = 'none';

    
}


function eventButonOne(){
    buttonOne.innerHTML = 'I have Been Clicked';
}


function eventButonTwo(){
//Create a new parent element
   let img = document.createElement('img');

   img.src = 'image/cloud.jpg';
   img.alt = 'image';

  //replace the button with the image

  buttonTwo.parentNode.replaceChild(img, buttonTwo );

}



function eventButonThree(){

    //create a p tag element

    let pTag = document.createElement('pTag');

    pTag.innerHTML = '<p>Hello Everyone</p>';

    buttonThree.parentNode.replaceChild(pTag, buttonThree);

    
}


function eventButonFour(){
// remove the first p tag
    const firstParagraph = document.querySelector('pTag');
   
    if(firstParagraph){
        firstParagraph.remove();
    }
      
}


function evetDiv(){

    div.style.backgroundColor = 'blue';
}


function mouseOut(){
    div.style.backgroundColor = 'red';
}



let buttonfive  = document.getElementById('buton-5');

let userInput = document.getElementById('input-1');

let container = document.getElementById('container');

buttonfive.addEventListener('click', inputEvent);



function inputEvent(){ 
      
    // Create a new p element

    const newParagraph = document.createElement('p');

    //set the p's text content to the input

    newParagraph.textContent = userInput.value;

    //Append the p to the container div

    container.appendChild(newParagraph);

    //clear the input field

    userInput.value = '';
      
}

