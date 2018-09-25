webpackJsonp([0],{

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDrachtioRegistrarTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__simple_drachtio_registrar_dialer_simple_drachtio_registrar_dialer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_drachtio_registrar_settings_simple_drachtio_registrar_settings__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleDrachtioRegistrarTabsPage = /** @class */ (function () {
    function SimpleDrachtioRegistrarTabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.dialer = __WEBPACK_IMPORTED_MODULE_1__simple_drachtio_registrar_dialer_simple_drachtio_registrar_dialer__["a" /* SimpleDrachtioRegistrarDialerPage */];
        this.settings = __WEBPACK_IMPORTED_MODULE_2__simple_drachtio_registrar_settings_simple_drachtio_registrar_settings__["a" /* SimpleDrachtioRegistrarSettingsPage */];
    }
    SimpleDrachtioRegistrarTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs.html"*/'<ion-tabs>\n  <ion-tab tabTitle="Dialer" tabIcon="call" [root]="dialer"></ion-tab>\n  <ion-tab tabTitle="Settings" tabIcon="settings" [root]="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-tabs/simple-drachtio-registrar-tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SimpleDrachtioRegistrarTabsPage);
    return SimpleDrachtioRegistrarTabsPage;
}());

//# sourceMappingURL=simple-drachtio-registrar-tabs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDrachtioRegistrarDialerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleDrachtioRegistrarDialerPage = /** @class */ (function (_super) {
    __extends(SimpleDrachtioRegistrarDialerPage, _super);
    function SimpleDrachtioRegistrarDialerPage(cdr, controller) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        return _this;
    }
    SimpleDrachtioRegistrarDialerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-simple-drachtio-registrar-dialer",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>simple-drachtio-registrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n    <audio id="remoteAudio"></audio>\n\n    <ion-item>\n      <ion-input class="text--large" type="text" value="{{toCall}}" placeholder="Enter a number or name"\n                 (blur)="saveInput({target: \'simpleDrachtioRegistrar.toCall\', value: $event.target.value})"\n      ></ion-input>\n    </ion-item>\n\n</ion-content>\n\n<ion-footer no-border>\n  <button class="btn--no-border" color="secondary" full large ion-button item-end\n          (click)="registered ? unregister() : register()"\n  >\n    {{registered ? \'Unregister\' : \'Register\' }}\n  </button>\n  <button class="btn--no-border" full large ion-button item-end (click)="call()">Call</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-dialer/simple-drachtio-registrar-dialer.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            toCall: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"]),
            registered: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.registered"]),
            call: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["simpleDrachtioRegistrar.call"]),
            register: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["simpleDrachtioRegistrar.register"]),
            unregister: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["simpleDrachtioRegistrar.unregister"]),
            saveInput: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["saveInput"]),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object])
    ], SimpleDrachtioRegistrarDialerPage);
    return SimpleDrachtioRegistrarDialerPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=simple-drachtio-registrar-dialer.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDrachtioRegistrarSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SimpleDrachtioRegistrarSettingsPage = /** @class */ (function (_super) {
    __extends(SimpleDrachtioRegistrarSettingsPage, _super);
    function SimpleDrachtioRegistrarSettingsPage(cdr, controller) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        return _this;
    }
    SimpleDrachtioRegistrarSettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-simple-drachtio-registrar-settings",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-settings/simple-drachtio-registrar-settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>simple-drachtio-registrar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n\n    <button ion-item>\n      <ion-icon name="globe" item-start color="primary"\n               ></ion-icon>\n      <ion-label>Server</ion-label>\n      <ion-input text-right item-end value="{{server}}"\n                 (blur)="saveInput({target: \'simpleDrachtioRegistrar.settings.server\', value: $event.target.value})"\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="globe" item-start color="primary"></ion-icon>\n      <ion-label>Domain</ion-label>\n      <ion-input text-right item-end value="{{domain}}"\n                 (blur)="saveInput({target: \'simpleDrachtioRegistrar.settings.domain\', value: $event.target.value})"\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="person" item-start color="primary"></ion-icon>\n      <ion-label>Auth Username</ion-label>\n      <ion-input text-right item-end value="{{username}}"\n                 (blur)="saveInput({target: \'simpleDrachtioRegistrar.settings.username\', value: $event.target.value})"\n\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="wifi" item-start color="primary"></ion-icon>\n      <ion-label>Password</ion-label>\n      <ion-input text-right item-end value="{{password}}"\n                 (blur)="saveInput({target: \'simpleDrachtioRegistrar.settings.password\', value: $event.target.value})"\n\n      ></ion-input>\n    </button>\n\n    <!--<ion-item>-->\n      <!--<ion-icon name="call" item-start color="primary"></ion-icon>-->\n      <!--<ion-label>Auto Register</ion-label>-->\n      <!--<ion-toggle color="secondary" checked="{{autoRegister}}"-->\n                  <!--(ionChange)="saveInput({target: \'simpleDrachtioRegistrar.settings.autoRegister\', value: !autoRegister})"-->\n\n      <!--&gt;</ion-toggle>-->\n    <!--</ion-item>-->\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-settings/simple-drachtio-registrar-settings.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            server: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.settings.server"]),
            domain: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.settings.domain"]),
            username: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.settings.username"]),
            password: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.settings.password"]),
            // autoRegister: state(["simpleDrachtioRegistrar.settings.autoRegister"]),
            saveInput: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["saveInput"]),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object])
    ], SimpleDrachtioRegistrarSettingsPage);
    return SimpleDrachtioRegistrarSettingsPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=simple-drachtio-registrar-settings.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleDrachtioRegistrarInCallModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(62);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SimpleDrachtioRegistrarInCallModalPage = /** @class */ (function (_super) {
    __extends(SimpleDrachtioRegistrarInCallModalPage, _super);
    function SimpleDrachtioRegistrarInCallModalPage(cdr, controller, viewCtrl) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        _this.viewCtrl = viewCtrl;
        return _this;
    }
    SimpleDrachtioRegistrarInCallModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-simple-drachtio-registrar-in-call-modal",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-in-call-modal/simple-drachtio-registrar-in-call-modal.html"*/'<ion-content padding>\n  <ion-grid>\n    <h1 ion-text color="primary">{{name}}</h1>\n    <h3 *ngIf="type === \'incoming\'" ion-text color="secondary">\n      {{ connected ? "Connected" : "Incoming Call" }}\n    </h3>\n    <h3 *ngIf="type === \'outgoing\'" ion-text color="secondary">\n      {{ connected ? "Connected" : "Outgoing Call" }}\n    </h3>\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-grid  *ngIf="!connected && type === \'incoming\'">\n    <ion-row>\n      <ion-col col-6>\n        <button (click)="answer()" color="primary" ion-button full large>\n          Answer\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button (click)="hangup()" color="secondary" ion-button full large>\n          Hang-up\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button *ngIf="connected || type === \'outgoing\'" (click)="hangup()" color="secondary" ion-button full large>\n    Hang-up\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/simple-drachtio-registrar-in-call-modal/simple-drachtio-registrar-in-call-modal.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            name: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.name"]),
            connected: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]),
            type: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.type"]),
            answer: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["simpleDrachtioRegistrar.answer"]),
            hangup: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["simpleDrachtioRegistrar.hangup"]),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* ViewController */]])
    ], SimpleDrachtioRegistrarInCallModalPage);
    return SimpleDrachtioRegistrarInCallModalPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=simple-drachtio-registrar-in-call-modal.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return callSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return registerSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return unregisterSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hangupSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return answerSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onTerminated; });
