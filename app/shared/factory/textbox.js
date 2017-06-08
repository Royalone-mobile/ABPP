"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Textbox = (function () {
    function Textbox() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<TextField id=\"" + _this.id + "\" formControlName=\"element" + _this.id + "\" text=\"" + _this.value + "\" class=\"shouldSubmit\"></TextField>";
        };
        options = options[0];
        this.id = options['Id'];
        this.label = options['Label'];
        this.helper = options['Help'];
        this.shouldSubmit = true;
    }
    return Textbox;
}());
exports.Textbox = Textbox;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGJveC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRleHRib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQWFJO1FBQVksaUJBQVU7YUFBVixVQUFVLEVBQVYscUJBQVUsRUFBVixJQUFVO1lBQVYsNEJBQVU7O1FBQXRCLGlCQU1DO1FBVkQsV0FBTSxHQUFHO1lBQ0wsTUFBTSxDQUFDLGtCQUFpQixHQUFDLEtBQUksQ0FBQyxFQUFFLEdBQUMsOEJBQTRCLEdBQUMsS0FBSSxDQUFDLEVBQUUsR0FBQyxZQUFVLEdBQUMsS0FBSSxDQUFDLEtBQUssR0FBQyx3Q0FBcUMsQ0FBQztRQUN0SSxDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQXBCRCxJQW9CQztBQXBCWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFRleHRib3ggaW1wbGVtZW50cyBBYnN0cmFjdEVsZW1lbnQge1xuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyBsYWJlbDogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGhlbHBlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nO1xuICAgIHB1YmxpYyBoYXNFdmVudDogYm9vbGVhbjtcbiAgICBwdWJsaWMgc2hvdWxkU3VibWl0OiBib29sZWFuO1xuXG4gICAgcmVuZGVyID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gYDxUZXh0RmllbGQgaWQ9XCJgK3RoaXMuaWQrYFwiIGZvcm1Db250cm9sTmFtZT1cImVsZW1lbnRgK3RoaXMuaWQrYFwiIHRleHQ9XCJgK3RoaXMudmFsdWUrYFwiIGNsYXNzPVwic2hvdWxkU3VibWl0XCI+PC9UZXh0RmllbGQ+YDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciguLi5vcHRpb25zKXtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnNbMF07XG4gICAgICAgIHRoaXMuaWQgPSBvcHRpb25zWydJZCddO1xuICAgICAgICB0aGlzLmxhYmVsID0gb3B0aW9uc1snTGFiZWwnXTtcbiAgICAgICAgdGhpcy5oZWxwZXIgPSBvcHRpb25zWydIZWxwJ107XG4gICAgICAgIHRoaXMuc2hvdWxkU3VibWl0ID0gdHJ1ZTtcbiAgICB9XG59Il19