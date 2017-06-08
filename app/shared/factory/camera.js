"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Camera = (function () {
    function Camera() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "" +
                "<Label text=\"test\"></Label>" +
                "<ListView id=\"images-" + _this.id + "\">" +
                "<ListView.itemTemplate>" +
                "<GridLayout columns='1' rows='*'>" +
                "<Image width=\"100\" height=\"100\" src=\"res://logo\" ></Image>" +
                "</GridLayout>" +
                "</ListView.itemTemplate>" +
                "</ListView>" +
                "<Button text=\"Foto maken/selecteren\" class=\"camera-button\" (tap)=\"onTap()\"></Button>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Value'];
        this.label = options['Label'];
        this.helper = options['Helper'];
        this.hasEvent = true;
        this.shouldSubmit = true;
    }
    return Camera;
}());
exports.Camera = Camera;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZXJhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFzQkk7UUFBWSxpQkFBVTthQUFWLFVBQVUsRUFBVixxQkFBVSxFQUFWLElBQVU7WUFBViw0QkFBVTs7UUFBdEIsaUJBUUM7UUFyQkQsV0FBTSxHQUFHO1lBQ04sTUFBTSxDQUFDLEVBQUU7Z0JBQ1QsK0JBQTZCO2dCQUM3Qix3QkFBdUIsR0FBQyxLQUFJLENBQUMsRUFBRSxHQUFDLEtBQUk7Z0JBQy9CLHlCQUF5QjtnQkFDckIsbUNBQW1DO2dCQUMvQixrRUFBNEQ7Z0JBQ2hFLGVBQWU7Z0JBQ25CLDBCQUEwQjtnQkFDOUIsYUFBYTtnQkFDYiw0RkFBc0YsQ0FBQztRQUMzRixDQUFDLENBQUE7UUFHRyxPQUFPLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDTCxhQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSx3QkFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIENhbWVyYSBpbXBsZW1lbnRzIEFic3RyYWN0RWxlbWVudCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIGhlbHBlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGhhc0V2ZW50OiBib29sZWFuO1xuICAgIHB1YmxpYyBzaG91bGRTdWJtaXQ6IGJvb2xlYW47XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgcmV0dXJuIGBgK1xuICAgICAgIGA8TGFiZWwgdGV4dD1cInRlc3RcIj48L0xhYmVsPmArXG4gICAgICAgYDxMaXN0VmlldyBpZD1cImltYWdlcy1gK3RoaXMuaWQrYFwiPmArXG4gICAgICAgICAgICBgPExpc3RWaWV3Lml0ZW1UZW1wbGF0ZT5gK1xuICAgICAgICAgICAgICAgIGA8R3JpZExheW91dCBjb2x1bW5zPScxJyByb3dzPScqJz5gK1xuICAgICAgICAgICAgICAgICAgICBgPEltYWdlIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3JjPVwicmVzOi8vbG9nb1wiID48L0ltYWdlPmArXG4gICAgICAgICAgICAgICAgYDwvR3JpZExheW91dD5gK1xuICAgICAgICAgICAgYDwvTGlzdFZpZXcuaXRlbVRlbXBsYXRlPmArXG4gICAgICAgIGA8L0xpc3RWaWV3PmArXG4gICAgICAgIGA8QnV0dG9uIHRleHQ9XCJGb3RvIG1ha2VuL3NlbGVjdGVyZW5cIiBjbGFzcz1cImNhbWVyYS1idXR0b25cIiAodGFwKT1cIm9uVGFwKClcIj48L0J1dHRvbj5gO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpe1xuICAgICAgICBvcHRpb25zID0gb3B0aW9uc1swXTtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnNbJ0lkJ107XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25zWydWYWx1ZSddO1xuICAgICAgICB0aGlzLmxhYmVsID0gb3B0aW9uc1snTGFiZWwnXTtcbiAgICAgICAgdGhpcy5oZWxwZXIgPSBvcHRpb25zWydIZWxwZXInXTtcbiAgICAgICAgdGhpcy5oYXNFdmVudD10cnVlO1xuICAgICAgICB0aGlzLnNob3VsZFN1Ym1pdD10cnVlO1xuICAgIH1cbn0iXX0=