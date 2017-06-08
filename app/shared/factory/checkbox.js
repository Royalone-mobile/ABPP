"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Checkbox = (function () {
    function Checkbox() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<CheckBox id=\"" + _this.id + "\" text=\"" + _this.value + "\" class=\"shouldSubmit\" checked=\"false\"></CheckBox>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = options['Helper'];
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Checkbox;
}());
exports.Checkbox = Checkbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGVja2JveC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBY0k7UUFBWSxpQkFBVTthQUFWLFVBQVUsRUFBVixxQkFBVSxFQUFWLElBQVU7WUFBViw0QkFBVTs7UUFBdEIsaUJBUUM7UUFaRCxXQUFNLEdBQUc7WUFDTCxNQUFNLENBQUMsaUJBQWdCLEdBQUMsS0FBSSxDQUFDLEVBQUUsR0FBQyxZQUFVLEdBQUMsS0FBSSxDQUFDLEtBQUssR0FBQyx5REFBb0QsQ0FBQztRQUMvRyxDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO1FBQ3ZCLGdEQUFnRDtJQUNwRCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7QUF2QlksNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBYnN0cmFjdEVsZW1lbnQgfSBmcm9tIFwiLi9lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBDaGVja2JveCBpbXBsZW1lbnRzIEFic3RyYWN0RWxlbWVudCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIGhlbHBlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIG9wdGlvbnM6IEFycmF5PE9iamVjdD47XG4gICAgcHVibGljIGhhc0V2ZW50OiBib29sZWFuO1xuICAgIHB1YmxpYyBzaG91bGRTdWJtaXQ6IGJvb2xlYW47XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgPENoZWNrQm94IGlkPVwiYCt0aGlzLmlkK2BcIiB0ZXh0PVwiYCt0aGlzLnZhbHVlK2BcIiBjbGFzcz1cInNob3VsZFN1Ym1pdFwiIGNoZWNrZWQ9XCJmYWxzZVwiPjwvQ2hlY2tCb3g+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zWydJZCddO1xuICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uc1snTGFiZWwnXTtcbiAgICAgICAgdGhpcy5sYWJlbCA9ICcnO1xuICAgICAgICB0aGlzLmhlbHBlciA9IG9wdGlvbnNbJ0hlbHBlciddO1xuICAgICAgICB0aGlzLnNob3VsZFN1Ym1pdD10cnVlO1xuICAgICAgICAvL3RoaXMub3B0aW9ucyA9IEpTT04ucGFyc2Uob3B0aW9uc1snT3B0aW9ucyddKTtcbiAgICB9XG59Il19