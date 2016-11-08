System.register(["./nf"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NF;
    var dataPromise;
    return {
        setters:[
            function (NF_1) {
                NF = NF_1;
            }],
        execute: function() {
            exports_1("dataPromise", dataPromise = new Promise((resolve) => {
                setTimeout(() => resolve(new NF.ListeChoses()), 100);
            }));
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztRQUVXLFdBQVc7Ozs7Ozs7WUFBWCx5QkFBQSxXQUFXLEdBQUcsSUFBSSxPQUFPLENBQWtCLENBQUMsT0FBTztnQkFDMUQsVUFBVSxDQUFDLE1BQU0sT0FBTyxDQUFFLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0QsQ0FBQyxDQUFFLENBQUEsQ0FBQyIsImZpbGUiOiJuZi9zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgTkYgZnJvbSBcIi4vbmZcIjtcblxuZXhwb3J0IGxldCBkYXRhUHJvbWlzZSA9IG5ldyBQcm9taXNlPE5GLkxpc3RlQ2hvc2VzPiggKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHJlc29sdmUoIG5ldyBORi5MaXN0ZUNob3NlcygpICksIDEwMCk7XG59ICk7XG4iXSwic291cmNlUm9vdCI6IiJ9
