
function toCelcius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

  function toKelvin(kelvin) {
    return (kelvin-32) * 5/9 + 273.15;
  }

function display() {
    let firstValue = document.getElementById("temp1").value;

    document.getElementById("displayCel").innerHTML = toCelcius(0).toFixed(2) + " Degrees Celcius";
    document.getElementById("displayKel").innerHTML = toKelvin(0).toFixed(2) + " Kelvin";
}
