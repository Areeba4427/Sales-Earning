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

    console.log(slider1.value);
  });
  
  slider2.addEventListener("input", function () {
  
    result = slider1.value * slider2.value * 100;
    result2 = slider1.value * slider2.value * 10 * 0.60;

    result_e.textContent = formatter.format(result);
    result_f.textContent = formatter.format(result2);

    console.log(slider2.value);

  });
  
  slider3.addEventListener("input", function () {

    result3 = 2 * slider3.value * slider4.value * 10;
    result_g.textContent = formatter.format(result3);
   
    console.log(slider3.value);
});

  
slider4.addEventListener("input", function () {

    result3 = 2 * slider3.value * slider4.value * 10;
    result_g.textContent = formatter.format(result3);

    console.log(slider4.value);

});