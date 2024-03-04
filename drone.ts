import { Delivery } from './delivery';

const MAX_DRONES = 100;

export class Drone {
  name: string;
  maxWeight: number;
  private trips: string[] = [];
  private trip: number = 0;
  constructor(name: string, maxWeight: number) {
    this.name = name;
    this.maxWeight = maxWeight;
  }

  stock(deliveryList: Delivery[]): Delivery[] {
    let currentWeight = 0;
    let locations: string[] = [];
    let indexes: number[] = [];
    for (let index = 0; index < deliveryList.length; index++) {
      if (currentWeight === this.maxWeight) break;

      if (deliveryList[index].weight + currentWeight <= this.maxWeight) {
        currentWeight += deliveryList[index].weight;
        locations.push(`${deliveryList[index].location}`);
        indexes.push(index);
      }
    }
    if (indexes.length > 0) {
      this.trip++;
      this.trips.push(`Trip #${this.trip}\n[${locations.join('], [')}]\n`);
      for (let i = indexes.length - 1; i >= 0; i--) {
        deliveryList.splice(indexes[i], 1);
      }
      locations = [];
      indexes = [];
    }
    return deliveryList;
  }

  getTrips(): string[] {
    return this.trips;
  }

  showTrips() {
    console.log(`[${this.name}]`);
    for (const trip of this.trips) {
      console.log(trip);
    }
  }
}

export class DroneAdapter {
  static fromString(droneString: string): Drone[] {
    const DroneList: Drone[] = [];
    const deliverySplited = droneString.split(',');
    while (deliverySplited.length > 1) {
      const drone = deliverySplited[0].replace('[', '').replace(']', '').trim();
      const weight = deliverySplited[1].replace('[', '').replace(']', '').trim();
      if (DroneList.length < MAX_DRONES) {
        DroneList.push(new Drone(drone, Number(weight)));
      } else {
        console.log('Max number of drones reached');
        break;
      }
      deliverySplited.splice(0, 2);
    }
    return DroneList;
  }
}
