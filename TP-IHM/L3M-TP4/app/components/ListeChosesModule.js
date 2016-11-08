System.register(["@angular/core", "@angular/forms", "@angular/common", "@NoyauFonctionnel/service", "./Chose", "./ListeChoses"], function(exports_1, context_1) {
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
    var core_1, forms_1, common_1, service_1, Chose_1, ListeChoses_1;
    var ListeChosesModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (Chose_1_1) {
                Chose_1 = Chose_1_1;
            },
            function (ListeChoses_1_1) {
                ListeChoses_1 = ListeChoses_1_1;
            }],
        execute: function() {
            ListeChosesModule = class ListeChosesModule {
            };
            ListeChosesModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    exports: [ListeChoses_1.ListeChoses],
                    declarations: [ListeChoses_1.ListeChoses, Chose_1.ItemChose],
                    providers: [service_1.ListeChosesService],
                }), 
                __metadata('design:paramtypes', [])
            ], ListeChosesModule);
            exports_1("ListeChosesModule", ListeChosesModule);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXNNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtZQUFpQyxDQUFDO1lBUGxDO2dCQUFDLGVBQVEsQ0FBQztvQkFDTixPQUFPLEVBQU8sQ0FBRSxxQkFBWSxFQUFFLG1CQUFXLENBQUU7b0JBQzNDLE9BQU8sRUFBTyxDQUFFLHlCQUFXLENBQUU7b0JBQzdCLFlBQVksRUFBRSxDQUFFLHlCQUFXLEVBQUUsaUJBQVMsQ0FBRTtvQkFDeEMsU0FBUyxFQUFLLENBQUUsNEJBQWtCLENBQUU7aUJBRXZDLENBQUM7O2lDQUFBO1lBQ0YsaURBQWtDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9MaXN0ZUNob3Nlc01vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICAgIGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7TGlzdGVDaG9zZXNTZXJ2aWNlfSBmcm9tIFwiQE5veWF1Rm9uY3Rpb25uZWwvc2VydmljZVwiO1xuaW1wb3J0IHtJdGVtQ2hvc2V9ICAgICAgICAgIGZyb20gXCIuL0Nob3NlXCI7XG5pbXBvcnQge0xpc3RlQ2hvc2VzfSAgICAgICAgZnJvbSBcIi4vTGlzdGVDaG9zZXNcIjtcblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlIF0sXG4gICAgZXhwb3J0cyAgICAgOiBbIExpc3RlQ2hvc2VzIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbIExpc3RlQ2hvc2VzLCBJdGVtQ2hvc2UgXSxcbiAgICBwcm92aWRlcnMgICA6IFsgTGlzdGVDaG9zZXNTZXJ2aWNlIF0sXG5cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNNb2R1bGUgeyB9XG4iXSwic291cmNlUm9vdCI6IiJ9
