System.register(["./nf/service", "./IHM/listeChoses_IHM"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var service_1, listeChoses_IHM_1;
    var PromesseDocumentPret, P_all;
    return {
        setters:[
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            }],
        execute: function() {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            P_all = Promise.all([service_1.dataPromise, PromesseDocumentPret]);
            P_all.then(([liste]) => {
                new listeChoses_IHM_1.ListeChosesIHM(liste, "#sansFramework");
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQU1JLG9CQUFvQixFQVFwQixLQUFLOzs7Ozs7Ozs7O1lBUkwsb0JBQW9CLEdBQUcsSUFBSSxPQUFPLENBQUUsQ0FBQyxPQUFPO2dCQUMvQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZDLE9BQU8sRUFBRSxDQUFDO2dCQUNYLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxPQUFPLEVBQUUsQ0FBQztnQkFDeEMsQ0FBQztZQUNGLENBQUMsQ0FBQyxDQUFDO1lBRUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQyxxQkFBVyxFQUFFLG9CQUFvQixDQUFDLENBQUUsQ0FBQztZQUMvRCxLQUFLLENBQUMsSUFBSSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQW9CO2dCQUN0QyxJQUFJLGdDQUFjLENBQUMsS0FBSyxFQUFFLGdCQUFnQixDQUFDLENBQUM7WUFDN0MsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE5veWF1IGZvbmN0aW9ubmVsICovXG5pbXBvcnQge0xpc3RlQ2hvc2VzfSBmcm9tIFwiLi9uZi9uZlwiO1xuaW1wb3J0IHtkYXRhUHJvbWlzZX0gZnJvbSBcIi4vbmYvc2VydmljZVwiO1xuXG4vKiBWZXJzaW9uIHNhbnMgZnJhbWV3b3JrICovXG5pbXBvcnQge0xpc3RlQ2hvc2VzSUhNfSBmcm9tIFwiLi9JSE0vbGlzdGVDaG9zZXNfSUhNXCI7XG5sZXQgUHJvbWVzc2VEb2N1bWVudFByZXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcblx0aWYoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiKSB7XG5cdFx0cmVzb2x2ZSgpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmJvZHkub25sb2FkID0gKCkgPT4gcmVzb2x2ZSgpO1xuXHR9XG59KTtcblxubGV0IFBfYWxsID0gUHJvbWlzZS5hbGwoIFtkYXRhUHJvbWlzZSwgUHJvbWVzc2VEb2N1bWVudFByZXRdICk7XG5QX2FsbC50aGVuKCAoW2xpc3RlXTogW0xpc3RlQ2hvc2VzLCB7fV0pID0+IHtcblx0bmV3IExpc3RlQ2hvc2VzSUhNKGxpc3RlLCBcIiNzYW5zRnJhbWV3b3JrXCIpO1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9
