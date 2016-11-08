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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIklITS9Db21wb25lbnRJSE0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUdJLFlBQVksRUFBRSxFQUFFLElBQWE7b0JBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUssRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELE9BQU87b0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixDQUFDO1lBQ0wsQ0FBQztZQVhELHVDQVdDLENBQUEiLCJmaWxlIjoiSUhNL0NvbXBvbmVudElITS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21wb25lbnRJSE0ge1xuICAgIHJvb3Q6IEVsZW1lbnQ7XG4gICAgTkYgIDogYW55O1xuICAgIGNvbnN0cnVjdG9yKE5GLCByb290OiBFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuTkYgICA9IE5GO1xuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIH1cbiAgICBkaXNwb3NlKCkge1xuICAgICAgICB0aGlzLnJvb3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5yb290ICk7XG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
