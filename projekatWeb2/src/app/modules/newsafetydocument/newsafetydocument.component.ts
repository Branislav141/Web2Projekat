import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsafetydocument',
  templateUrl: './newsafetydocument.component.html',
  styleUrls: ['./newsafetydocument.component.css'],
})
export class NewsafetydocumentComponent implements OnInit {
  showMe: boolean = true;
  showMe5: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggleBasic() {
    this.showMe = true;
    this.showMe5 = false;
  }

  toggleChecklist() {
    this.showMe5 = true;
    this.showMe = false;
  }
}
