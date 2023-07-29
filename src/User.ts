import { faker } from "@faker-js/faker";
import { Mappable } from "./CustomMap";

//makes sure to satisfies the mappable interface. have ttypescript tell us to check this. 
export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  }
  color: string = 'red';
  constructor () {
    this.name = faker.person.firstName()
    this.location = {
      lat: faker.location.latitude(),
      lng: faker.location.longitude()
    }
  }
  markerContent (): string {
    return `User name: ${this.name}`
  }
}