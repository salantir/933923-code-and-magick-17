'use strict';

var fireballSize = 22;
var wizardSpeed = 3;
var wizardWidth = 70;

var getFireballSpeed = function (left) {
  if (left) {
    return 5;
  }

  return 2;
};

// Вычесляем высоту мага
var getWizardHeight = function () {
  var proportionalHeight = 1.337 * wizardWidth;
  return proportionalHeight;
};

// Положение мага по горизонтали
var getWizardX = function (width) {
  var wizardX = width / 3 + wizardWidth / 2;
  return wizardX;
};

// Положение мага по вертикали
var getWizardY = function (height) {
  var wizardY = height * 2 / 60;
  return wizardY;
};
