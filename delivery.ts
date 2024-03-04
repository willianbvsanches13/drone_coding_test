export class Delivery {
  location: string;
  weight: number;
  constructor(location: string, weight: number) {
    this.location = location;
    this.weight = weight;
  }
}

export class DeliveryAdapter {
  static fromString(deliveryString: string): Delivery {
    const deliverySplited = deliveryString.split(',');
    const location = deliverySplited[0].replace('[', '').replace(']', '').trim();
    const weight = deliverySplited[1].replace('[', '').replace(']', '').trim();
    return new Delivery(location, Number(weight));
  }
}
