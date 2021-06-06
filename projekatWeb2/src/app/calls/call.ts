export class Call {
  callId: number;
  Reason: string;
  Hazard: string;
  Comment: string;

  constructor(callId: number, Reason: string, Hazard: string, Comment: string) {
    this.callId = callId;
    this.Reason = Reason;
    this.Hazard = Hazard;
    this.Comment = Comment;
  }
}
