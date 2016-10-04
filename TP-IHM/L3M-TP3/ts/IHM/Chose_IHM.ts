import * as NF 			from "../nf/nf";
import {ComponentIHM} 	from "./ComponentIHM";

const htmlTemplate = `
	<div class="view">
		<input class="toggle" type="checkbox">
		<label class="texte"></label>
		<button class="destroy"></button> 
	</div>
`;

// Classe à compléter...
export class ChoseIHM extends ComponentIHM {

    texte : string;
    toggle : HTMLInputElement;
    label : HTMLLabelElement;
    destroy : HTMLButtonElement;

	constructor(public NF: NF.Chose, public root: Element, fait? : boolean) {
		super(NF, root);
		this.root.innerHTML = htmlTemplate;
        if (fait !== undefined) {
            this.NF.fait = fait;
        }
        this.init();
	}

	init() {
	    let root = <HTMLElement>this.root;
	    this.destroy    = <HTMLButtonElement> this.root.querySelector(".destroy");
        this.toggle     = <HTMLInputElement> this.root.querySelector(".toggle");
        this.label      = <HTMLLabelElement>this.root.querySelector(".texte");
        this.label.textContent = this.NF.texte;

        // NF -> HTML
        this.NF.on("update", (nf, eN, eV) => this.update(nf, eN, eV));

        // HTML -> NF
        this.destroy.onclick    = e => this.destroyclick(e);
        this.toggle.onclick     = e => this.toggleclick(e);
        root.ondblclick         = e => this.dblclick(e);
    }

    update(nf, eN, eV) {
        if(this.NF.fait) {
            this.toggle.checked = true;
            this.root.classList.add("completed");
        } else {
            this.toggle.checked = false;
            this.root.classList.remove("completed");
        }
        if (eV.texte) {
            this.label.textContent = eV.texte;
        }
        if(eV.fait) {
            this.toggle.checked = eV.fait;
        }

    };

    destroyclick = function (event) {
        event.preventDefault();
        this.NF.dispose();
    };

    toggleclick = function (event) {
        event.preventDefault();
        this.NF.Fait(!this.NF.fait);
    };

    dblclick = function (event) {
        event.preventDefault();
        // On doit créer une balise "form"
        let form = document.createElement("form");
        form.setAttribute("action","#/");

        // On doit ajouter à cet élément un élément input de type text ayant la class "edit"
        let input = document.createElement("input");
        input.setAttribute("type","text");
        input.classList.toggle("edit");
        input.value = this.NF.texte;

        //On ajoute une fonction sur le submit du formulaire de modification
        form.onsubmit = (e) => {
            e.preventDefault();
            this.NF.Texte(input.value);
            this.root.classList.toggle("editing");
            form.parentElement.removeChild(form);
        };
        /*
        input.onblur = (e) => {
            e.preventDefault();
            this.NF.Texte(input.value);
            this.root.classList.toggle("editing");
            form.parentElement.removeChild(form);
        };*/

        form.appendChild(input);

        // On doit ajouter la classe "editing" à l'élément root
        this.root.classList.toggle("editing");
        this.root.appendChild(form);
    };
}
