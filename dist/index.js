"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var promises_1 = require("node:fs/promises");
var drone_1 = require("./drone");
var delivery_1 = require("./delivery");
var FIRST = 0;
function main() {
    var _a, e_1, _b, _c, _d, e_2, _e, _f;
    return __awaiter(this, void 0, void 0, function () {
        var file, DroneList, DeliveryList, lineIndex, _g, _h, _j, line, e_1_1, _k, DroneList_1, DroneList_1_1, drone, e_2_1, output, _i, DroneList_2, drone, trips, fileOutput, _l, DroneList_3, drone;
        return __generator(this, function (_m) {
            switch (_m.label) {
                case 0: return [4 /*yield*/, (0, promises_1.open)('files/Input')];
                case 1:
                    file = _m.sent();
                    DroneList = [];
                    DeliveryList = [];
                    lineIndex = 0;
                    _m.label = 2;
                case 2:
                    _m.trys.push([2, 7, 8, 13]);
                    _g = true, _h = __asyncValues(file.readLines());
                    _m.label = 3;
                case 3: return [4 /*yield*/, _h.next()];
                case 4:
                    if (!(_j = _m.sent(), _a = _j.done, !_a)) return [3 /*break*/, 6];
                    _c = _j.value;
                    _g = false;
                    line = _c;
                    if (lineIndex === 0) {
                        DroneList = drone_1.DroneAdapter.fromString(line);
                    }
                    else {
                        DeliveryList.push(delivery_1.DeliveryAdapter.fromString(line));
                    }
                    lineIndex++;
                    _m.label = 5;
                case 5:
                    _g = true;
                    return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_1_1 = _m.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _m.trys.push([8, , 11, 12]);
                    if (!(!_g && !_a && (_b = _h.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _b.call(_h)];
                case 9:
                    _m.sent();
                    _m.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13:
                    file.close();
                    DeliveryList.sort(function (a, b) { return b.weight - a.weight; });
                    DroneList.sort(function (a, b) { return a.maxWeight - b.maxWeight; });
                    _m.label = 14;
                case 14:
                    if (!(DeliveryList.length > 0)) return [3 /*break*/, 27];
                    _m.label = 15;
                case 15:
                    _m.trys.push([15, 20, 21, 26]);
                    _k = true, DroneList_1 = (e_2 = void 0, __asyncValues(DroneList));
                    _m.label = 16;
                case 16: return [4 /*yield*/, DroneList_1.next()];
                case 17:
                    if (!(DroneList_1_1 = _m.sent(), _d = DroneList_1_1.done, !_d)) return [3 /*break*/, 19];
                    _f = DroneList_1_1.value;
                    _k = false;
                    drone = _f;
                    if (drone.maxWeight < DeliveryList[FIRST].weight || DeliveryList[FIRST].weight > .8 * drone.maxWeight) {
                        return [3 /*break*/, 18];
                    }
                    drone.stock(DeliveryList);
                    if (DeliveryList.length === 0)
                        return [3 /*break*/, 19];
                    _m.label = 18;
                case 18:
                    _k = true;
                    return [3 /*break*/, 16];
                case 19: return [3 /*break*/, 26];
                case 20:
                    e_2_1 = _m.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 26];
                case 21:
                    _m.trys.push([21, , 24, 25]);
                    if (!(!_k && !_d && (_e = DroneList_1.return))) return [3 /*break*/, 23];
                    return [4 /*yield*/, _e.call(DroneList_1)];
                case 22:
                    _m.sent();
                    _m.label = 23;
                case 23: return [3 /*break*/, 25];
                case 24:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 25: return [7 /*endfinally*/];
                case 26: return [3 /*break*/, 14];
                case 27:
                    DroneList.sort(function (a, b) { return a.name.localeCompare(b.name); });
                    output = '';
                    for (_i = 0, DroneList_2 = DroneList; _i < DroneList_2.length; _i++) {
                        drone = DroneList_2[_i];
                        trips = drone.getTrips();
                        output += "[".concat(drone.name, "]\n");
                        if (trips.length > 0) {
                            output += trips.join('');
                        }
                        output += '\n';
                    }
                    return [4 /*yield*/, (0, promises_1.open)('files/Output', 'w')];
                case 28:
                    fileOutput = _m.sent();
                    return [4 /*yield*/, fileOutput.write(output)];
                case 29:
                    _m.sent();
                    fileOutput.close();
                    for (_l = 0, DroneList_3 = DroneList; _l < DroneList_3.length; _l++) {
                        drone = DroneList_3[_l];
                        drone.showTrips();
                    }
                    return [2 /*return*/];
            }
        });
    });
}
main();
