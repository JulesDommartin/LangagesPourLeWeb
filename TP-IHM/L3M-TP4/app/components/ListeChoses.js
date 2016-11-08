System.register(["@angular/core", "@NoyauFonctionnel/service"], function(exports_1, context_1) {
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
    var core_1, service_1;
    var htmlTemplate, ListeChoses;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }],
        execute: function() {
            htmlTemplate = `
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
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = () => true;
                    this.filterCompleted = (c) => c.fait;
                    this.filterActives = (c) => !c.fait;
                    this.filter = this.filterAll;
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.filter);
                }
                Ajouter(text) {
                    if (text !== "") {
                        this.nf.Ajouter(text);
                    }
                }
                removeAllChecked() {
                    this.choses.filter(this.filterCompleted).forEach(c => c.dispose());
                }
                getNbRestantes() {
                    return this.choses.filter(this.filterActives).length;
                }
            };
            __decorate([
                core_1.Input(), 
                __metadata('design:type', String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }), 
                __metadata('design:paramtypes', [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUlNLFlBQVk7Ozs7Ozs7Ozs7WUFBWixZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBNENwQixDQUFDO1lBT0Y7Z0JBUUMsWUFBc0IsWUFBZ0M7b0JBQWhDLGlCQUFZLEdBQVosWUFBWSxDQUFvQjtvQkFKM0MsV0FBTSxHQUFjLEVBQUUsQ0FBQztvQkFDL0IsY0FBUyxHQUF1QixNQUFPLElBQUksQ0FBQztvQkFDNUMsb0JBQWUsR0FBaUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDOUMsa0JBQWEsR0FBbUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUU5QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLENBQUM7O2dCQUNFLFFBQVE7b0JBQ0osNEJBQWtCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFFLENBQUMsRUFBRTt3QkFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBTyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQztvQkFDNUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsQ0FBQztnQkFDRCxTQUFTO29CQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUM7Z0JBQzdDLENBQUM7Z0JBQ0QsT0FBTyxDQUFDLElBQVk7b0JBQ2hCLEVBQUUsQ0FBQyxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNkLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUMxQixDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsZ0JBQWdCO29CQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO2dCQUMzRSxDQUFDO2dCQUNELGNBQWM7b0JBQ1YsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFFLElBQUksQ0FBQyxhQUFhLENBQUUsQ0FBQyxNQUFNLENBQUM7Z0JBQzNELENBQUM7WUFDTCxDQUFDO1lBOUJHO2dCQUFDLFlBQUssRUFBRTs7c0RBQUE7WUFMWjtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxjQUFjO29CQUMxQixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQzs7MkJBQUE7WUFDRixxQ0ErQkMsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9ICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzIGFzIExpc3RlQ2hvc2VzTkZ9IFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XG5pbXBvcnQge0xpc3RlQ2hvc2VzU2VydmljZX0gICAgICAgICAgICAgICAgICAgICBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwidG9kb2FwcFwiPlxuXHRcdDxoZWFkZXIgY2xhc3M9XCJoZWFkZXJcIj5cblx0XHRcdDxoMT57e3RpdHJlfX08L2gxPlxuXHRcdFx0PGZvcm0gKG5nU3VibWl0KT1cIkFqb3V0ZXIobmV3VG9kby52YWx1ZSk7IG5ld1RvZG8udmFsdWU9JydcIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIiAjbmV3VG9kbyBhdXRvZm9jdXM+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XG5cdFx0XHQ8aW5wdXQgIGNsYXNzPVwidG9nZ2xlLWFsbFwiIFxuXHRcdFx0ICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0ICAgICAgICAvPlxuXHRcdFx0PGxhYmVsIGZvcj1cInRvZ2dsZS1hbGxcIj5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG5cdFx0XHQ8dWwgY2xhc3M9XCJ0b2RvLWxpc3RcIj5cblx0XHRcdCAgICA8bGkgKm5nRm9yPVwibGV0IGNob3NlIG9mIGdldENob3NlcygpXCJcblx0XHRcdCAgICAgICAgIFtjbGFzcy5lZGl0aW5nXT1cIml0ZW0uZWRpdGluZ1wiXG5cdFx0XHQgICAgICAgICBbY2xhc3MuY29tcGxldGVkXT1cIml0ZW0ubmYuZmFpdFwiXG5cdFx0XHQgICAgPlxuXHRcdFx0ICAgICAgICA8aXRlbS1jaG9zZSBbbmZdPVwiY2hvc2VcIiAjaXRlbSA+PC9pdGVtLWNob3NlPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXHRcdDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b2RvLWNvdW50XCI+PHN0cm9uZz57e2dldE5iUmVzdGFudGVzKCl9fTwvc3Ryb25nPiByZXN0YW50ZXt7Z2V0TmJSZXN0YW50ZXMoKT4xPydzJzonJ319PC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPGEgW2NsYXNzLnNlbGVjdGVkXT1cInRoaXMuZmlsdGVyID09PSBmaWx0ZXJBbGxcIiAoY2xpY2spPVwidGhpcy5maWx0ZXIgPSBmaWx0ZXJBbGxcIj5Ub3VzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbY2xhc3Muc2VsZWN0ZWRdPVwidGhpcy5maWx0ZXIgPT09IGZpbHRlckFjdGl2ZXNcIiAoY2xpY2spPVwidGhpcy5maWx0ZXIgPSBmaWx0ZXJBY3RpdmVzXCI+QWN0aWZzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICA8YSBbY2xhc3Muc2VsZWN0ZWRdPVwidGhpcy5maWx0ZXIgPT09IGZpbHRlckNvbXBsZXRlZFwiIChjbGljayk9XCJ0aGlzLmZpbHRlciA9IGZpbHRlckNvbXBsZXRlZFwiPkNvbXBsw6l0w6lzPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPGJ1dHRvbiAoY2xpY2spPVwicmVtb3ZlQWxsQ2hlY2tlZCgpXCIgY2xhc3M9XCJjbGVhci1jb21wbGV0ZWRcIj5TdXBwcmltZXIgY29jaMOpZXM8L2J1dHRvbj5cbiAgICAgICAgPC9mb290ZXI+XG5cdDwvc2VjdGlvbj5cblx0PGhyLz5cblx0PHNlY3Rpb24+XG4gICAgICAgIDwhLS08c2VjdGlvbiAqbmdGb3I9XCJsZXQgY2hvc2Ugb2YgZ2V0Q2hvc2VzKClcIj5cblx0ICAgICAgICB7e2Nob3NlLmZhaXR9fSA6IHt7Y2hvc2UudGV4dGV9fVxuICAgICAgICA8L3NlY3Rpb24+LS0+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbnR5cGUgZmlsdGVyQ2hvc2UgPSAoYyA6IENob3NlKSA9PiBib29sZWFuO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yXHRcdDogXCJsaXN0ZS1jaG9zZXNcIixcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdHJlXHQ6IHN0cmluZztcbiAgICBwdWJsaWMgbmYgICAgICAgOiBMaXN0ZUNob3Nlc05GO1xuICAgIHByaXZhdGUgZmlsdGVyICA6IGZpbHRlckNob3NlO1xuICAgIHByaXZhdGUgY2hvc2VzICA6IENob3NlW10gPSBbXTtcbiAgICBmaWx0ZXJBbGwgICAgICAgOiBmaWx0ZXJDaG9zZSA9ICggKSA9PiB0cnVlO1xuICAgIGZpbHRlckNvbXBsZXRlZCA6IGZpbHRlckNob3NlID0gKGMpID0+IGMuZmFpdDtcbiAgICBmaWx0ZXJBY3RpdmVzICAgOiBmaWx0ZXJDaG9zZSA9IChjKSA9PiAhYy5mYWl0O1xuXHRjb25zdHJ1Y3Rvclx0XHQocHJpdmF0ZSBzZXJ2aWNlTGlzdGU6IExpc3RlQ2hvc2VzU2VydmljZSkge1xuXHQgICAgdGhpcy5maWx0ZXIgPSB0aGlzLmZpbHRlckFsbDtcblx0fTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKS50aGVuKCAobmYpID0+IHtcbiAgICAgICAgICAgIHRoaXMubmYgICAgID0gbmY7XG4gICAgICAgICAgICB0aGlzLmNob3NlcyA9IG5mLmNob3NlcztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldENob3NlcygpIDogQ2hvc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIoIHRoaXMuZmlsdGVyICk7XG4gICAgfVxuICAgIEFqb3V0ZXIodGV4dDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0ZXh0ICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLm5mLkFqb3V0ZXIodGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlQWxsQ2hlY2tlZCgpIHtcbiAgICAgICAgdGhpcy5jaG9zZXMuZmlsdGVyKCB0aGlzLmZpbHRlckNvbXBsZXRlZCApLmZvckVhY2goIGMgPT4gYy5kaXNwb3NlKCkgKTtcbiAgICB9XG4gICAgZ2V0TmJSZXN0YW50ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIoIHRoaXMuZmlsdGVyQWN0aXZlcyApLmxlbmd0aDtcbiAgICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=
