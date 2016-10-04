System.register(["./ComponentIHM"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1;
    var htmlTemplate, ChoseIHM;
    return {
        setters:[
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            }],
        execute: function() {
            htmlTemplate = `
	<div class="view">
		<input class="toggle" type="checkbox">
		<label class="texte"></label>
		<button class="destroy"></button> 
	</div>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root, fait) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.destroyclick = function (event) {
                        event.preventDefault();
                        this.NF.dispose();
                    };
                    this.toggleclick = function (event) {
                        event.preventDefault();
                        this.NF.Fait(!this.NF.fait);
                    };
                    this.dblclick = function (event) {
                        event.preventDefault();
                        // On doit créer une balise "form"
                        let form = document.createElement("form");
                        form.setAttribute("action", "#/");
                        // On doit ajouter à cet élément un élément input de type text ayant la class "edit"
                        let input = document.createElement("input");
                        input.setAttribute("type", "text");
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
                    this.root.innerHTML = htmlTemplate;
                    if (fait !== undefined) {
                        this.NF.fait = fait;
                    }
                    this.init();
                }
                init() {
                    let root = this.root;
                    this.destroy = this.root.querySelector(".destroy");
                    this.toggle = this.root.querySelector(".toggle");
                    this.label = this.root.querySelector(".texte");
                    this.label.textContent = this.NF.texte;
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.update(nf, eN, eV));
                    // HTML -> NF
                    this.destroy.onclick = e => this.destroyclick(e);
                    this.toggle.onclick = e => this.toggleclick(e);
                    root.ondblclick = e => this.dblclick(e);
                }
                update(nf, eN, eV) {
                    if (this.NF.fait) {
                        this.toggle.checked = true;
                        this.root.classList.add("completed");
                    }
                    else {
                        this.toggle.checked = false;
                        this.root.classList.remove("completed");
                    }
                    if (eV.texte) {
                        this.label.textContent = eV.texte;
                    }
                    if (eV.fait) {
                        this.toggle.checked = eV.fait;
                    }
                }
                ;
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUM1QyxDQUFDO29CQUNELEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ3RDLENBQUM7b0JBQ0QsRUFBRSxDQUFBLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7d0JBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztvQkFDbEMsQ0FBQztnQkFFTCxDQUFDOztZQTZDTCxDQUFDO1lBNUZELCtCQTRGQyxDQUFBIiwiZmlsZSI6IklITS9DaG9zZV9JSE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBORiBcdFx0XHRmcm9tIFwiLi4vbmYvbmZcIjtcbmltcG9ydCB7Q29tcG9uZW50SUhNfSBcdGZyb20gXCIuL0NvbXBvbmVudElITVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG5cdFx0PGlucHV0IGNsYXNzPVwidG9nZ2xlXCIgdHlwZT1cImNoZWNrYm94XCI+XG5cdFx0PGxhYmVsIGNsYXNzPVwidGV4dGVcIj48L2xhYmVsPlxuXHRcdDxidXR0b24gY2xhc3M9XCJkZXN0cm95XCI+PC9idXR0b24+IFxuXHQ8L2Rpdj5cbmA7XG5cbi8vIENsYXNzZSDDoCBjb21wbMOpdGVyLi4uXG5leHBvcnQgY2xhc3MgQ2hvc2VJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xuXG4gICAgdGV4dGUgOiBzdHJpbmc7XG4gICAgdG9nZ2xlIDogSFRNTElucHV0RWxlbWVudDtcbiAgICBsYWJlbCA6IEhUTUxMYWJlbEVsZW1lbnQ7XG4gICAgZGVzdHJveSA6IEhUTUxCdXR0b25FbGVtZW50O1xuXG5cdGNvbnN0cnVjdG9yKHB1YmxpYyBORjogTkYuQ2hvc2UsIHB1YmxpYyByb290OiBFbGVtZW50LCBmYWl0PyA6IGJvb2xlYW4pIHtcblx0XHRzdXBlcihORiwgcm9vdCk7XG5cdFx0dGhpcy5yb290LmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZTtcbiAgICAgICAgaWYgKGZhaXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ORi5mYWl0ID0gZmFpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXQoKTtcblx0fVxuXG5cdGluaXQoKSB7XG5cdCAgICBsZXQgcm9vdCA9IDxIVE1MRWxlbWVudD50aGlzLnJvb3Q7XG5cdCAgICB0aGlzLmRlc3Ryb3kgICAgPSA8SFRNTEJ1dHRvbkVsZW1lbnQ+IHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiLmRlc3Ryb3lcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlICAgICA9IDxIVE1MSW5wdXRFbGVtZW50PiB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcIi50b2dnbGVcIik7XG4gICAgICAgIHRoaXMubGFiZWwgICAgICA9IDxIVE1MTGFiZWxFbGVtZW50PnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKFwiLnRleHRlXCIpO1xuICAgICAgICB0aGlzLmxhYmVsLnRleHRDb250ZW50ID0gdGhpcy5ORi50ZXh0ZTtcblxuICAgICAgICAvLyBORiAtPiBIVE1MXG4gICAgICAgIHRoaXMuTkYub24oXCJ1cGRhdGVcIiwgKG5mLCBlTiwgZVYpID0+IHRoaXMudXBkYXRlKG5mLCBlTiwgZVYpKTtcblxuICAgICAgICAvLyBIVE1MIC0+IE5GXG4gICAgICAgIHRoaXMuZGVzdHJveS5vbmNsaWNrICAgID0gZSA9PiB0aGlzLmRlc3Ryb3ljbGljayhlKTtcbiAgICAgICAgdGhpcy50b2dnbGUub25jbGljayAgICAgPSBlID0+IHRoaXMudG9nZ2xlY2xpY2soZSk7XG4gICAgICAgIHJvb3Qub25kYmxjbGljayAgICAgICAgID0gZSA9PiB0aGlzLmRibGNsaWNrKGUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShuZiwgZU4sIGVWKSB7XG4gICAgICAgIGlmKHRoaXMuTkYuZmFpdCkge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlLmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlVi50ZXh0ZSkge1xuICAgICAgICAgICAgdGhpcy5sYWJlbC50ZXh0Q29udGVudCA9IGVWLnRleHRlO1xuICAgICAgICB9XG4gICAgICAgIGlmKGVWLmZhaXQpIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlLmNoZWNrZWQgPSBlVi5mYWl0O1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgZGVzdHJveWNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuTkYuZGlzcG9zZSgpO1xuICAgIH07XG5cbiAgICB0b2dnbGVjbGljayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLk5GLkZhaXQoIXRoaXMuTkYuZmFpdCk7XG4gICAgfTtcblxuICAgIGRibGNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIC8vIE9uIGRvaXQgY3LDqWVyIHVuZSBiYWxpc2UgXCJmb3JtXCJcbiAgICAgICAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIixcIiMvXCIpO1xuXG4gICAgICAgIC8vIE9uIGRvaXQgYWpvdXRlciDDoCBjZXQgw6lsw6ltZW50IHVuIMOpbMOpbWVudCBpbnB1dCBkZSB0eXBlIHRleHQgYXlhbnQgbGEgY2xhc3MgXCJlZGl0XCJcbiAgICAgICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdFwiKTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLk5GLnRleHRlO1xuXG4gICAgICAgIC8vT24gYWpvdXRlIHVuZSBmb25jdGlvbiBzdXIgbGUgc3VibWl0IGR1IGZvcm11bGFpcmUgZGUgbW9kaWZpY2F0aW9uXG4gICAgICAgIGZvcm0ub25zdWJtaXQgPSAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5ORi5UZXh0ZShpbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmdcIik7XG4gICAgICAgICAgICBmb3JtLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoZm9ybSk7XG4gICAgICAgIH07XG4gICAgICAgIC8qXG4gICAgICAgIGlucHV0Lm9uYmx1ciA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLk5GLlRleHRlKGlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMucm9vdC5jbGFzc0xpc3QudG9nZ2xlKFwiZWRpdGluZ1wiKTtcbiAgICAgICAgICAgIGZvcm0ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChmb3JtKTtcbiAgICAgICAgfTsqL1xuXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgICAgIC8vIE9uIGRvaXQgYWpvdXRlciBsYSBjbGFzc2UgXCJlZGl0aW5nXCIgw6AgbCfDqWzDqW1lbnQgcm9vdFxuICAgICAgICB0aGlzLnJvb3QuY2xhc3NMaXN0LnRvZ2dsZShcImVkaXRpbmdcIik7XG4gICAgICAgIHRoaXMucm9vdC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
