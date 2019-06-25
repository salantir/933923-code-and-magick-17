'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireballSpeed = function(left) {
  if (left) {
    return 5;
  }

  return 2;
};

// Вычесляем высоту мага
var getWizardHeight = function() {
  var proportionalHeight = 1.337 * wizardWidth;
  return proportionalHeight;
};

// Задаем ширину игровой области
var getWizardX = function(width) {
  var wizardX = width / 2 + wizardWidth / 2;
return wizardX;
};
getWizardX(100);

//Задаем высоту игровой области
var getWizardY = function(height) {
  var wizardY = height * 2 / 3;
return wizardY;
};
getWizardY(60);
