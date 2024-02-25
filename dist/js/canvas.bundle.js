/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/image/orc.png":
/*!***************************!*\
  !*** ./src/image/orc.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a94e21d28cef22387a76d76febb0ed8.png");

/***/ }),

/***/ "./src/image/projectile.png":
/*!**********************************!*\
  !*** ./src/image/projectile.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "67dcf961fda378063525f69cec6d00cb.png");

/***/ }),

/***/ "./src/image/tower.png":
/*!*****************************!*\
  !*** ./src/image/tower.png ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "949bdb42e6390fb0fc08620fac021030.png");

/***/ }),

/***/ "./src/image/towerDefenseMap.png":
/*!***************************************!*\
  !*** ./src/image/towerDefenseMap.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "beb4da6ad544978b3f43150181964be5.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _image_towerDefenseMap_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../image/towerDefenseMap.png */ "./src/image/towerDefenseMap.png");
/* harmony import */ var _image_orc_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../image/orc.png */ "./src/image/orc.png");
/* harmony import */ var _image_tower_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../image/tower.png */ "./src/image/tower.png");
/* harmony import */ var _image_projectile_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image/projectile.png */ "./src/image/projectile.png");
/* harmony import */ var _waypoints_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./waypoints.js */ "./src/js/waypoints.js");
/* harmony import */ var _placementtile_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./placementtile.js */ "./src/js/placementtile.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }






