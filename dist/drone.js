"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DroneAdapter = exports.Drone = void 0;
var MAX_DRONES = 100;
var Drone = /** @class */ (function () {
    function Drone(name, maxWeight) {
        this.trips = [];
        this.trip = 0;
        this.name = name;
        this.maxWeight = maxWeight;
    }
    Drone.prototype.stock = function (deliveryList) {
        var currentWeight = 0;
        var locations = [];
        var indexes = [];
        for (var index = 0; index < deliveryList.length; index++) {
            if (currentWeight === this.maxWeight)
                break;
            if (deliveryList[index].weight + currentWeight <= this.maxWeight) {
                currentWeight += deliveryList[index].weight;
                locations.push("".concat(deliveryList[index].location));
                indexes.push(index);
            }
        }
        if (indexes.length > 0) {
            this.trip++;
            this.trips.push("Trip #".concat(this.trip, "\n[").concat(locations.join('], ['), "]\n"));
            for (var i = indexes.length - 1; i >= 0; i--) {
                deliveryList.splice(indexes[i], 1);
            }
            locations = [];
            indexes = [];
        }
        return deliveryList;
    };
    Drone.prototype.getTrips = function () {
        return this.trips;
    };
    Drone.prototype.showTrips = function () {
        console.log("[".concat(this.name, "]"));
        for (var _i = 0, _a = this.trips; _i < _a.length; _i++) {
            var trip = _a[_i];
            console.log(trip);
        }
    };
    return Drone;
}());
exports.Drone = Drone;
var DroneAdapter = /** @class */ (function () {
    function DroneAdapter() {
    }
    DroneAdapter.fromString = function (droneString) {
        var DroneList = [];
        var deliverySplited = droneString.split(',');
        while (deliverySplited.length > 1) {
            var drone = deliverySplited[0].replace('[', '').replace(']', '').trim();
            var weight = deliverySplited[1].replace('[', '').replace(']', '').trim();
            if (DroneList.length < MAX_DRONES) {
                DroneList.push(new Drone(drone, Number(weight)));
            }
            else {
                console.log('Max number of drones reached');
                break;
            }
            deliverySplited.splice(0, 2);
        }
        return DroneList;
    };
    return DroneAdapter;
}());
exports.DroneAdapter = DroneAdapter;
