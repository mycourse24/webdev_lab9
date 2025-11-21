function init(){
  var button = document.getElementById('entrybutton');

  function TextResult(){
    var textbox = document.getElementById('entryinput');
	textbox.style.backgroundColor = 'gray';
	var color = document.getElementById('entrybutton');
	color.style.backgroundColor = 'green';
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Alfie: " + textbox.value);
  }

  button.addEventListener('click', TextResult);
  }
  
window.addEventListener('load', init);
