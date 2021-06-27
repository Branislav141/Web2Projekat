import { Participant } from './Participant';

export class Team {
  id: number;
  name: string;
  participants: Participant[];

  constructor() {
    this.id = 0;
    this.name = '';
    this.participants = [];
  }
}
