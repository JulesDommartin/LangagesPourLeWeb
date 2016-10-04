import * as NF 			from "../nf/nf";
import {ComponentIHM} 	from "./ComponentIHM";
import {ChoseIHM}		from "./Chose_IHM";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>Liste</h1>
			<div class="task-filters">
				<input class="show-completed" type="checkbox" checked>Show completed tasks<br/>
	            <input class="show-uncompleted" type="checkbox" checked>Show uncompleted taks
            </div>
			<form action="#/">
				<input class="new-todo" placeholder="Que faire?" autofocus>
			</form>
		</header>
		<section class="main">
			<input class="toggle-all" type="checkbox">
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list"></ul>
		</section>
	</section>
`;

// Classe à compléter...
export class ListeChosesIHM extends ComponentIHM {

	liste : ChoseIHM[] = [];
	toggle_all : HTMLInputElement;
	todo_list : Element;
	input : HTMLInputElement;
	form : HTMLFormElement;

	constructor(public NF: NF.ListeChoses, rootSelector) {
		super(NF, document.querySelector( rootSelector ));
		this.root.innerHTML = htmlTemplate;

		this.toggle_all = <HTMLInputElement>this.root.querySelector(".toggle-all");
		this.form 		= <HTMLFormElement >this.root.querySelector("form");
		this.input 		= <HTMLInputElement>this.root.querySelector(".new-todo");

		this.todo_list = this.root.querySelector(".todo-list");

		this.init();
	}

	init() {
		this.NF.on("update", (nf, eN, eV) => this.updateFromNF(nf, eN, eV) );
		this.form.onsubmit = e => {
			e.preventDefault();
			if (this.input.value && this.input.value !== "") {
				this.ajouterChose(this.input.value);
				this.save();
			} else {
				console.log("Le champ est vide");
			}
		};
		// this.toggle_all.onchange = e => this.toggleAll(e);
		if (localStorage.getItem("listeChoses")) {
			console.log(this.retrieve());
			let choses = this.retrieve();
			for (let i = 0; i < choses.length; i++) {
				this.ajouterChose(choses[i].texte, choses[i].fait);
			}
		}
		console.log(localStorage);
	}

	ajouterChose(string, fait? : boolean) {
		// console.log("On ajoute " + string);
		this.NF.Ajouter(string);
		this.input.value = "";
	}

	updateFromNF(nf, eventName, eventValue) {
		console.log("updateFromNF", nf, eventName, eventValue);
		if(eventValue.append) {
			let chose = <NF.Chose>eventValue.append;
			let li = document.createElement("li");
			this.todo_list.appendChild(li);
			this.liste.push( new ChoseIHM(chose, li) );
		}
		if(eventValue.remove) {
			let chose = <NF.Chose>eventValue.remove;
			this.liste.forEach( cihm => {
				if(cihm.NF === chose) {
					cihm.dispose();
				}
			});
		}
		this.save();
	};

	/*
	toggleAll(event) {
		this.liste.forEach((e, i) => {
			e.NF.Fait(this.toggle_all.checked);
		});
	}*/

	save() {
		let choses = [];
		console.log(this.NF.choses);
		for (let i = 0; i < this.NF.choses.length; i++) {
			choses.push({
                texte : this.NF.choses[i].texte,
                fait : this.NF.choses[i].fait
            });
		}
		localStorage.setItem("listeChoses", JSON.stringify(choses));
	}

	retrieve() {
		return JSON.parse(localStorage.getItem("listeChoses"));
	}

};


