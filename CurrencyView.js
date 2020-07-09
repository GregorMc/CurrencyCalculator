"use strict";

function CurrencyView () {
    var sevenButton = document.getElementById("sevenButton");
    var eightButton = document.getElementById("eightButton");
    var nineButton = document.getElementById("nineButton");

    var fourButton = document.getElementById("fourButton");
    var fiveButton = document.getElementById("fiveButton");
    var sixButton = document.getElementById("sixButton");

    var oneButton = document.getElementById("oneButton");
    var twoButton = document.getElementById("twoButton");
    var threeButton = document.getElementById("threeButton");

    var clearButton = document.getElementById("clearButton");
    var zeroButton = document.getElementById("zeroButton");
    var equalsButton = document.getElementById("equalsButton");

    var destination = document.getElementById("equalsButton");

    var output = document.getElementById("output");


    var selectHome = document.getElementById("homeSelectedCurrency");
    var selectDestination = document.getElementById("destinationSelectedCurrency");




    this.setSevenClickCallBack = function(callBack) {
        sevenButton.addEventListener("click", callBack);
    };

    this.setEightClickCallBack = function(callBack) {
        eightButton.addEventListener("click", callBack);
    };

    this.setNineClickCallBack = function(callBack) {
        nineButton.addEventListener("click", callBack);
    };

    this.setFourClickCallBack = function(callBack) {
        fourButton.addEventListener("click", callBack);
    };

    this.setFiveClickCallBack = function(callBack) {
        fiveButton.addEventListener("click", callBack);
    };

    this.setSixClickCallBack = function(callBack) {
        sixButton.addEventListener("click", callBack);
    };

    this.setOneClickCallBack = function(callBack) {
        oneButton.addEventListener("click", callBack);
    };

    this.setTwoClickCallBack = function(callBack) {
        twoButton.addEventListener("click", callBack);
    };

    this.setThreeClickCallBack = function(callBack) {
        threeButton.addEventListener("click", callBack);
    };

    this.setZeroClickCallBack = function(callBack) {
        zeroButton.addEventListener("click", callBack);
    };

    this.setClearClickCallBack = function(callBack) {
        clearButton.addEventListener("click", callBack);
    };

    this.setEqualsClickCallBack = function(callBack) {
        equalsButton.addEventListener("click", callBack);
    };




    this.setSelectHomeCallBack = function (callBack) {
        selectHome.addEventListener("change", callBack);
    };

    this.setSelectDestinationCallBack = function (callBack) {
        selectDestination.addEventListener("change", callBack);
    };




    this.updateDisplay = function(number) {
        output.value=number;
    };

    this.updateValue = function(number) {
        output.value=number;
    };



}