System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM;
    return {
        setters:[],
        execute: function() {
            ComponentIHM = class ComponentIHM {
                constructor(NF, root) {
                    this.NF = NF;
                    this.root = root;
                }
                dispose() {
                    this.root.parentNode.removeChild(this.root);
                    this.root.innerHTML = "";
                }
            };
            exports_1("ComponentIHM", ComponentIHM);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvQ29tcG9uZW50SUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQTtnQkFHSSxZQUFZLEVBQUUsRUFBRSxJQUFhO29CQUN6QixJQUFJLENBQUMsRUFBRSxHQUFLLEVBQUUsQ0FBQztvQkFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDckIsQ0FBQztnQkFDRCxPQUFPO29CQUNILElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFFLENBQUM7b0JBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDN0IsQ0FBQztZQUNMLENBQUM7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6InNhbnNGcmFtZXdvcmsvQ29tcG9uZW50SUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbXBvbmVudElITSB7XG4gICAgcm9vdDogRWxlbWVudDtcbiAgICBORiAgOiBhbnk7XG4gICAgY29uc3RydWN0b3IoTkYsIHJvb3Q6IEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5ORiAgID0gTkY7XG4gICAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XG4gICAgfVxuICAgIGRpc3Bvc2UoKSB7XG4gICAgICAgIHRoaXMucm9vdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0aGlzLnJvb3QgKTtcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IFwiXCI7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
