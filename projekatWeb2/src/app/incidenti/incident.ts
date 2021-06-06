export class Incident {
  id: number;
  Name: string;
  Type: string;
  Coordinates: string;
  Adress: string;

  constructor(
    id: number,
    Name: string,
    Type: string,
    Coordinates: string,
    Adress: string
  ) {
    this.id = id;
    this.Name = Name;
    this.Type = Type;
    this.Coordinates = Coordinates;
    this.Adress = Adress;
  }
}
