System.register(["@angular/core", "./nf"], function(exports_1, context_1) {
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
    var core_1, NF;
    var nf, cbSaveData, choses, ListeChosesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NF_1) {
                NF = NF_1;
            }],
        execute: function() {
            nf = new NF.ListeChoses();
            cbSaveData = () => {
                let serialization = [];
                nf.choses.forEach(c => serialization.push({ texte: c.texte, fait: c.fait, date: c.date.toString() }));
                localStorage.setItem("todoListMiage", JSON.stringify(serialization));
            };
            nf.on("update", (nf, eventName, eventValue) => {
                if (eventValue.append) {
                    let chose = eventValue.append;
                    chose.on("update", cbSaveData);
                }
                if (eventValue.remove) {
                    let chose = eventValue.remove;
                    chose.off("update", cbSaveData);
                }
                cbSaveData();
            });
            // Ajouter les choses déjà présentes dans le localStorage
            choses = JSON.parse(localStorage.getItem("todoListMiage") || "[]");
            choses.forEach(c => {
                nf.Ajouter(c.texte, c.fait, new Date(c.date));
            });
            // Define service
            ListeChosesService = class ListeChosesService {
                static getData() {
                    return Promise.resolve(nf);
                }
            };
            ListeChosesService = __decorate([
                core_1.Injectable(), 
                __metadata('design:paramtypes', [])
            ], ListeChosesService);
            exports_1("ListeChosesService", ListeChosesService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztRQUtJLEVBQUUsRUFDRixVQUFVLEVBbUJWLE1BQU07Ozs7Ozs7Ozs7WUFwQk4sRUFBRSxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzFCLFVBQVUsR0FBRztnQkFDYixJQUFJLGFBQWEsR0FBeUIsRUFBRSxDQUFDO2dCQUM3QyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLElBQUksYUFBYSxDQUFDLElBQUksQ0FBRSxFQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLENBQUUsQ0FBQyxDQUFDO2dCQUN2RyxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFFLENBQUM7WUFDMUUsQ0FBQyxDQUFDO1lBRUYsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFrQixFQUFFLFNBQWtCLEVBQUUsVUFBZ0M7Z0JBQ3JGLEVBQUUsQ0FBQSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO29CQUM5QixLQUFLLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztnQkFDbkMsQ0FBQztnQkFDRCxFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLENBQUM7Z0JBQ0QsVUFBVSxFQUFFLENBQUM7WUFDakIsQ0FBQyxDQUFFLENBQUM7WUFFSix5REFBeUQ7WUFDckQsTUFBTSxHQUE4QyxJQUFJLENBQUMsS0FBSyxDQUFFLFlBQVksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLElBQUksSUFBSSxDQUFFLENBQUM7WUFDcEgsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDO2dCQUNiLEVBQUUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFDO1lBQ3BELENBQUMsQ0FBQyxDQUFDO1lBR0gsaUJBQWlCO1lBRWpCO2dCQUNJLE9BQU8sT0FBTztvQkFDVixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBRSxFQUFFLENBQUUsQ0FBQztnQkFDakMsQ0FBQztZQUNMLENBQUM7WUFMRDtnQkFBQyxpQkFBVSxFQUFFOztrQ0FBQTtZQUNiLG1EQUlDLENBQUEiLCJmaWxlIjoibmYvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgTkYgZnJvbSBcIi4vbmZcIjtcblxuLy8gTG9hZCBmcm9tIGxvY2FsU3RvcmFnZVxudHlwZSBTZXJpYWxpc2F0aW9uQ2hvc2VzID0gQXJyYXk8e3RleHRlOiBzdHJpbmcsIGZhaXQ6IGJvb2xlYW4sIGRhdGU6IHN0cmluZ30+O1xubGV0IG5mID0gbmV3IE5GLkxpc3RlQ2hvc2VzKCk7XG5sZXQgY2JTYXZlRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgc2VyaWFsaXphdGlvbiA6IFNlcmlhbGlzYXRpb25DaG9zZXMgPSBbXTtcbiAgICBuZi5jaG9zZXMuZm9yRWFjaCggYyA9PiBzZXJpYWxpemF0aW9uLnB1c2goIHt0ZXh0ZTogYy50ZXh0ZSwgZmFpdDogYy5mYWl0LCBkYXRlOiBjLmRhdGUudG9TdHJpbmcoKX0gKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdE1pYWdlXCIsIEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YXRpb24pICk7XG59O1xuXG5uZi5vbihcInVwZGF0ZVwiLCAobmY6IE5GLkxpc3RlQ2hvc2VzLCBldmVudE5hbWUgOiBzdHJpbmcsIGV2ZW50VmFsdWUgOiBORi5FdmVudExpc3RlQ2hvc2VzKSA9PiB7XG4gICAgaWYoZXZlbnRWYWx1ZS5hcHBlbmQpIHtcbiAgICAgICAgbGV0IGNob3NlID0gZXZlbnRWYWx1ZS5hcHBlbmQ7XG4gICAgICAgIGNob3NlLm9uKFwidXBkYXRlXCIsIGNiU2F2ZURhdGEpO1xuICAgIH1cbiAgICBpZihldmVudFZhbHVlLnJlbW92ZSkge1xuICAgICAgICBsZXQgY2hvc2UgPSBldmVudFZhbHVlLnJlbW92ZTtcbiAgICAgICAgY2hvc2Uub2ZmKFwidXBkYXRlXCIsIGNiU2F2ZURhdGEpO1xuICAgIH1cbiAgICBjYlNhdmVEYXRhKCk7XG59ICk7XG5cbi8vIEFqb3V0ZXIgbGVzIGNob3NlcyBkw6lqw6AgcHLDqXNlbnRlcyBkYW5zIGxlIGxvY2FsU3RvcmFnZVxubGV0IGNob3NlcyA6IFNlcmlhbGlzYXRpb25DaG9zZXMgPSA8U2VyaWFsaXNhdGlvbkNob3Nlcz5KU09OLnBhcnNlKCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9MaXN0TWlhZ2VcIikgfHwgXCJbXVwiICk7XG5jaG9zZXMuZm9yRWFjaCggYyA9PiB7XG4gICAgbmYuQWpvdXRlciggYy50ZXh0ZSwgYy5mYWl0LCBuZXcgRGF0ZShjLmRhdGUpICk7XG59KTtcblxuXG4vLyBEZWZpbmUgc2VydmljZVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzU2VydmljZSB7XG4gICAgc3RhdGljIGdldERhdGFcdCgpIDogUHJvbWlzZTxORi5MaXN0ZUNob3Nlcz4ge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCBuZiApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
