import {Component} from 'angular2/core'
import {ScrollGlue} from './angular2-scroll-glue'


@Component({
    selector: 'app',
    styles: [`

      .demo-scroll-area {
        width: 200px;
        height: 300px;
        background: rgb(212, 176, 161);
        overflow-y: scroll;
      }
      li {
        padding-top: 20px;
        padding-bottom: 20px;
      }
      li:hover {
        background: rgb(182, 150, 136);
      }
      `],
    template: `
    <h3> Flesh Coloured Demo List</h3>
    <button (click)="addItem()">Add Item</button>
    <div class="demo-scroll-area" scroll-glue>
      <ul>
        <li *ngFor="#item of listItems">
          {{ item }}
        </li>
      </ul>
    </div>`,
    directives: [ScrollGlue]
})
export class App {
  public listItems:any = [];
  public count:number = 100;

  constructor() {
    for (var i = 0; i < this.count; i++) {
        this.listItems.push(`Item number ${i}`);
    }
  }

  addItem() {
    this.listItems.push(`Item number ${this.count++}`);
  }
}
