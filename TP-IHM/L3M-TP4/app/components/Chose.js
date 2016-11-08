System.register(["@angular/core", "@NoyauFonctionnel/nf"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, nf_1;
    var htmlTemplate, ItemChose;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
		        [ngModel]       = "nf.fait"
		        (ngModelChange) = "nf.Fait($event)"
		        />
		<label (dblclick)="edit(true)" 	class="texte">{{nf.texte}}</label>
		<button (click)="remove()" class="destroy"></button>
	</div>
	<form (ngSubmit)="changeText(editInput.value)">
		<input [ngModel]="nf.texte" name="texte" class="edit" (blur)="edit(false)" #editInput/>
	</form>
`;
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                remove() {
                    this.nf.dispose();
                }
                edit(b) {
                    this.editing = b;
                    if (b) {
                        requestAnimationFrame(() => {
                            this.editInput.nativeElement.focus();
                        });
                    }
                }
                changeText(text) {
                    this.nf.Texte(text);
                    this.editing = false;
                }
                complete(val) {
                    this.nf.Fait(val);
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("editInput"), 
                __metadata('design:type', Object)
            ], ItemChose.prototype, "editInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [])
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUdNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Q0FhcEIsQ0FBQztZQU1GO2dCQUFBO29CQUVnQixZQUFPLEdBQWEsS0FBSyxDQUFDO2dCQW9CMUMsQ0FBQztnQkFsQkcsTUFBTTtvQkFDRixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0QixDQUFDO2dCQUNELElBQUksQ0FBQyxDQUFXO29CQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNILHFCQUFxQixDQUFFOzRCQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDekMsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQztnQkFDTCxDQUFDO2dCQUNELFVBQVUsQ0FBQyxJQUFhO29CQUNwQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUM7Z0JBQ0QsUUFBUSxDQUFDLEdBQVk7b0JBQ2pCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLEdBQUcsQ0FBRSxDQUFDO2dCQUN4QixDQUFDO1lBQ0wsQ0FBQztZQXJCQTtnQkFBQyxZQUFLLEVBQUU7O2lEQUFBO1lBRUw7Z0JBQUMsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7O3dEQUFBO1lBUDNCO2dCQUFDLGdCQUFTLENBQUM7b0JBQ1QsUUFBUSxFQUFJLFlBQVk7b0JBQ3hCLFFBQVEsRUFBSSxZQUFZO2lCQUN6QixDQUFDOzt5QkFBQTtZQUNGLGlDQXNCQyxDQUFBIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtDaG9zZX0gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PGRpdiBjbGFzcz1cInZpZXdcIj5cblx0XHQ8aW5wdXQgXHRjbGFzc1x0XHRcdD0gXCJ0b2dnbGVcIiBcblx0XHRcdFx0dHlwZVx0XHRcdD0gXCJjaGVja2JveFwiIFxuXHRcdCAgICAgICAgW25nTW9kZWxdICAgICAgID0gXCJuZi5mYWl0XCJcblx0XHQgICAgICAgIChuZ01vZGVsQ2hhbmdlKSA9IFwibmYuRmFpdCgkZXZlbnQpXCJcblx0XHQgICAgICAgIC8+XG5cdFx0PGxhYmVsIChkYmxjbGljayk9XCJlZGl0KHRydWUpXCIgXHRjbGFzcz1cInRleHRlXCI+e3tuZi50ZXh0ZX19PC9sYWJlbD5cblx0XHQ8YnV0dG9uIChjbGljayk9XCJyZW1vdmUoKVwiIGNsYXNzPVwiZGVzdHJveVwiPjwvYnV0dG9uPlxuXHQ8L2Rpdj5cblx0PGZvcm0gKG5nU3VibWl0KT1cImNoYW5nZVRleHQoZWRpdElucHV0LnZhbHVlKVwiPlxuXHRcdDxpbnB1dCBbbmdNb2RlbF09XCJuZi50ZXh0ZVwiIG5hbWU9XCJ0ZXh0ZVwiIGNsYXNzPVwiZWRpdFwiIChibHVyKT1cImVkaXQoZmFsc2UpXCIgI2VkaXRJbnB1dC8+XG5cdDwvZm9ybT5cbmA7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3Rvclx0XHQ6IFwiaXRlbS1jaG9zZVwiLFxuICB0ZW1wbGF0ZVx0XHQ6IGh0bWxUZW1wbGF0ZVxufSlcbmV4cG9ydCBjbGFzcyBJdGVtQ2hvc2Uge1xuXHRASW5wdXQoKSBcdG5mXHRcdDogQ2hvc2U7XG4gICAgICAgICAgICAgICAgZWRpdGluZyA6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKFwiZWRpdElucHV0XCIpIGVkaXRJbnB1dDsgLy8gUsOpZsOpcmVuY2Ugw6AgbGEgYmFsaXNlIGlkZW50aWZpw6kgZWRpdElucHV0IGR1IHRlbXBsYXRlXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICB0aGlzLm5mLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgZWRpdChiIDogYm9vbGVhbikge1xuICAgICAgICB0aGlzLmVkaXRpbmcgPSBiO1xuICAgICAgICBpZihiKSB7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoICgpID0+IHsgLy8gUG91ciBkb25uZXIgbGUgZm9jdXMgcXVhbmQgbGEgYmFsaXNlIGlucHV0IHNlcmEgYWZmaWNow6llXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlVGV4dCh0ZXh0IDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMubmYuVGV4dGUodGV4dCk7XG4gICAgICAgIHRoaXMuZWRpdGluZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjb21wbGV0ZSh2YWw6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5uZi5GYWl0KCB2YWwgKTtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
