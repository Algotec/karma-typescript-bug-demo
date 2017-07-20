import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output} from "@angular/core";
import difference from "lodash-es/difference";

@Component({
	selector: "alg-button",
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
	@Output() buttonClick = new EventEmitter();

	constructor(private elemRef: ElementRef) {
	}


	ngOnInit() {
		// lets try to use difference
		const a = [1, 2, 3];
		const b = [2, 3, 4];
		const c = difference(a, b);
	}

	@HostListener('click')
	onClick() {
		this.buttonClick.emit({});
	}

}
