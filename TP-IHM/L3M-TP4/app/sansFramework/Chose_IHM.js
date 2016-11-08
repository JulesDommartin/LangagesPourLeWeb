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
	<section class="chose">
		<input type="checkbox"/>
		<input type="text"    />
		<input type="button" value="Delete"/>
	</section>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.inputFait = this.root.querySelector(`input[type="checkbox"]`);
                    this.inputText = this.root.querySelector(`input[type="text"]`);
                    this.buttonDelete = this.root.querySelector(`input[type="button"]`);
                    this.updateFromNF();
                    // HTML -> NF
                    this.inputFait.addEventListener("change", () => this.NF.Fait(this.inputFait.checked));
                    this.inputText.addEventListener("keyup", () => this.NF.Texte(this.inputText.value));
                    this.buttonDelete.addEventListener("click", () => this.NF.dispose());
                    // NF -> HTML
                    this.NF.on("update", () => this.updateFromNF());
                }
                updateFromNF() {
                    this.inputFait.checked = this.NF.fait;
                    this.inputText.value = this.NF.texte;
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvQ2hvc2VfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7UUFHTSxZQUFZOzs7Ozs7O1lBQVosWUFBWSxHQUFHOzs7Ozs7Q0FNcEIsQ0FBQztZQUVGLHdCQUF3QjtZQUN4QixrQ0FBOEIsMkJBQVk7Z0JBSXpDLFlBQW1CLEVBQVMsRUFBUyxJQUFhO29CQUNqRCxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFERSxPQUFFLEdBQUYsRUFBRSxDQUFPO29CQUFTLFNBQUksR0FBSixJQUFJLENBQVM7b0JBRWpELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztvQkFFbkMsd0NBQXdDO29CQUNsQyxJQUFJLENBQUMsU0FBUyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSx3QkFBd0IsQ0FBRSxDQUFDO29CQUMzRixJQUFJLENBQUMsU0FBUyxHQUF5QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxvQkFBb0IsQ0FBRSxDQUFDO29CQUN2RixJQUFJLENBQUMsWUFBWSxHQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxzQkFBc0IsQ0FBRSxDQUFDO29CQUMxRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7b0JBRXBCLGFBQWE7b0JBQ2IsSUFBSSxDQUFDLFNBQVMsQ0FBSSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxTQUFTLENBQUksZ0JBQWdCLENBQUMsT0FBTyxFQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUcsQ0FBRSxDQUFDO29CQUMzRixJQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUUsQ0FBQztvQkFFdkUsYUFBYTtvQkFDYixJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUUsQ0FBQztnQkFDekQsQ0FBQztnQkFDRCxZQUFZO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO29CQUN2QyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDNUMsQ0FBQztZQUNMLENBQUM7WUExQkQsK0JBMEJDLENBQUEiLCJmaWxlIjoic2Fuc0ZyYW1ld29yay9DaG9zZV9JSE0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nob3NlfSBcdFx0XHRmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvbmZcIjtcbmltcG9ydCB7Q29tcG9uZW50SUhNfSBcdGZyb20gXCIuL0NvbXBvbmVudElITVwiO1xuXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXG5cdDxzZWN0aW9uIGNsYXNzPVwiY2hvc2VcIj5cblx0XHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIvPlxuXHRcdDxpbnB1dCB0eXBlPVwidGV4dFwiICAgIC8+XG5cdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cblx0PC9zZWN0aW9uPlxuYDtcblxuLy8gQ2xhc3NlIMOgIGNvbXBsw6l0ZXIuLi5cbmV4cG9ydCBjbGFzcyBDaG9zZUlITSBleHRlbmRzIENvbXBvbmVudElITSB7XG5cdGlucHV0RmFpdFx0OiBIVE1MSW5wdXRFbGVtZW50O1xuXHRpbnB1dFRleHRcdDogSFRNTElucHV0RWxlbWVudDtcblx0YnV0dG9uRGVsZXRlOiBIVE1MSW5wdXRFbGVtZW50O1xuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IENob3NlLCBwdWJsaWMgcm9vdDogRWxlbWVudCkge1xuXHRcdHN1cGVyKE5GLCByb290KTtcblx0XHR0aGlzLnJvb3QuaW5uZXJIVE1MID0gaHRtbFRlbXBsYXRlO1xuXG5cdFx0Ly8gR2V0IHJlZmVyZW5jZXMgYW5kIGluaXRpYWxpemUgZnJvbSBORlxuICAgICAgICB0aGlzLmlucHV0RmFpdFx0ICAgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl1gICk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0XHQgICAgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYGlucHV0W3R5cGU9XCJ0ZXh0XCJdYCApO1xuICAgICAgICB0aGlzLmJ1dHRvbkRlbGV0ZSAgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdYCApO1xuICAgICAgICB0aGlzLnVwZGF0ZUZyb21ORigpO1xuXG4gICAgICAgIC8vIEhUTUwgLT4gTkZcbiAgICAgICAgdGhpcy5pbnB1dEZhaXQgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB0aGlzLk5GLkZhaXQgKHRoaXMuaW5wdXRGYWl0LmNoZWNrZWQpICk7XG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiICwgKCkgPT4gdGhpcy5ORi5UZXh0ZSh0aGlzLmlucHV0VGV4dC52YWx1ZSAgKSApO1xuICAgICAgICB0aGlzLmJ1dHRvbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiAsICgpID0+IHRoaXMuTkYuZGlzcG9zZSgpICk7XG5cbiAgICAgICAgLy8gTkYgLT4gSFRNTFxuICAgICAgICB0aGlzLk5GLm9uKCBcInVwZGF0ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZUZyb21ORigpICk7XG5cdH1cblx0dXBkYXRlRnJvbU5GKCkge1xuICAgICAgICB0aGlzLmlucHV0RmFpdC5jaGVja2VkICA9IHRoaXMuTkYuZmFpdDtcbiAgICAgICAgdGhpcy5pbnB1dFRleHQudmFsdWUgICAgPSB0aGlzLk5GLnRleHRlO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