/* unused harmony export onBye */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onCancel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(333);



var callSequence = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.type"]), "outgoing"),
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.name"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"])),
    __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* decideWhatToDo */],
    {
        setToCallWithLastRedialed: [
            Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.lastDialed"]))
        ],
        doNothing: [],
        call: [
            Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.lastDialed"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"])),
            __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* call */],
            {
                next: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"]), "")],
                error: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.toCall"]), "")]
            },
            __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* openInCallModal */],
            Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false)
        ]
    }
];
var registerSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["i" /* shouldRegister */],
    {
        register: [
            __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* register */],
            {
                next: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.registered"]), true)],
                error: []
            }
        ]
    }
];
var unregisterSequence = [__WEBPACK_IMPORTED_MODULE_2__actions__["j" /* unregister */]];
var onInvite = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.type"]), "incoming"),
    __WEBPACK_IMPORTED_MODULE_2__actions__["h" /* setCallName */],
    __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* openInCallModal */]
];
var hangupSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["e" /* hangup */],
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* closeModal */],
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false)
];
var answerSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["a" /* answer */],
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), true)
];
var onAccepted = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), true)
];
var onTerminated = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false),
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* closeModal */]
];
var onBye = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false),
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* closeModal */]
];
var onRejected = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false),
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* closeModal */]
];
var onCancel = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["simpleDrachtioRegistrar.call.connected"]), false),
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* closeModal */]
];
//# sourceMappingURL=sequences.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(243);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_simple_drachtio_registrar_tabs_simple_drachtio_registrar_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_simple_drachtio_registrar_dialer_simple_drachtio_registrar_dialer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_simple_drachtio_registrar_settings_simple_drachtio_registrar_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_simple_drachtio_registrar_in_call_modal_simple_drachtio_registrar_in_call_modal__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cerebral__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function configureController(modal) {
    var cerebral = Object(__WEBPACK_IMPORTED_MODULE_11__cerebral__["a" /* cerebralFactory */])(modal);
    return new __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__["ControllerService"](cerebral, {});
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_simple_drachtio_registrar_tabs_simple_drachtio_registrar_tabs__["a" /* SimpleDrachtioRegistrarTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_simple_drachtio_registrar_dialer_simple_drachtio_registrar_dialer__["a" /* SimpleDrachtioRegistrarDialerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_simple_drachtio_registrar_settings_simple_drachtio_registrar_settings__["a" /* SimpleDrachtioRegistrarSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_simple_drachtio_registrar_in_call_modal_simple_drachtio_registrar_in_call_modal__["a" /* SimpleDrachtioRegistrarInCallModalPage */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_simple_drachtio_registrar_tabs_simple_drachtio_registrar_tabs__["a" /* SimpleDrachtioRegistrarTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_simple_drachtio_registrar_dialer_simple_drachtio_registrar_dialer__["a" /* SimpleDrachtioRegistrarDialerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_simple_drachtio_registrar_settings_simple_drachtio_registrar_settings__["a" /* SimpleDrachtioRegistrarSettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_simple_drachtio_registrar_in_call_modal_simple_drachtio_registrar_in_call_modal__["a" /* SimpleDrachtioRegistrarInCallModalPage */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__["ControllerService"],
                    useFactory: configureController,
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */]]
                },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_simple_drachtio_registrar_tabs_simple_drachtio_registrar_tabs__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_simple_drachtio_registrar_tabs_simple_drachtio_registrar_tabs__["a" /* SimpleDrachtioRegistrarTabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/app/app.html"*/'<ion-menu [content]="mycontent">\n\n  <ion-header>\n    <ion-toolbar color="secondary">\n      <ion-title>Apps</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item detail-none>\n        simple-drachtio-registrar\n      </button>\n      <button ion-item detail-none>\n        drachtio-simple-server (WIP)\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cerebralFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cerebral_storage__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cerebral_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cerebral_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__simple_drachtio_registrar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_Sip__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Modal__ = __webpack_require__(336);






function cerebralFactory(modal) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_cerebral__["Module"])({
        catch: [],
        providers: {
            modal: Object(__WEBPACK_IMPORTED_MODULE_5__providers_Modal__["a" /* default */])(modal),
            sip: Object(__WEBPACK_IMPORTED_MODULE_3__providers_Sip__["a" /* default */])({
                onAccepted: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["d" /* onAccepted */],
                onRejected: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["g" /* onRejected */],
                onFailed: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["e" /* onCancel */],
                onConnecting: [],
                onTerminated: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["h" /* onTerminated */],
                onCancel: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["e" /* onCancel */],
                onRefer: [],
                onBye: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["e" /* onCancel */],
                onProgress: [],
                onDtmf: [],
                // onMuted: [],
                // onUnmuted: [],
                onInfo: [],
                onInvite: __WEBPACK_IMPORTED_MODULE_4__simple_drachtio_registrar_sequences__["f" /* onInvite */]
            })
        },
        signals: {
            saveInput: [
                function saveInput(_a) {
                    var props = _a.props, state = _a.state;
                    state.set(props.target, props.value);
                }
            ]
        },
        modules: {
            simpleDrachtioRegistrar: __WEBPACK_IMPORTED_MODULE_2__simple_drachtio_registrar__["a" /* default */],
            storage: __WEBPACK_IMPORTED_MODULE_0__cerebral_storage___default()({
                target: localStorage,
                json: true,
                sync: {
                    "simpleDrachtioRegistrar.settings": "simpleDrachtioRegistrar.settings",
                    "simpleDrachtioRegistrar.lastDialed": "simpleDrachtioRegistrar.lastDialed"
                }
            })
        }
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sequences__ = __webpack_require__(218);


var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_cerebral__["Module"])({
    state: {
        settings: {
            server: "127.0.0.1",
            domain: "ctel.com",
            username: "1234",
            password: "1234",
        },
        lastDialed: "",
        toCall: "",
        registered: false,
        username: username || '',
        call: {
            type: "",
            name: "",
            connected: false
        }
    },
    signals: {
        call: __WEBPACK_IMPORTED_MODULE_1__sequences__["b" /* callSequence */],
        register: __WEBPACK_IMPORTED_MODULE_1__sequences__["i" /* registerSequence */],
        unregister: __WEBPACK_IMPORTED_MODULE_1__sequences__["j" /* unregisterSequence */],
        hangup: __WEBPACK_IMPORTED_MODULE_1__sequences__["c" /* hangupSequence */],
        answer: __WEBPACK_IMPORTED_MODULE_1__sequences__["a" /* answerSequence */]
    },
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = register;
/* harmony export (immutable) */ __webpack_exports__["j"] = unregister;
/* harmony export (immutable) */ __webpack_exports__["b"] = call;
/* harmony export (immutable) */ __webpack_exports__["d"] = decideWhatToDo;
/* harmony export (immutable) */ __webpack_exports__["i"] = shouldRegister;
/* harmony export (immutable) */ __webpack_exports__["f"] = openInCallModal;
/* harmony export (immutable) */ __webpack_exports__["h"] = setCallName;
/* harmony export (immutable) */ __webpack_exports__["a"] = answer;
/* harmony export (immutable) */ __webpack_exports__["e"] = hangup;
/* harmony export (immutable) */ __webpack_exports__["c"] = closeModal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_simple_drachtio_registrar_in_call_modal_simple_drachtio_registrar_in_call_modal__ = __webpack_require__(216);

function register(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    return new Promise(function (resolve, reject) {
        var server = state.get("simpleDrachtioRegistrar.settings.server");
        var domain = state.get("simpleDrachtioRegistrar.settings.domain");
        var authUsername = state.get("simpleDrachtioRegistrar.settings.username");
        var password = state.get("simpleDrachtioRegistrar.settings.password");
        var username = state.get("simpleDrachtioRegistrar.username");
        sip.connect({
            uri: (username || authUsername) + "@" + domain,
            wsServer: "ws://" + server,
            authorizationUser: authUsername,
            password: password
        }, function (error, result) {
            if (error) {
                return resolve(path.error());
            }
            resolve(path.next());
        });
    });
}
function unregister(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    sip.unregister();
    state.set("simpleDrachtioRegistrar.registered", false);
}
function call(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    return new Promise(function (resolve, reject) {
        var domain = state.get("simpleDrachtioRegistrar.settings.domain");
        var toCall = state.get("simpleDrachtioRegistrar.toCall");
        sip.invite(toCall + "@" + domain, {
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: false
                }
            }
        }, function (error, result) {
            if (error) {
                return resolve(path.error());
            }
            resolve(path.next());
        });
    });
}
function decideWhatToDo(_a) {
    var state = _a.state, path = _a.path;
    var lastDialed = state.get("simpleDrachtioRegistrar.lastDialed");
    var toCall = state.get("simpleDrachtioRegistrar.toCall");
    if (!toCall && !lastDialed) {
        return path.doNothing();
    }
    if (!toCall && lastDialed) {
        return path.setToCallWithLastRedialed();
    }
    if (toCall) {
        return path.call();
    }
    return path.doNothing();
}
function shouldRegister(_a) {
    var path = _a.path;
    return path.register();
}
function openInCallModal(_a) {
    var modal = _a.modal;
    modal.create(__WEBPACK_IMPORTED_MODULE_0__pages_simple_drachtio_registrar_in_call_modal_simple_drachtio_registrar_in_call_modal__["a" /* SimpleDrachtioRegistrarInCallModalPage */]);
}
function setCallName(_a) {
    var state = _a.state, props = _a.props;
    state.set("simpleDrachtioRegistrar.call.name", props.name.split("@")[0] || "Unknown");
}
function answer(_a) {
    var sip = _a.sip;
    sip.answer();
}
function hangup(_a) {
    var sip = _a.sip, state = _a.state;
    var type = state.get("simpleDrachtioRegistrar.call.type");
    var connected = state.get("simpleDrachtioRegistrar.call.connected");
    if (type === "incoming") {
        if (!connected) {
            sip.reject();
        }
        else {
            sip.hangup();
        }
    }
    else {
        if (connected) {
            sip.hangup();
        }
        else {
            sip.cancel();
        }
    }
}
function closeModal(_a) {
    var modal = _a.modal;
    modal.close();
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Sip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sip_js__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sip_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral__ = __webpack_require__(21);

var EVENT_NAMES_TO_SIGNAL = [
    { event: "accepted", sequence: "onAccepted" },
    { event: "rejected", sequence: "onRejected" },
    { event: "failed", sequence: "onFailed" },
    { event: "connecting", sequence: "onConnecting" },
    { event: "terminated", sequence: "onTerminated" },
    { event: "cancel", sequence: "onCancel" },
    { event: "refer", sequence: "onRefer" },
    { event: "bye", sequence: "onBye" },
    { event: "progress", sequence: "onProgress" },
    { event: "dtmf", sequence: "onDtmf" }
    // { event: "muted", sequence: "onMuted" },
    // { event: "unmuted", sequence: "onUnmuted" }
];

function Sip(_a) {
    var onAccepted = _a.onAccepted, onRejected = _a.onRejected, onFailed = _a.onFailed, onConnecting = _a.onConnecting, onTerminated = _a.onTerminated, onCancel = _a.onCancel, onRefer = _a.onRefer, onBye = _a.onBye, onProgress = _a.onProgress, onDtmf = _a.onDtmf, 
    // onMuted,
    // onUnmuted,
    onInfo = _a.onInfo, onInvite = _a.onInvite;
    var ua;
    var session;
    var sequences = {
        onAccepted: onAccepted,
        onRejected: onRejected,
        onFailed: onFailed,
        onConnecting: onConnecting,
        onTerminated: onTerminated,
        onCancel: onCancel,
        onRefer: onRefer,
        onBye: onBye,
        onProgress: onProgress,
        onDtmf: onDtmf
        // onMuted,
        // onUnmuted
    };
    return Object(__WEBPACK_IMPORTED_MODULE_1_cerebral__["Provider"])({
        connect: function (_a, cb) {
            var _this = this;
            var uri = _a.uri, wsServer = _a.wsServer, password = _a.password, authorizationUser = _a.authorizationUser;
            try {
                ua = new __WEBPACK_IMPORTED_MODULE_0_sip_js___default.a.UA({
                    uri: uri,
                    transportOptions: {
                        wsServers: [wsServer]
                    },
                    authorizationUser: authorizationUser,
                    password: password,
                    register: true
                });
            }
            catch (error) {
                console.error(error);
                cb("disconnected");
            }
            ua.transport.on("connected", function (transport) {
                console.log("connected");
                cb();
            });
            ua.transport.on("connecting", function (connecting) {
                console.log("connecting");
            });
            ua.transport.on("disconnected", function (disc) {
                console.log("disconnected");
                cb("disconnected");
            });
            ua.on("invite", function (sess) {
                session = sess;
                session.on("cancel", function () {
                    _this.context.controller.runSignal("onCancel", onCancel);
                });
                session.on("terminate", function () {
                    _this.context.controller.runSignal("onTerminated", onTerminated);
                });
                session.on("bye", function () {
                    _this.context.controller.runSignal("onBye", onBye);
                });
                _this.context.controller.runSignal("onInvite", onInvite, {
                    name: session.request.from.displayName ||
                        session.request.from.friendlyName
                });
            });
        },
        attachEvents: function (session, controller) {
            EVENT_NAMES_TO_SIGNAL.map(function (action) {
                session.on(action.event, function (response, cause) {
                    controller.runSignal(action.event, sequences[action.sequence], {
                        response: response && response.method === "BYE"
                            ? ""
                            : response && response.data
                                ? response.data
                                : "",
                        cause: cause || ""
                    });
                });
            });
        },
        unregister: function () {
            if (ua.isRegistered()) {
                ua.unregister();
            }
        },
        answer: function () {
            try {
                session.accept();
            }
            catch (error) {
                console.log("error answering");
            }
        },
        invite: function (target, options, cb) {
            var _this = this;
            try {
                var sess = ua.invite(target, options);
                var call_id = sess.request.call_id;
                session = sess;
                this.attachEvents(session, this.context.controller);
                session.onInfo = function (request) {
                    return _this.context.controller.runSignal("onInfo", onInfo, { request: request });
                };
                session.on("trackAdded", function () {
                    var remoteAudio = document.getElementById("remoteAudio");
                    var pc = session.sessionDescriptionHandler.peerConnection;
                    var remoteStream;
                    remoteStream = pc.getRemoteStreams()[0];
                    remoteAudio.srcObject = remoteStream;
                    remoteAudio.volume = 1;
                    remoteAudio.play();
                });
                cb(null, call_id);
            }
            catch (error) {
                console.log(error);
                cb("error invite");
            }
        },
        hangup: function () {
            try {
                session.bye();
            }
            catch (error) {
                console.log("error hanging up");
            }
        },
        reject: function () {
            try {
                session.reject();
            }
            catch (error) {
                console.log("error rejecting");
            }
        },
        cancel: function () {
            try {
                session.cancel();
            }
            catch (error) {
                console.log("error cancelling", error);
            }
        }
    });
}
//# sourceMappingURL=Sip.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(21);

function Modal(modal) {
    var modalInstance;
    return Object(__WEBPACK_IMPORTED_MODULE_0_cerebral__["Provider"])({
        create: function (modalPage) {
            if (!modalInstance) {
                modalInstance = modal.create(modalPage);
                modalInstance.present();
            }
        },
        close: function () {
            if (modalInstance) {
                modalInstance
                    .dismiss()
                    .then(function (error) {
                    console.log(error);
                    modalInstance = null;
                })
                    .catch(function (error) {
                    console.log(error);
                    modalInstance = null;
                });
            }
        }
    });
}
//# sourceMappingURL=Modal.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map