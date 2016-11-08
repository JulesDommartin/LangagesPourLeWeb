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
                constructor(texte, liste, fait = false, date = null) {
                    super();
                    this.texte = texte;
                    this.date = date || new Date(Date.now());
                    this.fait = fait || false;
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
            ListeChoses = class ListeChoses extends NF {
                constructor() {
                    super();
                    this.choses = [];
                }
                Ajouter(texte, fait = false, date = null) {
                    let chose = new Chose(texte, this, fait, date);
                    this.choses.push(chose);
                    this.emit("update", { append: chose });
                    return this;
                }
                Retirer(chose) {
                    this.choses.splice(this.choses.indexOf(chose), 1);
                    this.emit("update", { remove: chose });
                    return this;
                }
            };
            exports_1("ListeChoses", ListeChoses);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,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SUFBSSxFQUFDLENBQUMsQ0FBQztvQkFDbEMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixDQUFDO1lBQ0YsQ0FBQztZQXpCRCx5QkF5QkMsQ0FBQTtZQUdELHdDQUFpQyxFQUFFO2dCQUVsQztvQkFDQyxPQUFPLENBQUM7b0JBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7Z0JBQ2xCLENBQUM7Z0JBQ0QsT0FBTyxDQUFHLEtBQWEsRUFBRSxJQUFJLEdBQVksS0FBSyxFQUFFLElBQUksR0FBUyxJQUFJO29CQUNoRSxJQUFJLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUUsS0FBSyxDQUFFLENBQUM7b0JBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQztnQkFDRCxPQUFPLENBQUcsS0FBWTtvQkFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7b0JBQ3BELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7b0JBQ3JDLE1BQU0sQ0FBQyxJQUFJLENBQUM7Z0JBQ2IsQ0FBQztZQUNGLENBQUM7WUFqQkQscUNBaUJDLENBQUEiLCJmaWxlIjoibmYvbmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIE5GX0NhbGxCYWNrID0gKG5mOiBORiwgZXZlbnROYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHZvaWQ7XG5jbGFzcyBORiB7XG5cdHByaXZhdGUgY2JMaXN0IDogTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT47XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuY2JMaXN0ID0gbmV3IE1hcDxzdHJpbmcsIE5GX0NhbGxCYWNrW10+KCk7XG5cblx0fVxuXHRlbWl0KGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xuXHRcdFx0YXJyYXkuZm9yRWFjaCggY2IgPT4gY2IodGhpcywgZXZlbnROYW1lLCB2YWx1ZSkgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0b24oZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBORl9DYWxsQmFjaykgOiB0aGlzIHtcblx0XHRpZiggdGhpcy5jYkxpc3QuaGFzKGV2ZW50TmFtZSkgKSB7XG5cdFx0XHRsZXQgYXJyYXkgOiBORl9DYWxsQmFja1tdID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XG5cdFx0XHRhcnJheS5wdXNoKGNiKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jYkxpc3Quc2V0KGV2ZW50TmFtZSwgW2NiXSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IE5GX0NhbGxCYWNrKSA6IHRoaXMge1xuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcblx0XHRcdGxldCBhcnJheSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xuXHRcdFx0YXJyYXkuc3BsaWNlKCBhcnJheS5pbmRleE9mKGNiKSwgMSk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59XG5cbmV4cG9ydCBjbGFzcyBDaG9zZSBleHRlbmRzIE5GIHtcblx0cmVhZG9ubHkgbGlzdGVcdFx0OiBMaXN0ZUNob3Nlcztcblx0cmVhZG9ubHkgZGF0ZSBcdFx0OiBEYXRlO1xuXHR0ZXh0ZVx0XHRcdFx0OiBzdHJpbmc7XG5cdGZhaXQgXHRcdFx0XHQ6IGJvb2xlYW47XG5cdGNvbnN0cnVjdG9yXHQodGV4dGU6IHN0cmluZywgbGlzdGU6IExpc3RlQ2hvc2VzLCBmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLnRleHRlICA9IHRleHRlO1xuXHRcdHRoaXMuZGF0ZVx0PSBkYXRlIHx8IG5ldyBEYXRlKCBEYXRlLm5vdygpICk7XG5cdFx0dGhpcy5mYWl0XHQ9IGZhaXQgfHwgZmFsc2U7XG5cdFx0dGhpcy5saXN0ZVx0PSBsaXN0ZTtcblx0fVxuXHRkaXNwb3NlXHRcdCgpIHtcblx0XHR0aGlzLmxpc3RlLlJldGlyZXIodGhpcyk7XG5cdH1cblx0VGV4dGUodGV4dGU6IHN0cmluZykge1xuXHRcdHRoaXMudGV4dGUgPSB0ZXh0ZTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3RleHRlOiB0ZXh0ZX0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cdEZhaXQoZmFpdDogYm9vbGVhbikge1xuXHRcdHRoaXMuZmFpdCA9IGZhaXQ7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHtmYWl0OiBmYWl0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn1cblxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZUNob3NlcyA9IHthcHBlbmQ/OiBDaG9zZSwgcmVtb3ZlPzpDaG9zZX07XG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXMgZXh0ZW5kcyBORiB7XG5cdHJlYWRvbmx5IGNob3NlcyBcdDogQ2hvc2VbXTtcblx0Y29uc3RydWN0b3JcdCgpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2hvc2VzID0gW107XG5cdH1cblx0QWpvdXRlclx0XHQodGV4dGU6IHN0cmluZywgZmFpdDogYm9vbGVhbiA9IGZhbHNlLCBkYXRlOiBEYXRlID0gbnVsbCkgOiB0aGlzIHtcblx0XHRsZXQgY2hvc2UgPSBuZXcgQ2hvc2UodGV4dGUsIHRoaXMsIGZhaXQsIGRhdGUpO1xuXHRcdHRoaXMuY2hvc2VzLnB1c2goIGNob3NlICk7XG5cdFx0dGhpcy5lbWl0KFwidXBkYXRlXCIsIHthcHBlbmQ6IGNob3NlfSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0UmV0aXJlclx0XHQoY2hvc2U6IENob3NlKSA6IHRoaXMge1xuXHRcdHRoaXMuY2hvc2VzLnNwbGljZSggdGhpcy5jaG9zZXMuaW5kZXhPZihjaG9zZSksIDEgKTtcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3JlbW92ZTogY2hvc2V9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