var canvas = document.querySelector('canvas');
canvas.width = 1280;
canvas.height = 768;
var c = canvas.getContext('2d');
var towerDefenseMap = new Image();
towerDefenseMap.src = _image_towerDefenseMap_png__WEBPACK_IMPORTED_MODULE_0__["default"];
var orcImage = new Image();
orcImage.src = _image_orc_png__WEBPACK_IMPORTED_MODULE_1__["default"];
var towerImage = new Image();
towerImage.src = _image_tower_png__WEBPACK_IMPORTED_MODULE_2__["default"];
var projectileImage = new Image();
projectileImage.src = _image_projectile_png__WEBPACK_IMPORTED_MODULE_3__["default"];
var placementtileData2D = [];
for (var i = 0; i < _placementtile_js__WEBPACK_IMPORTED_MODULE_5__["default"].length; i = i + 20) {
  placementtileData2D.push(_placementtile_js__WEBPACK_IMPORTED_MODULE_5__["default"].slice(i, i + 20));
}
towerDefenseMap.onload = function () {
  orcImage.onload = function () {
    towerImage.onload = function () {
      projectileImage.onload = function () {
        animate();
      };
    };
  };
};
var passedNum = 0;
var placementtile = /*#__PURE__*/function () {
  function placementtile() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    };
    _classCallCheck(this, placementtile);
    this.position = position;
    this.size = 64;
    this.color = "rgba(255,255,255,0.15)";
    this.isOccupied = false;
  }
  _createClass(placementtile, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = this.color;
      c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
  }, {
    key: "update",
    value: function update(mouse) {
      if (mouse.x > this.position.x && mouse.x < this.position.x + this.size && mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
        this.color = "white";
      } else {
        this.color = "rgba(255,255,255,0.15)";
      }
      this.draw();
    }
  }]);
  return placementtile;
}();
var enemy = /*#__PURE__*/function () {
  function enemy() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    };
    _classCallCheck(this, enemy);
    this.position = position;
    this.wayPointsIndex = 0;
    this.width = 100;
    this.height = 100;
    this.radis = 50;
    this.heath = 100;
    this.imageIndex = 0;
    this.frame = 0;
  }
  _createClass(enemy, [{
    key: "draw",
    value: function draw() {
      /*
      c.beginPath()
      c.arc(this.position.x,this.position.y,this.radis,0,Math.PI*2)
      c.fillStyle = "red"
      c.fill()
      c.closePath()
      */
      if (this.frame % 10 == 0) {
        this.imageIndex++;
      }
      this.frame++;
      c.drawImage(orcImage, this.imageIndex * orcImage.width / 7, 0, orcImage.width / 7, 79, this.position.x, this.position.y, orcImage.width / 7, 79);
      if (this.imageIndex == 7) {
        this.imageIndex = 0;
      }
      c.fillStyle = "green";
      c.fillRect(this.position.x - this.radis, this.position.y - 15 - this.radis - 15, this.width, 20);
      c.fillStyle = "red";
      c.fillRect(this.position.x - this.radis + this.width, this.position.y - 15 - this.radis - 15, -this.width * (1 - this.heath / 100), 20);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      var ydistance = _waypoints_js__WEBPACK_IMPORTED_MODULE_4__["default"][this.wayPointsIndex].y - this.position.y;
      var xdistance = _waypoints_js__WEBPACK_IMPORTED_MODULE_4__["default"][this.wayPointsIndex].x - this.position.x;
      var redian = Math.atan2(ydistance, xdistance);
      this.position.x = this.position.x + Math.cos(redian);
      this.position.y = this.position.y + Math.sin(redian);
      if (Math.round(this.position.x) == Math.round(_waypoints_js__WEBPACK_IMPORTED_MODULE_4__["default"][this.wayPointsIndex].x) && Math.round(this.position.y) == Math.round(_waypoints_js__WEBPACK_IMPORTED_MODULE_4__["default"][this.wayPointsIndex].y) && this.wayPointsIndex < _waypoints_js__WEBPACK_IMPORTED_MODULE_4__["default"].length - 1) {
        this.wayPointsIndex++;
      }
    }
  }]);
  return enemy;
}();
var enemyArr = [];
var enemyCountNum = 5;
function enemyIn(enemyCountNum) {
  for (var i = 1; i < enemyCountNum; i++) {
    enemyArr.push(new enemy({
      x: -150 * i,
      y: 489
    }));
  }
}
enemyIn(enemyCountNum);
var placementtileArr = [];
placementtileData2D.forEach(function (column, y) {
  column.forEach(function (row, x) {
    if (row == 14) {
      placementtileArr.push(new placementtile({
        x: 64 * x,
        y: 64 * y
      }));
    }
  });
});
var animationId;
function animate() {
  animationId = requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.drawImage(towerDefenseMap, 0, 0, canvas.width, canvas.height);
  for (var i = 0; i < enemyArr.length; i++) {
    enemyArr[i].update();
    if (enemyArr[i].position.x > canvas.width) {
      enemyArr.splice(i, 1);
      passedNum++;
      i--;
    }
  }
  if (passedNum >= 10) {
    cancelAnimationFrame(animationId);
    var ele = document.querySelector("#gameOver");
    ele.style.display = "flex";
  }
  if (enemyArr.length == 0) {
    enemyCountNum = enemyCountNum + 5;
    enemyIn(enemyCountNum);
  }
  placementtileArr.forEach(function (placement) {
    placement.update(mouse);
  });
  buildingArr.forEach(function (building) {
    building.update();
    if (building.enemys.length > 0) {
      var _loop = function _loop() {
          var projecttile = building.projectTiles[i];
          xdistance = projecttile.position.x - projecttile.enemy.position.x;
          ydistance = projecttile.position.y - projecttile.enemy.position.y;
          distance = Math.sqrt(xdistance * xdistance + ydistance * ydistance);
          if (distance <= projecttile.radis + projecttile.enemy.radis) {
            building.projectTiles.splice(i, 1);
            i--;
            console.log(enemyArr);
            projecttile.enemy.heath = projecttile.enemy.heath - 20;
            if (projecttile.enemy.heath <= 0) {
              var enemyIndex = enemyArr.findIndex(function (enemy) {
                return projecttile.enemy === enemy;
              });
              if (enemyIndex > -1) {
                debugger;
                enemyArr.splice(enemyIndex, 1);
              }
            }
            console.log(enemyArr);
          } else {
            projecttile.update();
          }
        },
        xdistance,
        ydistance,
        distance;
      //碰撞检测
      for (var i = 0; i < building.projectTiles.length; i++) {
        _loop();
      }
    }
  });
}
var mouse = {
  x: undefined,
  y: undefined
};
canvas.addEventListener('click', function (event) {
  if (activeTile && !activeTile.isOccupied) {
    buildingArr.push(new Building({
      x: activeTile.position.x,
      y: activeTile.position.y
    }));
    activeTile.isOccupied = true;
  }
});
var buildingArr = [];
var activeTile;
window.addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
  activeTile = null;
  for (var i = 0; i < placementtileArr.length; i++) {
    if (mouse.x > placementtileArr[i].position.x && mouse.x < placementtileArr[i].position.x + placementtileArr[i].size && mouse.y > placementtileArr[i].position.y && mouse.y < placementtileArr[i].position.y + placementtileArr[i].size) {
      activeTile = placementtileArr[i];
      break;
    }
  }
});
var Building = /*#__PURE__*/function () {
  function Building() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    };
    _classCallCheck(this, Building);
    this.position = position;
    this.center = {
      x: this.position.x + 64,
      y: this.position.y + 32
    };
    this.projectTiles = [];
    this.radis = 200;
    //进入攻击范围的敌人
    this.enemys = [];
    this.index = 500;
    this.imageIndex = 0;
  }
  _createClass(Building, [{
    key: "draw",
    value: function draw() {
      /*
      c.fillStyle='blue'
      c.fillRect(this.position.x,this.position.y,128,64)
      c.beginPath()
      c.arc(this.center.x,this.center.y,this.radis,0,Math.PI*2)
      c.fillStyle = "rgba(0,0,255,0.1)"
      c.fill()
      c.closePath()
      */
      c.drawImage(towerImage, this.imageIndex * towerImage.width / 19, 0, towerImage.width / 19, 144, this.position.x, this.position.y, towerImage.width / 19, 144);
      this.imageIndex++;
      if (this.imageIndex == 19) {
        this.imageIndex = 0;
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this = this;
      this.draw();
      //计算进入攻击范围的敌人
      this.enemys = [];
      enemyArr.forEach(function (enemy) {
        var xdistance = _this.center.x - enemy.position.x;
        var ydistance = _this.center.y - enemy.position.y;
        var distance = Math.sqrt(xdistance * xdistance + ydistance * ydistance);
        if (distance <= _this.radis + enemy.radis) {
          _this.enemys.push(enemy);
        }
        if (_this.enemys.length > 0) {
          //this.projectTiles = []
          if (_this.index % 500 == 0) {
            _this.projectTiles.push(new projectTile({
              x: _this.center.x,
              y: _this.center.y
            }, _this.enemys[0]));
            _this.index = 500;
          }
        }
        _this.index++;
      });
      console.log(this.enemys);
    }
  }]);
  return Building;
}();
var projectTile = /*#__PURE__*/function () {
  function projectTile() {
    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      x: 0,
      y: 0
    };
    var enemy = arguments.length > 1 ? arguments[1] : undefined;
    _classCallCheck(this, projectTile);
    this.position = position;
    this.velocity = {
      x: 0,
      y: 0
    };
    this.enemy = enemy;
    this.radis = 10;
    this.index = 0;
  }
  _createClass(projectTile, [{
    key: "draw",
    value: function draw() {
      /*
      c.beginPath()
      c.arc(this.position.x,this.position.y,this.radis,0,Math.PI*2)
      c.fillStyle = "orange"
      c.fill()
      */
      c.drawImage(projectileImage, this.position.x, this.position.y, projectileImage.width, projectileImage.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      var radian = Math.atan2(this.enemy.position.y - this.position.y, this.enemy.position.x - this.position.x);
      this.velocity.x = Math.cos(radian);
      this.velocity.y = Math.sin(radian);
      this.position.x = this.position.x + this.velocity.x;
      this.position.y = this.position.y + this.velocity.y;
    }
  }]);
  return projectTile;
}();

/***/ }),

/***/ "./src/js/placementtile.js":
/*!*********************************!*\
  !*** ./src/js/placementtile.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var placementtileData = [0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 13, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 0, 14, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 14, 0, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
/* harmony default export */ __webpack_exports__["default"] = (placementtileData);

/***/ }),

/***/ "./src/js/waypoints.js":
/*!*****************************!*\
  !*** ./src/js/waypoints.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var wayPoints = [{
  "x": -117,
  "y": 489
}, {
  "x": 286,
  "y": 487
}, {
  "x": 290,
  "y": 162
}, {
  "x": 737,
  "y": 166
}, {
  "x": 738,
  "y": 418
}, {
  "x": 606,
  "y": 414
}, {
  "x": 607,
  "y": 674
}, {
  "x": 1057,
  "y": 679
}, {
  "x": 1055,
  "y": 286
}, {
  "x": 1348,
  "y": 290
}];
/* harmony default export */ __webpack_exports__["default"] = (wayPoints);

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map