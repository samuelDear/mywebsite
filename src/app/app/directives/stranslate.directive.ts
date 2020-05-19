import { Directive, ElementRef, Input, Renderer, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[stranslate]'
})
export class StranslateDirective implements OnInit {
  @Input() stranslate: string;
  @Input() translateValues: any;

  private readonly directiveDestroyed = new Subject<never>();

  constructor(
    public el: ElementRef,
    public renderer: Renderer,
    private translateService: TranslateService
  ) { }

  ngOnInit(){
    this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(() => {
      this.getTranslation();
    });
  }

  ngOnChanges() {
    this.getTranslation();
  }

  private getTranslation() {
    this.translateService
      .get(this.stranslate, this.translateValues)
      .pipe(takeUntil(this.directiveDestroyed))
      .subscribe(
        value => {
          this.el.nativeElement.innerHTML = value;
        },
        () => {
          return `error`;
        }
      );
  }
}
