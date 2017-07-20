import {async, TestBed} from "@angular/core/testing";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {ButtonComponent} from "./button.component";
import {DndModule, DragDropConfig, DragDropService} from "ng2-dnd";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";

describe('button component spec', () => {
	beforeEach((done) => TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [ButtonComponent],
			providers: [
				DragDropService, DragDropConfig,
			],
			imports: [DndModule]
		}).compileComponents().then(done)
	);

	it('tests button click generates buttonClick event', async(() => {
		const fixture = TestBed.createComponent(ButtonComponent);
		fixture.detectChanges();
		const compiled = fixture.debugElement.children[0].nativeElement; // the button
		fixture.nativeElement.addEventListener('buttonClick', (ev) => {
			expect(ev.detail).toBeDefined()
		});
		compiled.click();
	}));
});
