System.register(["./ComponentIHM", "./Chose_IHM"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1;
    var htmlTemplate, ListeChosesIHM;
    return {
        setters:[
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;
            // Classe à compléter...
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.mapNfIhm = new Map();
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.ul = this.root.querySelector(`ul`);
                    this.form = this.root.querySelector(`form`);
                    this.input = this.root.querySelector(`input`);
                    this.initalizeFromNF();
                    // HTML -> NF
                    this.form.addEventListener("submit", evt => {
                        evt.preventDefault();
                        this.NF.Ajouter(this.input.value);
                        this.input.value = "";
                    });
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(eV));
                }
                initalizeFromNF() {
                    this.NF.choses.forEach(c => this.updateFromNF({ append: c }));
                }
                updateFromNF(evt) {
                    if (evt.append) {
                        let chose = evt.append;
                        let li = document.createElement("li");
                        this.ul.appendChild(li);
                        this.mapNfIhm.set(chose, new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (evt.remove) {
                        let chose = evt.remove;
                        let choseIHM = this.mapNfIhm.get(chose);
                        if (choseIHM) {
                            choseIHM.dispose();
                        }
                        this.mapNfIhm.delete(chose);
                    }
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFJTSxZQUFZOzs7Ozs7Ozs7O1lBQVosWUFBWSxHQUFHOzs7Ozs7O0NBT3BCLENBQUM7WUFFRix3QkFBd0I7WUFDeEIsOENBQW9DLDJCQUFZO2dCQUsvQyxZQUFtQixFQUFlLEVBQUUsWUFBWTtvQkFDL0MsTUFBTSxFQUFFLEVBQUUsUUFBUSxDQUFDLGFBQWEsQ0FBRSxZQUFZLENBQUUsQ0FBQyxDQUFDO29CQURoQyxPQUFFLEdBQUYsRUFBRSxDQUFhO29CQUQvQixhQUFRLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7b0JBR3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztvQkFFbkMsd0NBQXdDO29CQUN4QyxJQUFJLENBQUMsRUFBRSxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxJQUFJLENBQUUsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLElBQUksR0FBdUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUsTUFBTSxDQUFFLENBQUM7b0JBQ2xFLElBQUksQ0FBQyxLQUFLLEdBQXNCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLE9BQU8sQ0FBRSxDQUFDO29CQUNuRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBRXZCLGFBQWE7b0JBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsR0FBRzt3QkFDcEMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDO3dCQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBRSxDQUFDO3dCQUNwQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO29CQUVILGFBQWE7b0JBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFFLENBQUUsQ0FBQztnQkFDcEUsQ0FBQztnQkFDRCxZQUFZLENBQUMsR0FBcUI7b0JBQzlCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksS0FBSyxHQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQ3pCLElBQUksRUFBRSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxvQkFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksS0FBSyxHQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQzdCLElBQUksUUFBUSxHQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztnQkFDTCxDQUFDO1lBQ0wsQ0FBQztZQTFDRCwyQ0EwQ0MsQ0FBQSIsImZpbGUiOiJzYW5zRnJhbWV3b3JrL2xpc3RlQ2hvc2VzX0lITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzLCBFdmVudExpc3RlQ2hvc2VzfSBcdFx0XHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcbmltcG9ydCB7Q29tcG9uZW50SUhNfSBcdGZyb20gXCIuL0NvbXBvbmVudElITVwiO1xuaW1wb3J0IHtDaG9zZUlITX1cdFx0ZnJvbSBcIi4vQ2hvc2VfSUhNXCI7XG5cbmNvbnN0IGh0bWxUZW1wbGF0ZSA9IGBcblx0PHNlY3Rpb24+XG5cdFx0PGZvcm0gYWN0aW9uPVwiIy9cIj5cblx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIj5cblx0XHQ8L2Zvcm0+XG5cdFx0PHVsPjwvdWw+XG5cdDwvc2VjdGlvbj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXHR1bFx0ICAgIDogSFRNTFVMaXN0RWxlbWVudDtcblx0Zm9ybSAgICA6IEhUTUxGb3JtRWxlbWVudDtcblx0aW5wdXQgICA6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgbWFwTmZJaG06IE1hcDxDaG9zZSwgQ2hvc2VJSE0+ID0gbmV3IE1hcCgpO1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IExpc3RlQ2hvc2VzLCByb290U2VsZWN0b3IpIHtcblx0XHRzdXBlcihORiwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggcm9vdFNlbGVjdG9yICkpO1xuICAgICAgICB0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuXG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzIGFuZCBpbml0aWFsaXplIGZyb20gTkZcbiAgICAgICAgdGhpcy51bFx0ICAgID0gPEhUTUxVTGlzdEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGB1bGAgKTtcbiAgICAgICAgdGhpcy5mb3JtICAgPSA8SFRNTEZvcm1FbGVtZW50ID50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYGZvcm1gICk7XG4gICAgICAgIHRoaXMuaW5wdXQgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dGAgKTtcbiAgICAgICAgdGhpcy5pbml0YWxpemVGcm9tTkYoKTtcblxuICAgICAgICAvLyBIVE1MIC0+IE5GXG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGV2dCA9PiB7XG4gICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuTkYuQWpvdXRlciggdGhpcy5pbnB1dC52YWx1ZSApO1xuICAgICAgICAgICAgdGhpcy5pbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE5GIC0+IEhUTUxcbiAgICAgICAgdGhpcy5ORi5vbiggXCJ1cGRhdGVcIiwgKG5mLCBlTiwgZVYpID0+IHRoaXMudXBkYXRlRnJvbU5GKGVWKSApO1xuICAgIH1cbiAgICBpbml0YWxpemVGcm9tTkYoKSB7XG4gICAgICAgIHRoaXMuTkYuY2hvc2VzLmZvckVhY2goIGMgPT4gdGhpcy51cGRhdGVGcm9tTkYoIHthcHBlbmQ6IGN9ICkgKTtcbiAgICB9XG4gICAgdXBkYXRlRnJvbU5GKGV2dDogRXZlbnRMaXN0ZUNob3Nlcykge1xuICAgICAgICBpZihldnQuYXBwZW5kKSB7XG4gICAgICAgICAgICBsZXQgY2hvc2UgICA9IGV2dC5hcHBlbmQ7XG4gICAgICAgICAgICBsZXQgbGkgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwibGlcIiApO1xuICAgICAgICAgICAgdGhpcy51bC5hcHBlbmRDaGlsZCggbGkgKTtcbiAgICAgICAgICAgIHRoaXMubWFwTmZJaG0uc2V0KGNob3NlLCBuZXcgQ2hvc2VJSE0oY2hvc2UsIGxpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYoZXZ0LnJlbW92ZSkge1xuICAgICAgICAgICAgbGV0IGNob3NlICAgICAgID0gZXZ0LnJlbW92ZTtcbiAgICAgICAgICAgIGxldCBjaG9zZUlITSAgICA9IHRoaXMubWFwTmZJaG0uZ2V0KGNob3NlKTtcbiAgICAgICAgICAgIGlmKGNob3NlSUhNKSB7Y2hvc2VJSE0uZGlzcG9zZSgpO31cbiAgICAgICAgICAgIHRoaXMubWFwTmZJaG0uZGVsZXRlKGNob3NlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
