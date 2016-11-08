import { Component, Input, ViewChild } from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
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

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})
export class ItemChose {
	@Input() 	nf		: Chose;
                editing : boolean = false;
    @ViewChild("editInput") editInput; // Référence à la balise identifié editInput du template
    remove() {
        this.nf.dispose();
    }
    edit(b : boolean) {
        this.editing = b;
        if(b) {
            requestAnimationFrame( () => { // Pour donner le focus quand la balise input sera affichée
                this.editInput.nativeElement.focus();
            });
        }
    }
    changeText(text : string) {
        this.nf.Texte(text);
        this.editing = false;
    }
    complete(val: boolean) {
        this.nf.Fait( val );
    }
}

