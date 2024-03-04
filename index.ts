import { open } from 'node:fs/promises';
import { Drone, DroneAdapter } from './drone';
import { Delivery, DeliveryAdapter } from './delivery';

const FIRST = 0;

async function getInputFileList(DroneList: Drone[], DeliveryList: Delivery[]) {
  const file = await open('files/Input')

  let lineIndex = 0;
  for await (const line of file.readLines()) {
    if (lineIndex === 0) {
      DroneList = DroneAdapter.fromString(line);
    } else {
      DeliveryList.push(DeliveryAdapter.fromString(line));
    }
    lineIndex++;
  }

  await file.close();
}

async function writeOutputFile(DroneList: Drone[]) {
  let output = '';
  for (const drone of DroneList) {
    const trips = drone.getTrips();
    output += `[${drone.name}]\n`;
    if (trips.length > 0) {
      output += trips.join('');
    }
    output += '\n';
  }

  const fileOutput = await open('files/Output', 'w');
  await fileOutput.write(output);
  await fileOutput.close();
}

async function main() {
  let DroneList: Drone[] = [];
  let DeliveryList: Delivery[] = [];

  getInputFileList(DroneList, DeliveryList);

  DeliveryList.sort((a, b) => b.weight - a.weight);
  DroneList.sort((a, b) => a.maxWeight - b.maxWeight);

  while (DeliveryList.length > 0) {
    for await (const drone of DroneList) {
      if (drone.maxWeight < DeliveryList[FIRST].weight
        || DeliveryList[FIRST].weight > .8 * drone.maxWeight) {
        continue;
      }
      drone.stock(DeliveryList);

      if (DeliveryList.length === 0) break;
    }
  }

  DroneList.sort((a, b) => a.name.localeCompare(b.name));

  writeOutputFile(DroneList);

  for (const drone of DroneList) {
    drone.showTrips();
  }
}

main();
