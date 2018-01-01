import { Directive, ElementRef } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";


@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit
{
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}