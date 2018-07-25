(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 26px;\r\n  }\r\n  label {\r\n    display: inline-block;\r\n    max-width: 100%;\r\n    margin-bottom: 5px;\r\n    font-weight: bold;\r\n    font-size:13px;\r\n}\r\n  .switch input {display:none;}\r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgb(204, 204, 204);\r\n    transition: .4s;\r\n  }\r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 24px;\r\n    width: 24px;\r\n    left: 1px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  input:checked + .slider {\r\n    background-color: black;\r\n  }\r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px rgb(213, 219, 224);\r\n  }\r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(16px);\r\n    transform: translateX(16px);\r\n  }\r\n  /* Rounded sliders */\r\n  .slider.round {\r\n    border-radius: 28px;\r\n  }\r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  }\r\n  body { margin:0px; padding:0px; }\r\n  /* main */\r\n  header {\r\n    height: 360px;\r\n    z-index: 10;\r\n}\r\n  header h1 {\r\n    background-color: rgba(18,72,120, 0.8);\r\n    color: #fff;\r\n    padding: 0 1rem;\r\n    position: absolute;\r\n    top: 2rem; \r\n    left: 2rem;\r\n}\r\n  .fixed-header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%; \r\n}\r\n  nav {\r\n    width: 100%;\r\n    height: 80px;\r\n    background:lightsteelblue;  \r\n    z-index: 10;\r\n}\r\n  nav div {\r\n    color: white;\r\n    font-size: 2rem;\r\n    line-height: 60px;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 2%;\r\n    visibility: hidden;\r\n}\r\n  .visible-title {\r\n    visibility: visible;\r\n}\r\n  nav ul { \r\n    list-style-type: none;\r\n    margin: 0 2% auto 0;\r\n    padding-left: 0;\r\n    text-align: right;\r\n    max-width: 100%;\r\n}\r\n  nav ul li { \r\n    display: inline-block; \r\n    line-height: 60px;\r\n    margin-left: 10px;\r\n}\r\n  nav ul li a {\r\n    text-decoration: none; \r\n    color: #a9abae;\r\n}\r\n  /* demo content */\r\n  body { \r\n    color: #292f36;\r\n    font-family: helvetica;\r\n    line-height: 1.6;\r\n}\r\n  .content{ \r\n    margin: 0 auto;\r\n    padding: 4rem 0;\r\n    width: 960px;\r\n    max-width: 100%;\r\n}\r\n  article {\r\n    float: left;\r\n    width: 720px;\r\n}\r\n  article p:first-of-type {\r\n    margin-top: 0;\r\n}\r\n  aside {\r\n    float: right;\r\n    width: 120px;\r\n}\r\n  p img {\r\n    max-width: 100%;\r\n}\r\n  @media only screen and (max-width: 960px) {\r\n    .content{ \r\n        padding: 2rem 0;\r\n    }\r\n    article {\r\n        float: none;\r\n        margin: 0 auto;\r\n        width: 96%;\r\n    }\r\n    article:last-of-type {  \r\n        margin-bottom: 3rem;\r\n    }\r\n    aside {  \r\n        float: none;\r\n        text-align: center;\r\n        width: 100%;\r\n    }\r\n}\r\n  [data-tooltip] {\r\n    display: inline-block;\r\n    position: relative; \r\n    padding: 1px;\r\n}\r\n  /* Tooltip styling */\r\n  [data-tooltip]:before {\r\n    content: attr(data-tooltip);\r\n    display: none;\r\n    position: absolute;\r\n    background: rgb(103, 106, 108)\r\n    ;\r\n    color: #fff;\r\n    padding: 4px 8px;\r\n    font-size: 10px;\r\n    line-height: 1.4;\r\n    min-width: 50px;\r\n    text-align: center;\r\n    border-radius: 4px;\r\n}\r\n  /* Dynamic horizontal centering */\r\n  [data-tooltip-position=\"top\"]:before,\r\n[data-tooltip-position=\"bottom\"]:before {\r\n    left: 50%;\r\n    -webkit-transform: translateX(-50%);\r\n    transform: translateX(-50%);\r\n}\r\n  /* Dynamic vertical centering */\r\n  [data-tooltip-position=\"right\"]:before,\r\n[data-tooltip-position=\"left\"]:before {\r\n    top: 50%;\r\n    -webkit-transform: translateY(-50%);\r\n    transform: translateY(-50%);\r\n}\r\n  [data-tooltip-position=\"top\"]:before {\r\n    bottom: 100%;\r\n    margin-bottom: 6px;\r\n}\r\n  [data-tooltip-position=\"right\"]:before {\r\n    left: 100%;\r\n    margin-left: 6px;\r\n}\r\n  [data-tooltip-position=\"bottom\"]:before {\r\n    top: 100%;\r\n    margin-top: 6px;\r\n}\r\n  [data-tooltip-position=\"left\"]:before {\r\n    right: 100%;\r\n    margin-right: 6px;\r\n}\r\n  /* Tooltip arrow styling/placement */\r\n  [data-tooltip]:after {\r\n    content: '';\r\n    display: none;\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-color: transparent;\r\n    border-style: solid;\r\n}\r\n  /* Dynamic horizontal centering for the tooltip */\r\n  [data-tooltip-position=\"top\"]:after,\r\n[data-tooltip-position=\"bottom\"]:after {\r\n    left: 50%;\r\n    margin-left: -6px;\r\n}\r\n  /* Dynamic vertical centering for the tooltip */\r\n  [data-tooltip-position=\"right\"]:after,\r\n[data-tooltip-position=\"left\"]:after {\r\n    top: 50%;\r\n    margin-top: -6px;\r\n}\r\n  [data-tooltip-position=\"top\"]:after {\r\n    bottom: 100%;\r\n    border-width: 6px 6px 0;\r\n    border-top-color: #000;\r\n}\r\n  [data-tooltip-position=\"right\"]:after {\r\n    left: 100%;\r\n    border-width: 6px 6px 6px 0;\r\n    border-right-color: #000;\r\n}\r\n  [data-tooltip-position=\"bottom\"]:after {\r\n    top: 100%;\r\n    border-width: 0 6px 6px;\r\n    border-bottom-color: #000;\r\n}\r\n  [data-tooltip-position=\"left\"]:after {\r\n    right: 100%;\r\n    border-width: 6px 0 6px 6px;\r\n    border-left-color: #000;\r\n}\r\n  /* Show the tooltip when hovering */\r\n  [data-tooltip]:hover:before,\r\n[data-tooltip]:hover:after {\r\n    display: block;\r\n    z-index: 50;\r\n}"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: rgb(243, 243, 244)\">\n \n<div class=\"container\" >\n    \n        <form [formGroup] = \"userform\" (ngSubmit) = \"addContacts(userform)\">\n      \n        <p style=\"border-style:inset;padding:20px;background-color:#ffff;border-color:#ffff;width:100%;margin-top:-40px;\">  \n            <input type=\"submit\" class=\"btn btn btn-success\" style=\"margin-left: 80%\" [disabled]=\"!userform.valid || validataCountry == 1\" value = \"Submit\">\n        </p>\n                <div class=\"row\"> \n                        <div class=\"col-sm-4 col-md-4 col-lg-4 col-xs-12\">\n                            <div class=\"panel panel-primary\">\n                                <div class=\" panel-heading\" style=\"background-color: lightgray\">Country Data </div>\n                                <div class=\"panel-body\">\n                                        <div class=\"row\">\n                                     \n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Country Name</label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                   <select class=\"form-control\" id=\"country_name\" (ngModelChange)=\"onChangeObj($event)\"  [(ngModel)]=\"selectedcountries\"  [ngModelOptions]=\"{standalone: true}\">\n                                                    <option *ngFor=\"let country of countries\" [ngValue]=\"country\"  >{{country.name}}</option>                                                    \n                                                   </select>  \n                                                   <div *ngIf=\"validataCountry == 1\" style=\"color: darkred;font-size:11px\"><b>{{ errorMessage }} </b>  </div>\n                                                   <input type=\"hidden\" name=\"country_name\"   formControlName=\"country_name\"  [(ngModel)]=\"selectedcountries.name\">\n                                                   \n                                                   <input type=\"hidden\" name=\"a12\" formControlName=\"a12\"   [(ngModel)]=\"selectedcountries.languages\">\n                                                </div>\n                                            </div>\n                                    <br >\n                                     <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Short Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\"  formControlName=\"short_code\" readonly=\"\" class=\"form-control\" [(ngModel)]=\"selectedcountries.alpha2\" name=\"short_code\">\n                                            </div>\n                                    </div>\n                                    <br>\n                                   <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Country Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6\">\n                                                    <input type=\"text\" readonly=\"\"  formControlName=\"country_code\" [(ngModel)]=\"selectedcountries.countryCallingCodes\"  class=\"form-control\" name=\"country_code\">\n                                            </div>\n                                    </div>\n                                    <br>\n\n                              \n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\"   formControlName=\"currency\"  name=\"currency\" class=\"form-control\" required>\n                                            </div> \n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <input type=\"text\"  readonly=\"\" formControlName=\"currencycode\"   [(ngModel)]=\"selectedcountries.emoji\"  name=\"currencycode\" class=\"form-control\">\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency Sign</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\"  formControlName=\"currencysign\"  [(ngModel)]=\"selectedcountries.alpha3\" name=\"currencysign\" class=\"form-control\">\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Default Currency Rate</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            \n                                                <input type=\"text\"  formControlName=\"rate\"  name=\"rate\" class=\"form-control\"> \n                                            </div>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-12 col-lg-12 col-xs-12\">\n                                    <div class=\"panel panel-primary\">\n                                        <div class=\" panel-heading\" style=\"background-color: lightgray\">Vat Settings </div>\n                                        <div class=\"panel-body\">\n                                                <div class=\"row\">\n                                                        <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                            <label>Vat Status</label>\n                                                        </div>\n                                                        <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \">\n                                                                <label class=\"switch\">\n                                                                        <input type=\"checkbox\"  [(ngModel)]=\"test3\" formControlName=\"a19\" >\n                                                                        <span class=\"slider round\"></span>\n                                                                      </label>\n                                                        </div>\n                                                        <div  *ngIf=\"test3\">\n\n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>Franchise can add vat</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \" >\n                                                                        <label class=\"switch\">\n                                                                                <input type=\"checkbox\" formControlName=\"a20\"  [(ngModel)]=\"test7\">\n                                                                                <span class=\"slider round\"></span>\n                                                                              </label>\n                                                                </div>\n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>Store can add vat</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \"  >\n                                                                        <label class=\"switch\">\n                                                                                <input type=\"checkbox\" formControlName=\"a21\" [(ngModel)]=\"test8\" >\n                                                                                <span class=\"slider round\"></span>\n                                                                              </label>\n                                                                </div>\n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>VAT</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \"  >\n                                                                        <input type=\"text\" formControlName=\"vat\"     name=\"vat\" class=\"form-control\">\n                                          \n                                                                </div>\n\n                                                        </div>\n                                                       \n                                                    </div>\n                                            <br >\n                                           \n        \n                                      \n                                          \n                                          \n                                             \n                                         \n                                            \n                                        </div>\n                                    </div>\n                                    \n                                </div>\n                        </div>\n                    \n                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                <div class=\"panel panel-primary\">\n                                    <div class=\"panel panel-heading\" style=\"background-color: lightgray\">Country Settings </div>\n                                    <div class=\"panel-body\">\n                                        <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Minimum Phone No.length </label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <div class=\" input-group\">\n                                                    <input type=\"number\" class=\"form-control\"  formControlName=\"a1\" name=\"a1\">\n                                                    <span class=\"input-group-addon\"> \n                                                            <span data-tooltip=\"Enter Minimum Phone No.Length\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                            </span> \n                                                        \n                                                   \n                                                </div>\n                                            </div>\n                                        </div>\n                                        <br >\n                                        <div class=\"row\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Maximum Phone No.length </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a2\" name=\"a2\" >\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Enter Maximum Phone No.Length\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        <br> \n                                        <div  class=\"row\" *ngIf=\"test2\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Referal Bonus To User </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <div class=\"input-group-addon\">\n                                                            <span>{{selectedcountries.emoji}}</span>\n                                          \n                                                        </div>\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a3\" name=\"a3\" >\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Referal Bonus To User \" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test2\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Referal Bonus To User Friend </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <div class=\"input-group-addon\">\n                                                                <span>{{selectedcountries.emoji}}</span></div>\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a4\" name=\"a4\">\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Referal Bonus To User Friend  \" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test2\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>No of User For Referral </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <input type=\"number\" class=\"form-control\"  formControlName=\"a5\" name=\"a5\" >\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"No of User For Referral\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <br>\n                                            <div class=\"row\" *ngIf=\"test1\">\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                        <label>Referral Bonus to Store</label>\n                                                    </div>\n                                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                        <div class=\" input-group\">\n                                                            <div class=\"input-group-addon\">\n                                                                    <span>{{selectedcountries.emoji}}</span></div>\n                                                            <input type=\"number\" class=\"form-control\" name=\"a6\" formControlName=\"a6\">\n                                                                <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"No of User For Referral\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                        </div>\n                                                    </div>\n                                                </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test1\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Referral Bonus to Store's Friend</label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <div class=\"input-group-addon\">\n                                                                <span>{{selectedcountries.emoji}}</span></div>\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a7\" name=\"a7\">\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Referral Bonus to Store's Friend\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                        </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test1\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>No of User For Referral </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a8\" name=\"a8\">\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"No of User For Referral\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span> \n                                                    </div>\n                                                </div>\n                                        </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Referral Bonus to Provider</label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <div class=\"input-group-addon\">\n                                                                <span>{{selectedcountries.emoji}}</span></div>\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a9\" name=\"a9\" >\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Referral Bonus to Provider\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span>\n                                                    </div>\n                                                </div>\n                                        </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>Referral Bonus to Provider's Friend</label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <div class=\"input-group-addon\">\n                                                                <span>{{selectedcountries.emoji}}</span></div>\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a10\" name=\"a10\">\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"Referral Bonus to Provider's Friend\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span>\n                                                    </div>\n                                                </div>\n                                        </div>\n                                        <br>\n                                        <div class=\"row\" *ngIf=\"test\">\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <label>No of User For Referral </label>\n                                                </div>\n                                                <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <div class=\" input-group\">\n                                                        <input type=\"number\" class=\"form-control\" formControlName=\"a11\" name=\"a11\" >\n                                                        <span class=\"input-group-addon\"> \n                                                                <span data-tooltip=\"No of User For Referral\" data-tooltip-position=\"bottom\"><i class=\"glyphicon glyphicon-question-sign\"></i></span>\n                                                                </span>\n                                                    </div>\n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            \n        \n                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                    <div class=\"panel panel-primary\">\n                                        <div class=\"panel panel-heading\" style=\"background-color: lightgray\">Country Settings </div>\n                                        <div class=\"panel-body\">\n                                            <div class=\"row\">\n                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                    <label>Business in Country</label>\n                                                </div>\n                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \">\n                                                        <label class=\"switch\">\n                                                                <input type=\"checkbox\" formControlName=\"a13\" [(ngModel)]=\"test6\"   >\n                                                                <span class=\"slider round\"></span>\n                                                              </label>\n                                                </div>\n                                            </div>\n                                            <br >\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                        <label>Distance Unit Mile</label>\n                                                    </div>\n                                                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                            <label class=\"switch\">\n                                                                    <input type=\"checkbox\" formControlName=\"a14\" [(ngModel)]=\"test5\"   >\n                                                                    <span class=\"slider round\"></span>\n                                                                  </label>\n                                                    </div>\n                                            </div>\n                                            <br>\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                        <label>Ads Visible</label>\n                                                    </div>\n                                                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                            <label class=\"switch\">\n                                                                    <input type=\"checkbox\" [(ngModel)]=\"test4\" formControlName=\"a15\"  >\n                                                                    <span class=\"slider round\"></span>\n                                                                  </label>\n                                                    </div>\n                                            </div>\n                                            <br>\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                        <label>Referral For User</label>\n                                                    </div>\n                                                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                        <label class=\"switch\">\n                                                                <input type=\"checkbox\"  [(ngModel)]=\"test2\" formControlName=\"a16\"  >\n                                                            <span class=\"slider round\"></span>\n                                                          </label>\n                                                    </div> \n                                            </div>\n                                            <br>\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                        <label>Referral For Store</label>\n                                                    </div>\n                                                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                            <label class=\"switch\">\n                                                                    <input type=\"checkbox\"  [(ngModel)]=\"test1\" formControlName=\"a17\"  > \n                                                                    <span class=\"slider round\"></span>\n                                                                  </label>\n                                                    </div>\n                                            </div>\n                                            <br>\n                                            <div class=\"row\">\n                                                    <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                        <label>Referral For Provider</label>\n                                                    </div>\n                                                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                            <label class=\"switch\">\n                                                                    <input type=\"checkbox\"  [(ngModel)]=\"test\" formControlName=\"a18\"  > \n                                                                    <span class=\"slider round\"></span>\n                                                                  </label>\n                                                    </div>\n                                            </div>\n                                            \n                                        </div>\n                                    </div>\n                                </div>\n                                \n                            </div>\n                            </form>\n                       </div>\n\n                    </body>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AboutComponent = /** @class */ (function () {
    function AboutComponent(ServiceService, router) {
        this.ServiceService = ServiceService;
        this.router = router;
        this.selectedcountries = {};
        this.test = false;
        this.test1 = false;
        this.test2 = false;
        this.test3 = false;
        this.test4 = false;
        this.test5 = false;
        this.test6 = false;
        this.test7 = false;
        this.userform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            country_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            short_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currencycode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currencysign: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            vat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a6: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a7: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a8: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a9: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a10: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a11: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a12: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a13: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a14: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a15: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a16: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a17: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a18: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a19: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a20: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a21: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.errorMessage = 'country already exits';
    }
    AboutComponent.prototype.onChangeObj = function (newObj) {
        var _this = this;
        this.ServiceService.validateCountry(newObj.name)
            .subscribe(function (res) { return _this.validataCountry = res; }, function (error) { return _this.errorMessage = error; });
    };
    AboutComponent.prototype.addContacts = function (_a) {
        var value = _a.value;
        this.ServiceService.addContact(JSON.stringify(value));
        this.router.navigate(['/viewcountry']);
        setTimeout(function () { alert("Record Inserted Successfully"); }, 200);
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ServiceService.getcountries().subscribe(function (countryData) { return _this.countries = countryData; });
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")],
            providers: [_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"]]
        }),
        __metadata("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\nbody {\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n.sidenav {\r\n  height: 100%;\r\n  width: 200px;\r\n  position: fixed;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  background-color: #ffff;\r\n  overflow-x: hidden;\r\n  padding-top: 20px;\r\n}\r\n\r\n.sidenav a {\r\n  padding: 6px 6px 6px 32px;\r\n  text-decoration: none;\r\n  font-size: 25px;\r\n  color: #818181;\r\n  display: block;\r\n}\r\n\r\n.sidenav a:hover {\r\n  color: #f1f1f1;\r\n}\r\n\r\n.main {\r\n  margin-left: 200px; /* Same as the width of the sidenav */\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n.sidenav {padding-top: 15px;}\r\n.sidenav a {font-size: 18px;}\r\n}\r\n\r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 22px;\r\n  }\r\n\r\n.switch input {display:none;}\r\n\r\n.slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n\r\n.slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 1px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n\r\ninput:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n\r\ninput:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n\r\ninput:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n\r\n/* Rounded sliders */\r\n\r\n.slider.round {\r\n    border-radius: 22px;\r\n  }\r\n\r\n.slider.round:before {\r\n    border-radius: 50%;\r\n  } "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body style=\"background-color: rgb(243, 243, 244)\">   \n   <br><br>\n    \n  <div class=\"container\">\n\n    \n  </div>\n \n  <a routerLink=\"/addcountry\" class=\"btn btn-success\">Add Country</a><br><br>\n  <a routerLink=\"/viewcountry\" class=\"btn btn-danger\" >View Country</a> \n   \n    \n<router-outlet></router-outlet>\n \n</body>\n\n \n  \n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jaiecom';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// import{ CategoryPipe } from './pipe'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_7__["ServicesComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
            ],
            imports: [
                _app_router__WEBPACK_IMPORTED_MODULE_4__["routes"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: router, routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");




var router = [
    { path: '', redirectTo: 'app.compnent', pathMatch: 'full' },
    { path: 'addcountry', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'viewcountry', component: _services_services_component__WEBPACK_IMPORTED_MODULE_2__["ServicesComponent"] },
    { path: 'editcountry/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] }
];
var routes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(router);


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 40px;\r\n  height: 26px;\r\n}\r\nlabel {\r\n  display: inline-block;\r\n  max-width: 100%;\r\n  margin-bottom: 5px;\r\n  font-weight: bold;\r\n  font-size:13px;\r\n}\r\n.switch input {display:none;}\r\n.slider {\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgb(204, 204, 204);\r\n  transition: .4s;\r\n}\r\n.slider:before {\r\n  position: absolute;\r\n  content: \"\";\r\n  height: 24px;\r\n  width: 24px;\r\n  left: 1px;\r\n  bottom: 1px;\r\n  background-color: white;\r\n  transition: .4s;\r\n}\r\ninput:checked + .slider {\r\n  background-color: black;\r\n}\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px rgb(213, 219, 224);\r\n}\r\ninput:checked + .slider:before {\r\n  -webkit-transform: translateX(16px);\r\n  transform: translateX(16px);\r\n}\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 28px;\r\n}\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\nbody { margin:0px; padding:0px; }\r\n/* main */\r\nheader {\r\n  height: 360px;\r\n  z-index: 10;\r\n}\r\nheader h1 {\r\n  background-color: rgba(18,72,120, 0.8);\r\n  color: #fff;\r\n  padding: 0 1rem;\r\n  position: absolute;\r\n  top: 2rem; \r\n  left: 2rem;\r\n}\r\n.fixed-header {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%; \r\n}\r\nnav {\r\n  width: 100%;\r\n  height: 80px;\r\n  background:lightsteelblue;  \r\n  z-index: 10;\r\n}\r\nnav div {\r\n  color: white;\r\n  font-size: 2rem;\r\n  line-height: 60px;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 2%;\r\n  visibility: hidden;\r\n}\r\n.visible-title {\r\n  visibility: visible;\r\n}\r\nnav ul { \r\n  list-style-type: none;\r\n  margin: 0 2% auto 0;\r\n  padding-left: 0;\r\n  text-align: right;\r\n  max-width: 100%;\r\n}\r\nnav ul li { \r\n  display: inline-block; \r\n  line-height: 60px;\r\n  margin-left: 10px;\r\n}\r\nnav ul li a {\r\n  text-decoration: none; \r\n  color: #a9abae;\r\n}\r\n/* demo content */\r\nbody { \r\n  color: #292f36;\r\n  font-family: helvetica;\r\n  line-height: 1.6;\r\n}\r\n.content{ \r\n  margin: 0 auto;\r\n  padding: 4rem 0;\r\n  width: 960px;\r\n  max-width: 100%;\r\n}\r\narticle {\r\n  float: left;\r\n  width: 720px;\r\n}\r\narticle p:first-of-type {\r\n  margin-top: 0;\r\n}\r\naside {\r\n  float: right;\r\n  width: 120px;\r\n}\r\np img {\r\n  max-width: 100%;\r\n}\r\n@media only screen and (max-width: 960px) {\r\n  .content{ \r\n      padding: 2rem 0;\r\n  }\r\n  article {\r\n      float: none;\r\n      margin: 0 auto;\r\n      width: 96%;\r\n  }\r\n  article:last-of-type {  \r\n      margin-bottom: 3rem;\r\n  }\r\n  aside {  \r\n      float: none;\r\n      text-align: center;\r\n      width: 100%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n    <div class=\"container\">\n     \n            <form     [formGroup] = \"userkform\" (ngSubmit) = \"updatecountry(userkform)\"  >\n                <div class=\"row\">    \n                        <div class=\"col-sm-12 col-md-12 col-lg-12 col-xs-12\">            \n <div style=\"border-style:inset;padding:10px;background-color:#ffff;border-color:#ffff;width:100%;margin-top:-40px;\"> \n        <h1>Edit Form</h1> <input type=\"submit\" name=\"submit\" class=\"btn btn-success pull-right\" value=\"update\" style=\"margin-top:-50px\">\n </div>\n </div>\n </div>\n <br><br>\n <div class=\"row\"> \n                        <div class=\"col-sm-4 col-md-4 col-lg-4 col-xs-12\">\n            \n                            <div class=\"panel panel-primary\">\n                                <div class=\" panel-heading\" style=\"background-color: lightgray\">Country Data </div>\n                                <div class=\"panel-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Country Name</label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                           <input type=\"text\" class=\"form-control\" id=\"country_name\" readonly=\"\" [(ngModel)]=\"data.country_name\" formControlName=\"country_name\" name=\"country_name\"  >\n                                               \n                                        </div>\n                                    </div>\n                                    <br >\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Short Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\" class=\"form-control\" readonly=\"\"  [(ngModel)]=\"data.short_code\" formControlName=\"short_code\" name=\"short_code\" >\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Country Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6\">\n                                                    <input type=\"text\" class=\"form-control\" readonly=\"\"  [(ngModel)]=\"data.country_code\" formControlName=\"country_code\" name=\"country_code\" >\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\" [(ngModel)]=\"data.currency\"  name=\"currency\" formControlName=\"currency\" class=\"form-control\">\n                                            </div> \n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency Code</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                    <input type=\"text\" [(ngModel)]=\"data.currencycode\" readonly=\"\" name=\"currencycode\" formControlName=\"currencycode\"  class=\"form-control\">\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Currency Sign</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\" name=\"currencysign\"  [(ngModel)]=\"data.currencysign\"  formControlName=\"currencysign\" class=\"form-control\">\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Default Currency Rate</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <input type=\"text\" name=\"rate\" [(ngModel)]=\"data.rate\" formControlName=\"rate\"  class=\"form-control\">\n                                            </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-12 col-md-12 col-lg-12 col-xs-12\">\n                                    <div class=\"panel panel-primary\">\n                                        <div class=\" panel-heading\" style=\"background-color: lightgray\">Vat Settings </div>\n                                        <div class=\"panel-body\">\n                                                <div class=\"row\">\n                                                        <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                            <label>Vat Status</label>\n                                                        </div>\n                                                        <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \">\n                                                                <label class=\"switch\">\n                                                                        <input type=\"checkbox\" [(ngModel)]=\"data.a19\" name=\"a19\"  formControlName=\"a19\"  checked=\"true\" >\n                                                                        <span class=\"slider round\"></span>\n                                                                      </label>\n                                                        </div>\n                                                        <div  *ngIf=\"data.a19\">\n\n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>Franchise can add vat</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \" >\n                                                                        <label class=\"switch\">\n                                                                                <input type=\"checkbox\" [(ngModel)]=\"data.a20\" formControlName=\"a20\"  >\n                                                                                <span class=\"slider round\"></span>\n                                                                              </label>\n                                                                </div>\n                                                                </div>     <div  *ngIf=\"data.a19\"> \n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>Store can add vat</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \"  >\n                                                                        <label class=\"switch\">\n                                                                                <input type=\"checkbox\" [(ngModel)]=\"data.a21\" formControlName=\"a21\" >\n                                                                                <span class=\"slider round\"></span>\n                                                                              </label>\n                                                                </div>\n                                                                </div>\n                                                                <div  *ngIf=\"data.a19\"> \n                                                                <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                                        <label>VAT</label>\n                                                                    </div>\n                                                                <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \"  >\n                                                                        <input type=\"text\" formControlName=\"vat\"  [(ngModel)]=\"data.vat\"   name=\"vat\" class=\"form-control\">\n                                          \n                                                                </div>\n                                                                </div>\n\n                                                      \n                                                       \n                                                    </div>\n                                            <br >\n                                           \n        \n                                      \n                                          \n                                          \n                                             \n                                         \n                                            \n                                        </div>\n                                    </div>\n                                    \n                                </div>\n                        </div>\n                        \n                    <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                        <div class=\"panel panel-primary\">\n                            <div class=\"panel panel-heading\" style=\"background-color: lightgray\">Country Settings </div>\n                            <div class=\"panel-body\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                        <label>Minimum Phone No.length </label>\n                                    </div>\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                        <div class=\" input-group\">\n                                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"data.a1\"  formControlName=\"a1\" name=\"a1\">\n                                            <input type=\"hidden\" name=\"a12\" class=\"form-control\" formControlName=\"a12\" [(ngModel)]=\"data.a12\" >\n                                                         \n                                            <div class=\"input-group-btn\">\n                                                <button class=\"btn btn-default\" type=\"submit\"><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <br >\n                                <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Maximum Phone No.length </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a2\" [(ngModel)]=\"data.a2\" name=\"a2\" >\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                <br>\n                                <div  class=\"row\" *ngIf=\"data.a16\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Referal Bonus To User </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <div class=\"input-group-addon\">\n                                                    <span>{{data.currencycode}}</span>\n                                  \n                                                </div>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a3\" [(ngModel)]=\"data.a3\" name=\"a3\" >\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a16\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Referal Bonus To User Friend </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <div class=\"input-group-addon\">\n                                                        <span>{{data.currencycode}}</span></div>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a4\" [(ngModel)]=\"data.a4\" name=\"a4\">\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a16\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>No of User For Referral </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <input type=\"number\" class=\"form-control\"  formControlName=\"a5\"  [(ngModel)]=\"data.a5\" name=\"a5\" >\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\"  *ngIf=\"data.a17\">\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <label>Referral Bonus to Store</label>\n                                            </div>\n                                            <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                                <div class=\" input-group\">\n                                                    <div class=\"input-group-addon\">\n                                                            <span>{{data.currencycode}}</span></div>\n                                                    <input type=\"number\" class=\"form-control\" name=\"a6\" [(ngModel)]=\"data.a6\" formControlName=\"a6\">\n                                                        <div class=\"input-group-btn\">\n                                                        <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                        </div>\n                                                </div>\n                                            </div>\n                                        </div>\n                                <br>\n                                <div class=\"row\"  *ngIf=\"data.a17\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Referral Bonus to Store's Friend</label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <div class=\"input-group-addon\">\n                                                        <span>{{data.currencycode}}</span></div>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a7\" [(ngModel)]=\"data.a7\" name=\"a7\">\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a17\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>No of User For Referral </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a8\" [(ngModel)]=\"data.a8\" name=\"a8\">\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a18\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Referral Bonus to Provider</label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <div class=\"input-group-addon\">\n                                                        <span>{{data.currencycode}}</span></div>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a9\" [(ngModel)]=\"data.a9\" name=\"a9\" >\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a18\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>Referral Bonus to Provider's Friend</label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <div class=\"input-group-addon\">\n                                                        <span>{{data.currencycode}}</span></div>\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a10\" [(ngModel)]=\"data.a10\" name=\"a10\">\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                    </div>\n                                            </div>\n                                        </div>\n                                </div>\n                                <br>\n                                <div class=\"row\" *ngIf=\"data.a18\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <label>No of User For Referral </label>\n                                        </div>\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 col-xs-12\">\n                                            <div class=\" input-group\">\n                                                <input type=\"number\" class=\"form-control\" formControlName=\"a11\" [(ngModel)]=\"data.a11\" name=\"a11\" >\n                                                    <div class=\"input-group-btn\">\n                                                    <button class=\"btn btn-default\" ><i class=\"glyphicon glyphicon-question-sign\"></i></button>\n                                                   \n                                            </div>\n                                            </div>\n                                        </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    \n\n                        <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                            <div class=\"panel panel-primary\">\n                                <div class=\"panel panel-heading\" style=\"background-color: lightgray;\">Country Settings </div>\n                                <div class=\"panel-body\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                            <label>Business in Country</label>\n                                        </div>\n                                        <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12 \">\n                                                <label class=\"switch\">\n                                                        <input type=\"checkbox\" formControlName=\"a13\"  [(ngModel)]=\"data.a13\"  >\n                                                        <span class=\"slider round\"></span>\n                                                      </label>\n                                        </div>\n                                    </div>\n                                    <br >\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                <label>Distance Unit Mile</label>\n                                            </div>\n                                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                    <label class=\"switch\">\n                                                            <input type=\"checkbox\" formControlName=\"a14\"  [(ngModel)]=\"data.a14\"  >\n                                                            <span class=\"slider round\"></span>\n                                                          </label>\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                <label>Ads Visible</label>\n                                            </div>\n                                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                    <label class=\"switch\">\n                                                            <input type=\"checkbox\" formControlName=\"a15\"  [(ngModel)]=\"data.a15\">\n                                                            <span class=\"slider round\"></span>\n                                                          </label>\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                <label>Referral For User</label>\n                                            </div>\n                                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                <label class=\"switch\">\n                                                        <input type=\"checkbox\"  [(ngModel)]=\"data.a16\" formControlName=\"a16\"  name=\"a16\" checked=\"true\"  >\n                                                    <span class=\"slider round\"></span>\n                                                  </label>\n                                            </div> \n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                <label>Referral For Store</label>\n                                            </div>\n                                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                    <label class=\"switch\">\n                                                            <input type=\"checkbox\" name=\"a17\" [(ngModel)]=\"data.a17\"  formControlName=\"a17\"     checked=\"true\"> \n                                                            <span class=\"slider round\"></span>\n                                                          </label>\n                                            </div>\n                                    </div>\n                                    <br>\n                                    <div class=\"row\">\n                                            <div class=\"col-sm-8 col-lg-8 col-md-8 col-xs-12\">\n                                                <label>Referral For Provider</label>\n                                            </div>\n                                            <div class=\"col-sm-4 col-lg-4 col-md-4 col-xs-12\">\n                                                    <label class=\"switch\">\n                                                            <input type=\"checkbox\"  name=\"a18\" [(ngModel)]=\"data.a18\"    formControlName=\"a18\"  checked=\"true\" > \n                                                            <span class=\"slider round\"></span>\n                                                          </label>\n                                            </div>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n                    </form>\n               </div>\n\n\n "

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(ServiceService, router, route) {
        this.ServiceService = ServiceService;
        this.router = router;
        this.route = route;
        this.formvalues = null;
        this.a13 = true;
        this.a14 = true;
        this.a15 = true;
        this.a16 = true;
        this.a17 = true;
        this.a18 = true;
        this.userkform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            country_name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            short_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country_code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currency: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currencycode: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            currencysign: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            rate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            vat: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a1: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a2: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a3: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a4: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a5: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a6: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a7: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a8: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a9: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a10: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a11: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a12: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a13: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a14: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a15: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a16: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a17: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a18: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a19: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a20: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            a21: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.id = '';
    }
    EditComponent.prototype.updatecountry = function (_a) {
        var value = _a.value;
        this.formvalues = JSON.stringify(value);
        this.ServiceService.updatecountry(this.formvalues, this.id);
        this.router.navigate(['/viewcountry']);
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.data = this.ServiceService.selectcountrybyid(this.id)
            .subscribe(function (res) { return _this.data = res; });
        // }{
        //   this.ServiceService.update( this.newItem)
        //   .subscribe(contact =>  
        //     this.value = contact);
        this.route.params.subscribe(function (params) {
            console.log(params); //log the entire params object
            console.log(params['id']); //log the value of id
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_3__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/service.service.ts":
/*!************************************!*\
  !*** ./src/app/service.service.ts ***!
  \************************************/
/*! exports provided: ServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceService", function() { return ServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServiceService = /** @class */ (function () {
    function ServiceService(http, router) {
        this.http = http;
        this.router = router;
    }
    ServiceService.prototype.validateCountry = function (country_name) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers }); // Create a request option
        return this.http.post('api/count/', { "country_name": country_name }, options)
            .map(function (res) { return res.json(); });
    };
    ServiceService.prototype.getcountries = function () {
        return this.http.get('assets/countries.json')
            .map(function (res) { return res.json(); });
    };
    ServiceService.prototype.getContacts = function () {
        return this.http.get('api/viewcountry')
            .map(function (res) { return res.json(); });
    };
    ServiceService.prototype.addContact = function (newContact) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.post('api/addcountry', newContact, options)
            .subscribe();
    };
    ServiceService.prototype.deleteTask = function (id) {
        return this.http.delete('api/delete/' + id)
            .map(function (res) { return res.json(); });
    };
    ServiceService.prototype.selectcountrybyid = function (newItem) {
        return this.http.get('api/update/' + newItem)
            .map(function (res) { return res.json(); });
    };
    ServiceService.prototype.updatecountry = function (data, id) {
        console.log("updatevalues" + data, "updatedid" + id);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.put('api/update/' + id, data, options)
            .subscribe(function (data) {
            console.log("mm" + data);
        });
    };
    ServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ServiceService);
    return ServiceService;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n.switch {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 40px;\r\n    height: 22px;\r\n  }\r\n  \r\n  .switch input {display:none;}\r\n  \r\n  .slider {\r\n    position: absolute;\r\n    cursor: pointer;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: #ccc;\r\n    transition: .4s;\r\n  }\r\n  \r\n  .slider:before {\r\n    position: absolute;\r\n    content: \"\";\r\n    height: 18px;\r\n    width: 18px;\r\n    left: 1px;\r\n    bottom: 1px;\r\n    background-color: white;\r\n    transition: .4s;\r\n  }\r\n  \r\n  input:checked + .slider {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n  input:focus + .slider {\r\n    box-shadow: 0 0 1px #2196F3;\r\n  }\r\n  \r\n  input:checked + .slider:before {\r\n    -webkit-transform: translateX(26px);\r\n    transform: translateX(26px);\r\n  }\r\n  \r\n  /* Rounded sliders */\r\n  \r\n  .slider.round {\r\n    border-radius: 22px;\r\n  }\r\n  \r\n  .slider.round:before {\r\n    border-radius: 50%;\r\n  } "

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"row\"> \n  <div class=\"col-md-8 col-sm-8 col-lg-8 col-xs-12\"> \n          <div class=\"form-group\" id=\"search_fields\">\n              <div class=\"input-group\">\n\n                  <input class=\"form-control search_box\" id=\"search\" [(ngModel)]=\"searchText\"  name=\"search\" placeholder=\"Search Country\" style=\"color:#000000;\" type=\"text\">\n                  <span class=\"input-group-addon search_icon\"><span class=\"glyphicon glyphicon-search\"></span></span>\n              </div>\n          </div> \n\n  </div>\n  <div class=\"col-md-4 col-sm-4 col-lg-4 col-xs-12 pull-right\">\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-12\">\n          <a routerLink=\"/addcountry\" class=\"btn btn-danger\">Add Country<span class=\"glyphicon glyphicon-plus\" style=\"margin-left: 8px;\"></span></a>\n          \n      </div>\n      <div class=\"col-md-6 col-sm-6 col-lg-6 col-xs-12\">\n          </div>\n  </div>  \n   \n</div>  \n<div class=\"row\"> \n    <div>\n  <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12 \" *ngFor=\"let contact of contacts  |filter:searchText\" >\n        <div class=\"panel panel-primary\"  >\n                  \n          <div class=\"\" style=\"background-color: lightgrey;padding:3%\">\n    \n    <a type=\"submit\"  class=\"pull-left\"  (click)=\"deleteTask(contact._id)\" ><i class=\"glyphicon glyphicon-trash\" \n        style=\"font-size:20px;color:#676a6c\"></i></a>\n              <a type=\"submit\" class=\"pull-right\" [routerLink]=\"['/editcountry',contact._id]\" ><i class=\"glyphicon glyphicon-pencil\"\n                 style=\"font-size:20px;color:#676a6c\"></i></a>\n            <br> <h4>{{contact.country_name}} </h4> \n          </div>  \n              <div class=\"\" style=\"text-align: center\">\n                    \n                    <img src=\"{{contact.a12}}\" style=\"margin-top:10px;\" width=\"60%\">\n                  \n              </div>    \n\n              \n                   \n              <div class=\"\" style=\"margin-top:22px\" >\n           \n                  <ul class=\"list-group  \">\n                      <li class=\"list-group-item fist-item\">\n                          <span class=\"pull-right\"> {{contact.currencysign}} </span>\n                          Currency Sign\n                      </li>\n                      <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> {{contact. country_code }} </span>\n                          Country Phone Code\n                      </li>\n                      <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> {{contact. currencycode }} </span>\n                          Currency Code\n                      </li>\n                     \n                      <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> \n                              <label class=\"switch\">\n                                  <input type=\"checkbox\" [(ngModel)]=\"contact.a13\" checked>\n                                  <span class=\"slider round\"></span>\n                                </label></span>\n                          Business In Country\n                      </li>   <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> \n                              <label class=\"switch\">\n                                  <input type=\"checkbox\" [(ngModel)]=\"contact.a16\"  checked>\n                                  <span class=\"slider round\"></span>\n                                </label></span>\n                          \n                      Referral For User\n                      </li>   <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> \n                              <label class=\"switch\">\n                                  <input type=\"checkbox\" [(ngModel)]=\"contact.a17\"  checked>\n                                  <span class=\"slider round\"></span>\n                                </label></span>\n                                Referral For Store\n                      </li>   <li class=\"list-group-item\">\n                          <span class=\"pull-right\"> \n                              <label class=\"switch\">\n                                  <input type=\"checkbox\" [(ngModel)]=\"contact.a18\"  checked>\n                                  <span class=\"slider round\"></span>\n                                </label></span>\n                                Referral For Provider\n                      </li> \n                  </ul>\n\n </div>\n</div>\n</div>\n</div>\n</div>\n</div> \n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service.service */ "./src/app/service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(ServiceService, router, route) {
        this.ServiceService = ServiceService;
        this.router = router;
        this.route = route;
    }
    ServicesComponent.prototype.deleteTask = function (id) {
        var _this = this;
        var contact = this.contact;
        this.ServiceService.deleteTask(id).subscribe(function (contact) {
            if (contact.n == 1) {
                for (var i = 0; i < contact.length; i++) {
                    if (contact[i]._id == id) {
                        contact.splice(i, 1);
                    }
                }
            }
            _this.ServiceService.getContacts()
                .subscribe(function (contacts) {
                return _this.contacts = contacts;
            });
        });
    };
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ServiceService.getContacts()
            .subscribe(function (contacts) {
            return _this.contacts = contacts;
        });
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        __metadata("design:paramtypes", [_service_service__WEBPACK_IMPORTED_MODULE_1__["ServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\abcd add view delete\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map