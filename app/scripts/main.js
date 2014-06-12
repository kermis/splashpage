'use strict';

$(function() {

    if ($('#header').css('display') === 'none') {
        // $('#header').remove();

        console.log('pause');
        $('#video').get(0).pause();


    }

    var easter_egg = new Konami();
    easter_egg.code = replaceText;
    easter_egg.load();


});

function replaceText() {
    $('article.fish').html('<p>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong>Quack Quack Quack! Quack Quack! <strong>Quack Quack!</strong></p>')

    $('article.cars').html('<p>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong></p><p>Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong>Bumper cars! Bumper Cars! Bumper Cars! <strong>Bumper Cars!</strong></p>')

    $('article.fly').html('<p>Woosh woosh! Woosh woosh woosh <strong>Wheeee!</strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee!</strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong></p><p>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee! </strong>Woosh woosh! Woosh woosh woosh <strong>Wheeee!</strong></p>')

    $('article.shoot').html('<p>Pew pew pew pew pew <strong>Pew pew pew</strong> Pew pew pew pew pew <strong>Pew pew pew</strong>Pew pew pew pew pew <strong> Pew pew pew</strong>Pew pew pew pew pew <strong>Pew pew pew</strong> Pew pew pew pew pew <strong >Pew pew pew</strong>Pew pew pew pew pew <strong>Pew pew pew</strong>Pew pew pew pew pew <strong>Pew pew pew</strong></p><p>Pew pew pew pew pew <strong>Pew pew pew</strong> Pew pew pew pew pew <strong>Pew pew pew</strong></p>')

    $('article.basket').html('<p>Boing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong>B oing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong></p><p><strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong> Boing Boing Boing boing Boing <strong>Boing</strong></p>')

    $('article.photo').html("<p>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong></p><p>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong>Selfie selfie Selfie Selfie <strong>Selfie </strong></p>")

    $('article.about').html("<p>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong></p><p>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong></p><p>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong> Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong></p><p>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong>Kerm.is kerm.is Kerm.is Kerm.is <strong>Kerm.is </strong></p>")

    // $('.game-pic').addClass('rotation');
    // $('#video').addClass('rotation');
    // $('.logo').addClass('rotation');
    // $('#navigation').addClass('rotation');
    // $('a.btn').addClass('rotation');
    // $('.tech').addClass('rotation');
    $('article p').addClass('flash');
}


/*
 * Konami-JS ~
 * :: Now with support for touch events and multiple instances for
 * :: those situations that call for multiple easter eggs!
 * Code: http://konami-js.googlecode.com/
 * Examples: http://www.snaptortoise.com/konami-js
 * Copyright (c) 2009 George Mandis (georgemandis.com, snaptortoise.com)
 * Version: 1.4.2 (9/2/2013)
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 * Tested in: Safari 4+, Google Chrome 4+, Firefox 3+, IE7+, Mobile Safari 2.2.1 and Dolphin Browser
 */

var Konami = function(callback) {
    var konami = {
        addEvent: function(obj, type, fn, ref_obj) {
            if (obj.addEventListener)
                obj.addEventListener(type, fn, false);
            else if (obj.attachEvent) {
                // IE
                obj["e" + type + fn] = fn;
                obj[type + fn] = function() {
                    obj["e" + type + fn](window.event, ref_obj);
                }
                obj.attachEvent("on" + type, obj[type + fn]);
            }
        },
        input: "",
        pattern: "38384040373937396665",
        load: function(link) {
            this.addEvent(document, "keydown", function(e, ref_obj) {
                if (ref_obj) konami = ref_obj; // IE
                konami.input += e ? e.keyCode : event.keyCode;
                if (konami.input.length > konami.pattern.length)
                    konami.input = konami.input.substr((konami.input.length - konami.pattern.length));
                if (konami.input == konami.pattern) {
                    konami.code(link);
                    konami.input = "";
                    e.preventDefault();
                    return false;
                }
            }, this);
            this.iphone.load(link);
        },
        code: function(link) {
            window.location = link
        },
        iphone: {
            start_x: 0,
            start_y: 0,
            stop_x: 0,
            stop_y: 0,
            tap: false,
            capture: false,
            orig_keys: "",
            keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
            code: function(link) {
                konami.code(link);
            },
            load: function(link) {
                this.orig_keys = this.keys;
                konami.addEvent(document, "touchmove", function(e) {
                    if (e.touches.length == 1 && konami.iphone.capture == true) {
                        var touch = e.touches[0];
                        konami.iphone.stop_x = touch.pageX;
                        konami.iphone.stop_y = touch.pageY;
                        konami.iphone.tap = false;
                        konami.iphone.capture = false;
                        konami.iphone.check_direction();
                    }
                });
                konami.addEvent(document, "touchend", function(evt) {
                    if (konami.iphone.tap == true) konami.iphone.check_direction(link);
                }, false);
                konami.addEvent(document, "touchstart", function(evt) {
                    konami.iphone.start_x = evt.changedTouches[0].pageX;
                    konami.iphone.start_y = evt.changedTouches[0].pageY;
                    konami.iphone.tap = true;
                    konami.iphone.capture = true;
                });
            },
            check_direction: function(link) {
                x_magnitude = Math.abs(this.start_x - this.stop_x);
                y_magnitude = Math.abs(this.start_y - this.stop_y);
                x = ((this.start_x - this.stop_x) < 0) ? "RIGHT" : "LEFT";
                y = ((this.start_y - this.stop_y) < 0) ? "DOWN" : "UP";
                result = (x_magnitude > y_magnitude) ? x : y;
                result = (this.tap == true) ? "TAP" : result;

                if (result == this.keys[0]) this.keys = this.keys.slice(1, this.keys.length);
                if (this.keys.length == 0) {
                    this.keys = this.orig_keys;
                    this.code(link);
                }
            }
        }
    }

    typeof callback === "string" && konami.load(callback);
    if (typeof callback === "function") {
        konami.code = callback;
        konami.load();
    }

    return konami;
};
