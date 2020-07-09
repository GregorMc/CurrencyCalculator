"use strict";
/*globals CurrencyView, CurrencyModel */

var CurrencyView = new CurrencyView(),
    CurrencyModel = new CurrencyModel(),
    currencyController = null;

function CurrencyController() {

     this.updateDisplay = function () {
         CurrencyView.updateDisplay(CurrencyModel.getCurrentNumber());
     };

    this.init = function() {
        CurrencyView.setSevenClickCallBack( function () {
            CurrencyModel.addNumberToValue(7);
            currencyController.updateDisplay();
        });

        CurrencyView.setEightClickCallBack( function () {
            CurrencyModel.addNumberToValue(8);
            currencyController.updateDisplay();
        });

        CurrencyView.setNineClickCallBack( function () {
            CurrencyModel.addNumberToValue(9);
            currencyController.updateDisplay();
        });

        CurrencyView.setFourClickCallBack( function () {
            CurrencyModel.addNumberToValue(4);
            currencyController.updateDisplay();
        });

        CurrencyView.setFiveClickCallBack( function () {
            CurrencyModel.addNumberToValue(5);
            currencyController.updateDisplay();
        });

        CurrencyView.setSixClickCallBack( function () {
            CurrencyModel.addNumberToValue(6);
            currencyController.updateDisplay();
        });

        CurrencyView.setOneClickCallBack( function () {
            CurrencyModel.addNumberToValue(1);
            currencyController.updateDisplay();
        });

        CurrencyView.setTwoClickCallBack( function () {
            CurrencyModel.addNumberToValue(2);
            currencyController.updateDisplay();
        });

        CurrencyView.setThreeClickCallBack( function () {
            CurrencyModel.addNumberToValue(3);
            currencyController.updateDisplay();
        });

        CurrencyView.setZeroClickCallBack( function () {
            CurrencyModel.addNumberToValue(0);
            currencyController.updateDisplay();
        });


        CurrencyView.setClearClickCallBack( function () {
            CurrencyModel.getClear();
            currencyController.updateDisplay();
        });

        CurrencyView.setEqualsClickCallBack( function () {
            CurrencyModel.getConverted();
            currencyController.updateDisplay();
        });




        CurrencyView.setSelectHomeCallBack(function() {
            CurrencyModel.setHomeValue( document.getElementById("homeSelectedCurrency").value);
        });

        CurrencyView.setSelectDestinationCallBack(function() {
            CurrencyModel.setDestinationValue( document.getElementById("destinationSelectedCurrency").value);
        });




        CurrencyModel.updateValue(document.getElementById("textBox").value);
        currencyController.updateDisplay();




    };


}

currencyController = new CurrencyController();
window.addEventListener("load", currencyController.init );