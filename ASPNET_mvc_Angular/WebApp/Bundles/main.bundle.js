webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-lease/add-lease.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"add-lease.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-lease/add-lease.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n    <br />\r\n    <h1>Calculate Monthly Leasing Rental</h1>\r\n\r\n    <a style=\"float:right\" href=\"/details\">View Leasing Details</a>\r\n    <br />\r\n\r\n    <!--form-->\r\n\r\n  \r\n        <form (ngSubmit)=\"createLease()\" #leaseForm=\"ngForm\">\r\n\r\n            <div class=\"row\">\r\n\r\n                <!--Customer Name-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Customer Name</label>\r\n                        <select class=\"form-control\" [(ngModel)]=\"lease.cusName\" name=\"cusName\" (change)=\"changeOnUserId($event.target.value)\">\r\n                            <option *ngFor=\"let customer of customerList; let i = index\" [value]=\"customer.cusId\">{{customer.cusName}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Vehicle chassis number-->\r\n                <!--automatically selected when customer name select-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Vehicle chassis number</label>\r\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"lease.vehChasiNbr\" name=\"vehChasiNbr\" required disabled>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <!--Lease start date-->\r\n                <!--automatically selected when customer name select-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Lease start date</label>\r\n                        <input type=\"datetime\" class=\"form-control\" [(ngModel)]=\"lease.startDate\" name=\"startDate\" required disabled>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <!--Lease amount-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Lease amount</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"lease.leaseAmount\" name=\"leaseAmount\" required>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                <!--Interest rate-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Interest rate</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"lease.intersetRate\" name=\"intersetRate\" required>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Number of months-->\r\n\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Number of months</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"lease.nbrOfMonths\" name=\"nbrOfMonths\" required>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!--calculate monthly rental-->\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"calculateRental()\">Calculate Rental</button>\r\n            </div>\r\n\r\n            <!--calculated monthly rentel-->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"name\">Your monthly rental</label>\r\n                        <input type=\"number\" class=\"form-control\" [(ngModel)]=\"lease.monthlyRental\" name=\"monthlyRental\" required disabled>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!--Add to db-->\r\n\r\n            <div class=\"form-group\">\r\n                <button type=\"submit\" class=\"btn btn-success btn-lg\" [disabled]=\"!leaseForm.form.valid\">Add to database</button>\r\n            </div>\r\n\r\n\r\n\r\n        </form>\r\n \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/add-lease/add-lease.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddLeaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddLeaseComponent = /** @class */ (function () {
    function AddLeaseComponent(http, router) {
        this.http = http;
        this.router = router;
        this.lease = {};
        this.vehicleData = {};
    }
    AddLeaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/Customer').subscribe(function (data) {
            _this.customerList = data;
        });
    };
    AddLeaseComponent.prototype.calculateRental = function () {
        this.lease.monthlyRental = (this.lease.leaseAmount + ((this.lease.leaseAmount * this.lease.intersetRate) / 100)) / this.lease.nbrOfMonths;
        this.lease.monthlyRental = parseInt(this.lease.monthlyRental);
    };
    AddLeaseComponent.prototype.createLease = function () {
        var _this = this;
        this.http.post('/api/Lease', this.lease)
            .subscribe(function (res) {
            var id = res['Id'];
            _this.router.navigate(['/details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    AddLeaseComponent.prototype.changeOnUserId = function (cusId) {
        var _this = this;
        console.log(cusId);
        this.http.get('/api/Vehicle/', { params: { cusId: cusId } }).subscribe(function (data) {
            console.log("vehicle data :", data);
            _this.vehicleData = data;
            _this.lease.vehChasiNbr = _this.vehicleData.vehChasiNbr;
            _this.lease.startDate = _this.vehicleData.startDate;
        }, function (err) {
            console.log(err);
        });
    };
    AddLeaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-lease',
            template: __webpack_require__("../../../../../src/app/add-lease/add-lease.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-lease/add-lease.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddLeaseComponent);
    return AddLeaseComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"app.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_lease_add_lease_component__ = __webpack_require__("../../../../../src/app/add-lease/add-lease.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lease_details_lease_details_component__ = __webpack_require__("../../../../../src/app/lease-details/lease-details.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    {
        path: 'details/:id',
        component: __WEBPACK_IMPORTED_MODULE_7__lease_details_lease_details_component__["a" /* LeaseDetailsComponent */],
        data: { title: 'Lease Details' }
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__lease_details_lease_details_component__["a" /* LeaseDetailsComponent */],
        data: { title: 'Lease List' }
    },
    {
        path: 'details',
        component: __WEBPACK_IMPORTED_MODULE_7__lease_details_lease_details_component__["a" /* LeaseDetailsComponent */],
        data: { title: 'Lease List' }
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_6__add_lease_add_lease_component__["a" /* AddLeaseComponent */],
        data: { title: 'Add Lease' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__add_lease_add_lease_component__["a" /* AddLeaseComponent */],
                __WEBPACK_IMPORTED_MODULE_7__lease_details_lease_details_component__["a" /* LeaseDetailsComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/lease-details/lease-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"lease-details.component.css","sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lease-details/lease-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <br />\r\n    <h1>\r\n        Leasing Details List\r\n    </h1>\r\n\r\n    <a style=\"float:right\" href=\"/create\">Calculate new lease</a>\r\n    <br />\r\n    <br />\r\n\r\n    <div class=\"card\">\r\n        <table class=\"table\">\r\n            <thead>\r\n                <tr>\r\n                    <th>Customer name</th>\r\n                    <th>Vehicle chassis number</th>\r\n                    <th>Lease start date</th>\r\n                    <th>Lease amount</th>\r\n                    <th>Interest rate</th>\r\n                    <th>Number of months</th>\r\n                    <th>Monthly rental</th>\r\n                    <th colspan=\"2\">Action</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let lease of leaseList\">\r\n\r\n                    <td>{{ lease.cusName }}</td>\r\n                    <td>{{ lease.vehChasiNbr }}</td>\r\n                    <td>{{ lease.startDate }}</td>\r\n                    <td>{{ lease.leaseAmount }}</td>\r\n                    <td>{{ lease.intersetRate }}</td>\r\n                    <td>{{ lease.nbrOfMonths }}</td>\r\n                    <td>{{ lease.monthlyRental }}</td>\r\n                    <td><a [routerLink]=\"\" (click)=\"deleteLease(lease.Id)\">Delete</a></td>\r\n\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/lease-details/lease-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaseDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaseDetailsComponent = /** @class */ (function () {
    function LeaseDetailsComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    LeaseDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/Lease').subscribe(function (data) {
            _this.leaseList = data;
        });
    };
    LeaseDetailsComponent.prototype.deleteLease = function (id) {
        var _this = this;
        this.http.delete('/api/Lease/' + id)
            .subscribe(function (res) {
            _this.ngOnInit();
            _this.router.navigate(['/Lease']);
        }, function (err) {
            console.log(err);
        });
    };
    LeaseDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-lease-details',
            template: __webpack_require__("../../../../../src/app/lease-details/lease-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/lease-details/lease-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LeaseDetailsComponent);
    return LeaseDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map