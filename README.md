# angular2-scroll-glue
Angular2 @Component which automatically scrolls to the end of a div on the addition of new elements inside the div.

## [Demo](https://plnkr.co/edit/puGLoHU50EkZ2044pFUo?p=preview)

### Usage

#### Include the directive in the component
``
import ScrollGlue from 'angular2-scroll-glue'

@Component({
  selector: 'my-app',
  providers: [],
  template: template,
  directives: [ScrollGlue]
})
``

#### Add it to any vertically scrollable element in your templete

``
  <div class="demo-scroll-area" scroll-glue>
    <ul>
      <li *ngFor="#item of listItems">
        {{ item }}
      </li>
    </ul>
  </div>
``
