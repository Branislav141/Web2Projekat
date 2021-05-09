import { Injectable } from '@angular/core';
import { Call } from 'src/app/calls/call';

@Injectable({
  providedIn: 'root'
})
export class CallService {
  loadCalls() {
    console.log('Ucitavanje callova...');
    return this.mockedCalls();
  }

  mockedCalls(): Array<Call> {
    let allCalls=new Array<Call>();

    const c1 = new Call(
     200,
      'aaa',
      'bbb',
      'ccc',
     
      
    );
    const c2 = new Call(
      200,
       'pera',
       'zika',
       'laza',
       
       
     );
     const c3 = new Call(
      200,
       'pera',
       'zika',
       'laza',
       
       
     );
     const c4 = new Call(
      200,
       'pera',
       'zika',
       'laza',
     
       
     );
     const c5 = new Call(
      200,
       'pera',
       'zika',
       'laza',
       
       
     );
     const c6 = new Call(
      500,
       'pera',
       'zika',
       'laza',
       
       
     );
     const c7 = new Call(
      400,
       'pera',
       'zika',
       'laza',
       
       
     );

     allCalls.push(c1);
     allCalls.push(c2);
     allCalls.push(c3);
     allCalls.push(c4);
     allCalls.push(c5);
     allCalls.push(c6);
     allCalls.push(c7);
    return allCalls;

  

  }

}