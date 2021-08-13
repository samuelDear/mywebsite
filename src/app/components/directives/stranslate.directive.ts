import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[stranslate]',
})
export class StranslateDirective implements OnInit {
  @Input() stranslate: any;
  @Input() translateValues: any;

  private readonly directiveDestroyed = new Subject<never>();

  // eslint-disable-next-line no-unused-vars
  constructor(public el: ElementRef, public renderer: Renderer2, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.onLangChange.pipe(takeUntil(this.directiveDestroyed)).subscribe(() => {
      this.getTranslation();
    });
  }

  ngOnChanges(): void {
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
        },
      );
  }
}
