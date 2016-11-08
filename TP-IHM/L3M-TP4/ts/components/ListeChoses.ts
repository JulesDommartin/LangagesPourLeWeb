import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
	<section class="todoapp">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (ngSubmit)="Ajouter(newTodo.value); newTodo.value=''">
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus>
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all" 
			        type="checkbox"
			        />
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			    <li *ngFor="let chose of getChoses()"
			         [class.editing]="item.editing"
			         [class.completed]="item.nf.fait"
			    >
			        <item-chose [nf]="chose" #item ></item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong>{{getNbRestantes()}}</strong> restante{{getNbRestantes()>1?'s':''}}</span>
            <ul class="filters">
                <li>
                    <a [class.selected]="this.filter === filterAll" (click)="this.filter = filterAll">Tous</a>
                </li>
                <li>
                    <a [class.selected]="this.filter === filterActives" (click)="this.filter = filterActives">Actifs</a>
                </li>
                <li>
                    <a [class.selected]="this.filter === filterCompleted" (click)="this.filter = filterCompleted">Complétés</a>
                </li>
            </ul>
            <button (click)="removeAllChecked()" class="clear-completed">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<section>
        <!--<section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>-->
	</section>
`;

type filterChose = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre	: string;
    public nf       : ListeChosesNF;
    private filter  : filterChose;
    private choses  : Chose[] = [];
    filterAll       : filterChose = ( ) => true;
    filterCompleted : filterChose = (c) => c.fait;
    filterActives   : filterChose = (c) => !c.fait;
	constructor		(private serviceListe: ListeChosesService) {
	    this.filter = this.filterAll;
	};
    ngOnInit(): void {
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter( this.filter );
    }
    Ajouter(text: string) {
        if (text !== "") {
            this.nf.Ajouter(text);
        }
    }
    removeAllChecked() {
        this.choses.filter( this.filterCompleted ).forEach( c => c.dispose() );
    }
    getNbRestantes() {
        return this.choses.filter( this.filterActives ).length;
    }
}

