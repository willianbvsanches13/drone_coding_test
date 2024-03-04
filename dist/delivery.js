"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryAdapter = exports.Delivery = void 0;
var Delivery = /** @class */ (function () {
    function Delivery(location, weight) {
        this.location = location;
        this.weight = weight;
    }
    return Delivery;
}());
exports.Delivery = Delivery;
var DeliveryAdapter = /** @class */ (function () {
    function DeliveryAdapter() {
    }
    DeliveryAdapter.fromString = function (deliveryString) {
        var deliverySplited = deliveryString.split(',');
        var location = deliverySplited[0].replace('[', '').replace(']', '').trim();
        var weight = deliverySplited[1].replace('[', '').replace(']', '').trim();
        return new Delivery(location, Number(weight));
    };
    return DeliveryAdapter;
}());
exports.DeliveryAdapter = DeliveryAdapter;
