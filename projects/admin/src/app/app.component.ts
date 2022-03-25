import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin';
  currentIndex =0;
  // viewSettings = false;

  constructor(){}

  changeSelection(index: number){
    console.log('changeSelection',index)

    this.currentIndex = index;
  }

  // changeSelection(value: )

  // selectSettings() {
  //   this.viewSettings = true;
  //   this.viewInventory = false;

  // }

}
