import {Directive, ElementRef, Input} from 'angular2/core';


@Directive({
    selector: '[scroll-glue]'
})
export class ScrollGlue {
    public el:any;
    public isLocked: boolean = false;
    private _oldScrollHeight: number = 0;

    constructor(private _el: ElementRef) {
      this.el = _el.nativeElement;
    }

    dataHasBeenAdded() {
      return this._oldScrollHeight != this.el.scrollHeight;
    }

    ngAfterContentInit() {
      this.el.scrollTop = this.el.scrollHeight;
      setInterval(()=> {
        if (!this.isLocked && this.dataHasBeenAdded()) {
          this._oldScrollHeight = this.el.scrollHeight;
          this.el.scrollTop = this.el.scrollHeight;
        }
      }, 0);
    }
}
