"use strict";

function CurrencyModel() {

    var value = '';
    // var home = document.getElementById('homeSelectedCurrency').value;
    // var destination = document.getElementById('destinationSelectedCurrency').value;
    var rate;
    var hrate;
    var home = "EUR"
    var destination = "GBP"


    this.addNumberToValue = function (number) {
        value= value + number;
    };

    this.getClear = function() {
        value = '';
    }

    // this.setHomeValue = function (v) {
    //     home=v;
    // }
    //
    // this.setDestinationValue = function (d) {
    //     destination=d;
    // }

    this.setHome = function () {
        if (home == "EUR") {
            hrate = 1;
        } else if (home == "USD" ) {
            hrate = 1.14;
        } else if (home == "JPY" ) {
            hrate = 125.59;
        } else if (home == "GBP" ) {
            hrate = 0.88;
        }
        return hrate;
    }

    this.setDestination = function () {
        if ( destination == "EUR" ) {
            rate = 1;
        } else if (destination == "USD" ) {
            rate = 1.14;
        } else if (destination == "JPY" ) {
            rate = 125.59;
        } else if (destination == "GBP" ) {
            rate = 0.88;
        }

    }

    this.getConverted = function() {
        this.setHome();
        value = value / hrate;
        this.setDestination();
        value = value * rate;
        console.log(value);
        return value;
    }


    this.getCurrentNumber = function() {
        return value;
    }



}