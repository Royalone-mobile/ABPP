"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paragraph = (function () {
    function Paragraph() {
        var options = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            options[_i] = arguments[_i];
        }
        var _this = this;
        this.render = function () {
            return "<Label text=\"" + _this.value + "\" class=\"paragraph\"></Label>";
        };
        options = options[0];
        this.id = options['Id'];
        this.value = options['Label'];
        this.label = '';
        this.helper = '';
        this.shouldSubmit = true;
        //this.options = JSON.parse(options['Options']);
    }
    return Paragraph;
}());
exports.Paragraph = Paragraph;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYWdyYXBoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicGFyYWdyYXBoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFjSTtRQUFZLGlCQUFVO2FBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtZQUFWLDRCQUFVOztRQUF0QixpQkFRQztRQVpELFdBQU0sR0FBRztZQUNMLE1BQU0sQ0FBQyxnQkFBZSxHQUFDLEtBQUksQ0FBQyxLQUFLLEdBQUMsaUNBQThCLENBQUM7UUFDckUsQ0FBQyxDQUFBO1FBR0csT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsWUFBWSxHQUFDLElBQUksQ0FBQztRQUN2QixnREFBZ0Q7SUFDcEQsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0RWxlbWVudCB9IGZyb20gXCIuL2VsZW1lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFBhcmFncmFwaCBpbXBsZW1lbnRzIEFic3RyYWN0RWxlbWVudCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIHZhbHVlOiBzdHJpbmc7XG4gICAgcHVibGljIGxhYmVsOiBzdHJpbmc7XG4gICAgcHVibGljIGhlbHBlcjogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIG9wdGlvbnM6IEFycmF5PE9iamVjdD47XG4gICAgcHVibGljIGhhc0V2ZW50OiBib29sZWFuO1xuICAgIHB1YmxpYyBzaG91bGRTdWJtaXQ6IGJvb2xlYW47XG5cbiAgICByZW5kZXIgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBgPExhYmVsIHRleHQ9XCJgK3RoaXMudmFsdWUrYFwiIGNsYXNzPVwicGFyYWdyYXBoXCI+PC9MYWJlbD5gO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKC4uLm9wdGlvbnMpe1xuICAgICAgICBvcHRpb25zID0gb3B0aW9uc1swXTtcbiAgICAgICAgdGhpcy5pZCA9IG9wdGlvbnNbJ0lkJ107XG4gICAgICAgIHRoaXMudmFsdWUgPSBvcHRpb25zWydMYWJlbCddO1xuICAgICAgICB0aGlzLmxhYmVsID0gJyc7XG4gICAgICAgIHRoaXMuaGVscGVyID0gJyc7XG4gICAgICAgIHRoaXMuc2hvdWxkU3VibWl0PXRydWU7XG4gICAgICAgIC8vdGhpcy5vcHRpb25zID0gSlNPTi5wYXJzZShvcHRpb25zWydPcHRpb25zJ10pO1xuICAgIH1cbn0iXX0=