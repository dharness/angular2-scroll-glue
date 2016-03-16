"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
var core_1 = require('angular2/core');
require('zone.js');
require('reflect-metadata');
var ScrollGlue = (function () {
    function ScrollGlue(_el) {
        this._el = _el;
        this.isLocked = false;
        this._oldScrollHeight = 0;
        this.el = _el.nativeElement;
    }
    ScrollGlue.prototype.onScroll = function () {
        var percent = (this.el.scrollHeight / 100);
        if (this.el.scrollHeight - this.el.scrollTop > (10 * percent)) {
            this.isLocked = true;
        }
        else {
            this.isLocked = false;
        }
    };
    ScrollGlue.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.el.scrollTop = this.el.scrollHeight;
        // create an observer instance
        this._observer = new MutationObserver(function (mutations) {
            if (!_this.isLocked) {
                _this._oldScrollHeight = _this.el.scrollHeight;
                _this.el.scrollTop = _this.el.scrollHeight;
            }
        });
        // configuration of the observer:
        var config = { childList: true, subtree: true };
        var target = this.el;
        // pass in the target node, as well as the observer options
        this._observer.observe(target, config);
    };
    ScrollGlue.prototype.ngOnDestroy = function () {
        this._observer.disconnect();
    };
    ScrollGlue = __decorate([
        core_1.Directive({
            selector: '[scroll-glue]',
            host: {
                '(scroll)': 'onScroll()'
            }
        })
    ], ScrollGlue);
    return ScrollGlue;
}());
exports.ScrollGlue = ScrollGlue;
