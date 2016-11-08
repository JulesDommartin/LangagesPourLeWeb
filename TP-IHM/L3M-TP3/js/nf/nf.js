System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NF, Chose, ListeChoses;
    return {
        setters:[],
        execute: function() {
            NF = class NF {
                constructor() {
                    this.cbList = new Map();
                }
                emit(eventName, value) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.forEach(cb => cb(this, eventName, value));
                    }
                    return this;
                }
                on(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.push(cb);
                    }
                    else {
                        this.cbList.set(eventName, [cb]);
                    }
                    return this;
                }
                off(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.splice(array.indexOf(cb), 1);
                    }
                    return this;
                }
            };
            Chose = class Chose extends NF {
                constructor(texte, liste) {
                    super();
                    this.texte = texte;
                    this.date = new Date(Date.now());
                    this.fait = false;
                    this.liste = liste;
                }
                dispose() {
                    this.liste.Retirer(this);
                }
                Texte(texte) {
                    this.texte = texte;
                    this.emit("update", { texte: texte });
                    return this;
                }
                Fait(fait) {
                    this.fait = fait;
                    this.emit("update", { fait: fait });
                    return this;
                }
            };
            exports_1("Chose", Chose);
            ;
            ListeChoses = class ListeChoses extends NF {
                constructor() {
                    super();
                    this.choses = [];
                }
                Ajouter(texte) {
                    let chose = new Chose(texte, this);
                    this.choses.push(chose);
                    this.emit("update", { append: chose });
                }
                Retirer(chose) {
                    this.choses.splice(this.choses.indexOf(chose), 1);
                    this.emit("update", { remove: chose });
                }
            };
            exports_1("ListeChoses", ListeChoses);
            ;
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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Q0YsQ0FBQztZQXpCRCx5QkF5QkMsQ0FBQTtZQUFBLENBQUM7WUFFRix3Q0FBaUMsRUFBRTtnQkFFbEM7b0JBQ0MsT0FBTyxDQUFDO29CQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO2dCQUNsQixDQUFDO2dCQUNELE9BQU8sQ0FBRyxLQUFhO29CQUN0QixJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLEtBQUssQ0FBRSxDQUFDO29CQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDO2dCQUN0QyxDQUFDO2dCQUNELE9BQU8sQ0FBRyxLQUFZO29CQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztnQkFDdEMsQ0FBQztZQUNGLENBQUM7WUFmRCxxQ0FlQyxDQUFBO1lBQUEsQ0FBQyIsImZpbGUiOiJuZi9uZi5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgTkZfQ2FsbEJhY2sgPSAobmY6IE5GLCBldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcbmNsYXNzIE5GIHtcblx0cHJpdmF0ZSBjYkxpc3QgOiBNYXA8c3RyaW5nLCBORl9DYWxsQmFja1tdPjtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5jYkxpc3QgPSBuZXcgTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT4oKTtcblxuXHR9XG5cdGVtaXQoZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpIDogdGhpcyB7XG5cdFx0aWYoIHRoaXMuY2JMaXN0LmhhcyhldmVudE5hbWUpICkge1xuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5mb3JFYWNoKCBjYiA9PiBjYih0aGlzLCBldmVudE5hbWUsIHZhbHVlKSApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXHRvbihldmVudE5hbWU6IHN0cmluZywgY2I6IE5GX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA6IE5GX0NhbGxCYWNrW10gPSB0aGlzLmNiTGlzdC5nZXQoZXZlbnROYW1lKTtcblx0XHRcdGFycmF5LnB1c2goY2IpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmNiTGlzdC5zZXQoZXZlbnROYW1lLCBbY2JdKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b2ZmKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogTkZfQ2FsbEJhY2spIDogdGhpcyB7XG5cdFx0aWYoIHRoaXMuY2JMaXN0LmhhcyhldmVudE5hbWUpICkge1xuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5zcGxpY2UoIGFycmF5LmluZGV4T2YoY2IpLCAxKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IGNsYXNzIENob3NlIGV4dGVuZHMgTkYge1xuXHRsaXN0ZVx0XHQ6IExpc3RlQ2hvc2VzO1xuXHRkYXRlIFx0XHQ6IERhdGU7XG5cdHRleHRlXHRcdDogc3RyaW5nO1xuXHRmYWl0IFx0XHQ6IGJvb2xlYW47XG5cdGNvbnN0cnVjdG9yXHQodGV4dGU6IHN0cmluZywgbGlzdGU6IExpc3RlQ2hvc2VzKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRleHRlICA9IHRleHRlO1xuXHRcdHRoaXMuZGF0ZVx0PSBuZXcgRGF0ZSggRGF0ZS5ub3coKSApO1xuXHRcdHRoaXMuZmFpdFx0PSBmYWxzZTtcblx0XHR0aGlzLmxpc3RlXHQ9IGxpc3RlO1xuXHR9XG5cdGRpc3Bvc2VcdFx0KCkge1xuXHRcdHRoaXMubGlzdGUuUmV0aXJlcih0aGlzKTtcblx0fVxuXHRUZXh0ZSh0ZXh0ZTogc3RyaW5nKSB7XG5cdFx0dGhpcy50ZXh0ZSA9IHRleHRlO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7dGV4dGU6IHRleHRlfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0RmFpdChmYWl0OiBib29sZWFuKSB7XG5cdFx0dGhpcy5mYWl0ID0gZmFpdDtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge2ZhaXQ6IGZhaXR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcblxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzIGV4dGVuZHMgTkYge1xuXHRjaG9zZXMgOiBDaG9zZVtdO1xuXHRjb25zdHJ1Y3Rvclx0KCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5jaG9zZXMgPSBbXTtcblx0fVxuXHRBam91dGVyXHRcdCh0ZXh0ZTogc3RyaW5nKSB7XG5cdFx0bGV0IGNob3NlID0gbmV3IENob3NlKHRleHRlLCB0aGlzKTtcblx0XHR0aGlzLmNob3Nlcy5wdXNoKCBjaG9zZSApO1xuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7YXBwZW5kOiBjaG9zZX0pO1xuXHR9XG5cdFJldGlyZXJcdFx0KGNob3NlOiBDaG9zZSkge1xuXHRcdHRoaXMuY2hvc2VzLnNwbGljZSggdGhpcy5jaG9zZXMuaW5kZXhPZihjaG9zZSksIDEgKTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3JlbW92ZTogY2hvc2V9KTtcblx0fVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=
