const formatter = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
  
  
const slider1 = document.getElementById("range1");
const slider2 = document.getElementById("range2");
const slider3 = document.getElementById("range3");
const slider4 = document.getElementById("range4");
const result_e = document.getElementById("field_e");
const result_f = document.getElementById("field_f");
const result_g = document.getElementById("field_g");


var result , result2 , result3;

slider1.addEventListener("input", function () {
  
    result = slider1.value * slider2.value * 100;
    result2 = slider1.value * slider2.value * 10 * 0.60;

    result_e.textContent = formatter.format(result);
    result_f.textContent = formatter.format(result2);

  });
  
  slider2.addEventListener("input", function () {
  
    result = slider1.value * slider2.value * 100;
    result2 = slider1.value * slider2.value * 10 * 0.60;

    result_e.textContent = formatter.format(result);
    result_f.textContent = formatter.format(result2);

    setValue(slider2 , dialogBox1);
  });
  
  slider3.addEventListener("input", function () {

    result3 = 2 * slider3.value * slider4.value * 10;
    result_g.textContent = formatter.format(result3);
   
    setValue(slider3 , dialogBox2);
});

  
slider4.addEventListener("input", function () {

    result3 = 2 * slider3.value * slider4.value * 10;
    result_g.textContent = formatter.format(result3);

    setValue(slider4 , dialogBox3);
});

var newPosition;

function setValue(slider, dialogBox) {
  const newValue = Number(((slider.value - slider.min) * 100) / (slider.max - slider.min));
  if(window.innerWidth > 1100){
    newPosition = 35 - newValue * 0.08;

  }
  else if(window.innerWidth >975)
  {
    newPosition = 3 - newValue * -.56;

  }
  
  else if(window.innerWidth >875)
  {
    newPosition = -8.0 - newValue * -1.24;

  }
  else if(window.innerWidth >775)
  {
    newPosition = -20.0 - newValue * -1.5;

  }

  else if(window.innerWidth >710)
  {
    newPosition = -44.0 - newValue * -1.71;

  }
  
  else if(window.innerWidth >650)
  {
    newPosition = -28.0 - newValue * -2.12;

  }
  else if(window.innerWidth >585)
  {
    newPosition = -28.0 - newValue * -2.15;

  }

  else if(window.innerWidth >510)
  {
    newPosition = -39.0 - newValue * -2.35;

  }
  else if(window.innerWidth >405)
  {
  newPosition = -0.23 - newValue * -1.4;
  }
  else if(window.innerWidth > 360)
  {
    newPosition = -23.23 - newValue * -2.0;

  }

  else if(window.innerWidth > 315)
  {
    newPosition = -34.87 - newValue * -2.26;

  }

  else if(window.innerWidth > 275)
  {
    newPosition = -52.87 - newValue * -2.65;

  }
  
  else if(window.innerWidth > 250)
  {
    newPosition = -69.87 - newValue * -2.8;

  }
  else if (window.innerWidth < 250)
  {
    newPosition = -73.87 - newValue * -2.99;

  }
  dialogBox.innerHTML = `<span>${slider.value}</span>`;
  dialogBox.style.left = `calc(${newValue}% - ${newPosition}px)`;
}


setValue(slider2 , dialogBox1);
setValue(slider3 , dialogBox2);
setValue(slider4 , dialogBox3);



// Add an event listener to reposition tooltips on window resize
window.addEventListener('resize', function() {
    var tooltips = document.querySelectorAll('.tooltip-text');
    tooltips.forEach(function(tooltip) {
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translateX(-50%)';
    });
  });
  

