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
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.liste = [];
                    this.root.innerHTML = htmlTemplate;
                    this.toggle_all = this.root.querySelector(".toggle-all");
                    this.form = this.root.querySelector("form");
                    this.input = this.root.querySelector(".new-todo");
                    this.todo_list = this.root.querySelector(".todo-list");
                    this.init();
                }
                init() {
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(nf, eN, eV));
                    this.form.onsubmit = e => {
                        e.preventDefault();
                        if (this.input.value && this.input.value !== "") {
                            this.ajouterChose(this.input.value);
                            this.save();
                        }
                        else {
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
                ajouterChose(string, fait) {
                    // console.log("On ajoute " + string);
                    this.NF.Ajouter(string);
                    this.input.value = "";
                }
                updateFromNF(nf, eventName, eventValue) {
                    console.log("updateFromNF", nf, eventName, eventValue);
                    if (eventValue.append) {
                        let chose = eventValue.append;
                        let li = document.createElement("li");
                        this.todo_list.appendChild(li);
                        this.liste.push(new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (eventValue.remove) {
                        let chose = eventValue.remove;
                        this.liste.forEach(cihm => {
                            if (cihm.NF === chose) {
                                cihm.dispose();
                            }
                        });
                    }
                    this.save();
                }
                ;
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
                            texte: this.NF.choses[i].texte,
                            fait: this.NF.choses[i].fait
                        });
                    }
                    localStorage.setItem("listeChoses", JSON.stringify(choses));
                }
                retrieve() {
                    return JSON.parse(localStorage.getItem("listeChoses"));
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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QUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDOzRCQUNDLEtBQUssRUFBRyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLOzRCQUMvQixJQUFJLEVBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTt5QkFDaEMsQ0FBQyxDQUFDO29CQUNiLENBQUM7b0JBQ0QsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUM3RCxDQUFDO2dCQUVELFFBQVE7b0JBQ1AsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBRUYsQ0FBQztZQTNGRCwyQ0EyRkMsQ0FBQTtZQUFBLENBQUMiLCJmaWxlIjoiSUhNL2xpc3RlQ2hvc2VzX0lITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIE5GIFx0XHRcdGZyb20gXCIuLi9uZi9uZlwiO1xuaW1wb3J0IHtDb21wb25lbnRJSE19IFx0ZnJvbSBcIi4vQ29tcG9uZW50SUhNXCI7XG5pbXBvcnQge0Nob3NlSUhNfVx0XHRmcm9tIFwiLi9DaG9zZV9JSE1cIjtcblxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxuXHQ8c2VjdGlvbiBjbGFzcz1cInRvZG9hcHBcIj5cblx0XHQ8aGVhZGVyIGNsYXNzPVwiaGVhZGVyXCI+XG5cdFx0XHQ8aDE+TGlzdGU8L2gxPlxuXHRcdFx0PGRpdiBjbGFzcz1cInRhc2stZmlsdGVyc1wiPlxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJzaG93LWNvbXBsZXRlZFwiIHR5cGU9XCJjaGVja2JveFwiIGNoZWNrZWQ+U2hvdyBjb21wbGV0ZWQgdGFza3M8YnIvPlxuXHQgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaG93LXVuY29tcGxldGVkXCIgdHlwZT1cImNoZWNrYm94XCIgY2hlY2tlZD5TaG93IHVuY29tcGxldGVkIHRha3NcbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0PGZvcm0gYWN0aW9uPVwiIy9cIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIiBhdXRvZm9jdXM+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9oZWFkZXI+XG5cdFx0PHNlY3Rpb24gY2xhc3M9XCJtYWluXCI+XG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJ0b2dnbGUtYWxsXCIgdHlwZT1cImNoZWNrYm94XCI+XG5cdFx0XHQ8bGFiZWwgZm9yPVwidG9nZ2xlLWFsbFwiPk1hcmsgYWxsIGFzIGNvbXBsZXRlPC9sYWJlbD5cblx0XHRcdDx1bCBjbGFzcz1cInRvZG8tbGlzdFwiPjwvdWw+XG5cdFx0PC9zZWN0aW9uPlxuXHQ8L3NlY3Rpb24+XG5gO1xuXG4vLyBDbGFzc2Ugw6AgY29tcGzDqXRlci4uLlxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzSUhNIGV4dGVuZHMgQ29tcG9uZW50SUhNIHtcblxuXHRsaXN0ZSA6IENob3NlSUhNW10gPSBbXTtcblx0dG9nZ2xlX2FsbCA6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cdHRvZG9fbGlzdCA6IEVsZW1lbnQ7XG5cdGlucHV0IDogSFRNTElucHV0RWxlbWVudDtcblx0Zm9ybSA6IEhUTUxGb3JtRWxlbWVudDtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IE5GLkxpc3RlQ2hvc2VzLCByb290U2VsZWN0b3IpIHtcblx0XHRzdXBlcihORiwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggcm9vdFNlbGVjdG9yICkpO1xuXHRcdHRoaXMucm9vdC5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XG5cblx0XHR0aGlzLnRvZ2dsZV9hbGwgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtYWxsXCIpO1xuXHRcdHRoaXMuZm9ybSBcdFx0PSA8SFRNTEZvcm1FbGVtZW50ID50aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5cdFx0dGhpcy5pbnB1dCBcdFx0PSA8SFRNTElucHV0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvcihcIi5uZXctdG9kb1wiKTtcblxuXHRcdHRoaXMudG9kb19saXN0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1saXN0XCIpO1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkge1xuXHRcdHRoaXMuTkYub24oXCJ1cGRhdGVcIiwgKG5mLCBlTiwgZVYpID0+IHRoaXMudXBkYXRlRnJvbU5GKG5mLCBlTiwgZVYpICk7XG5cdFx0dGhpcy5mb3JtLm9uc3VibWl0ID0gZSA9PiB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRpZiAodGhpcy5pbnB1dC52YWx1ZSAmJiB0aGlzLmlucHV0LnZhbHVlICE9PSBcIlwiKSB7XG5cdFx0XHRcdHRoaXMuYWpvdXRlckNob3NlKHRoaXMuaW5wdXQudmFsdWUpO1xuXHRcdFx0XHR0aGlzLnNhdmUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiTGUgY2hhbXAgZXN0IHZpZGVcIik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyB0aGlzLnRvZ2dsZV9hbGwub25jaGFuZ2UgPSBlID0+IHRoaXMudG9nZ2xlQWxsKGUpO1xuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxpc3RlQ2hvc2VzXCIpKSB7XG5cdFx0XHRjb25zb2xlLmxvZyh0aGlzLnJldHJpZXZlKCkpO1xuXHRcdFx0bGV0IGNob3NlcyA9IHRoaXMucmV0cmlldmUoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hvc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHRoaXMuYWpvdXRlckNob3NlKGNob3Nlc1tpXS50ZXh0ZSwgY2hvc2VzW2ldLmZhaXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpO1xuXHR9XG5cblx0YWpvdXRlckNob3NlKHN0cmluZywgZmFpdD8gOiBib29sZWFuKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coXCJPbiBham91dGUgXCIgKyBzdHJpbmcpO1xuXHRcdHRoaXMuTkYuQWpvdXRlcihzdHJpbmcpO1xuXHRcdHRoaXMuaW5wdXQudmFsdWUgPSBcIlwiO1xuXHR9XG5cblx0dXBkYXRlRnJvbU5GKG5mLCBldmVudE5hbWUsIGV2ZW50VmFsdWUpIHtcblx0XHRjb25zb2xlLmxvZyhcInVwZGF0ZUZyb21ORlwiLCBuZiwgZXZlbnROYW1lLCBldmVudFZhbHVlKTtcblx0XHRpZihldmVudFZhbHVlLmFwcGVuZCkge1xuXHRcdFx0bGV0IGNob3NlID0gPE5GLkNob3NlPmV2ZW50VmFsdWUuYXBwZW5kO1xuXHRcdFx0bGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXHRcdFx0dGhpcy50b2RvX2xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuXHRcdFx0dGhpcy5saXN0ZS5wdXNoKCBuZXcgQ2hvc2VJSE0oY2hvc2UsIGxpKSApO1xuXHRcdH1cblx0XHRpZihldmVudFZhbHVlLnJlbW92ZSkge1xuXHRcdFx0bGV0IGNob3NlID0gPE5GLkNob3NlPmV2ZW50VmFsdWUucmVtb3ZlO1xuXHRcdFx0dGhpcy5saXN0ZS5mb3JFYWNoKCBjaWhtID0+IHtcblx0XHRcdFx0aWYoY2lobS5ORiA9PT0gY2hvc2UpIHtcblx0XHRcdFx0XHRjaWhtLmRpc3Bvc2UoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuc2F2ZSgpO1xuXHR9O1xuXG5cdC8qXG5cdHRvZ2dsZUFsbChldmVudCkge1xuXHRcdHRoaXMubGlzdGUuZm9yRWFjaCgoZSwgaSkgPT4ge1xuXHRcdFx0ZS5ORi5GYWl0KHRoaXMudG9nZ2xlX2FsbC5jaGVja2VkKTtcblx0XHR9KTtcblx0fSovXG5cblx0c2F2ZSgpIHtcblx0XHRsZXQgY2hvc2VzID0gW107XG5cdFx0Y29uc29sZS5sb2codGhpcy5ORi5jaG9zZXMpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ORi5jaG9zZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNob3Nlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0ZXh0ZSA6IHRoaXMuTkYuY2hvc2VzW2ldLnRleHRlLFxuICAgICAgICAgICAgICAgIGZhaXQgOiB0aGlzLk5GLmNob3Nlc1tpXS5mYWl0XG4gICAgICAgICAgICB9KTtcblx0XHR9XG5cdFx0bG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsaXN0ZUNob3Nlc1wiLCBKU09OLnN0cmluZ2lmeShjaG9zZXMpKTtcblx0fVxuXG5cdHJldHJpZXZlKCkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibGlzdGVDaG9zZXNcIikpO1xuXHR9XG5cbn07XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==
