"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DynamicComponent = (function () {
    function DynamicComponent(compiler) {
        this.compiler = compiler;
    }
    DynamicComponent.prototype.addComponent = function (container, template) {
        var TemplateComponent = (function () {
            function TemplateComponent() {
            }
            return TemplateComponent;
        }());
        TemplateComponent = __decorate([
            core_1.Component({ template: template })
        ], TemplateComponent);
        var TemplateModule = (function () {
            function TemplateModule() {
            }
            return TemplateModule;
        }());
        TemplateModule = __decorate([
            core_1.NgModule({ declarations: [TemplateComponent] })
        ], TemplateModule);
        var mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
        var factory = mod.componentFactories.filter(function (comp) {
            return comp.componentType === TemplateComponent;
        });
        var component = container.createComponent(factory[0]);
        return TemplateComponent;
    };
    return DynamicComponent;
}());
DynamicComponent = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], DynamicComponent);
exports.DynamicComponent = DynamicComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkeW5hbWljLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRjtBQUczRixJQUFhLGdCQUFnQjtJQUV6QiwwQkFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUFHLENBQUM7SUFHbkMsdUNBQVksR0FBbkIsVUFBb0IsU0FBMkIsRUFBRSxRQUFnQjtRQUU3RCxJQUFNLGlCQUFpQjtZQUF2QjtZQUF3QixDQUFDO1lBQUQsd0JBQUM7UUFBRCxDQUFDLEFBQXpCLElBQXlCO1FBQW5CLGlCQUFpQjtZQUR0QixnQkFBUyxDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDO1dBQzFCLGlCQUFpQixDQUFFO1FBR3pCLElBQU0sY0FBYztZQUFwQjtZQUFzQixDQUFDO1lBQUQscUJBQUM7UUFBRCxDQUFDLEFBQXZCLElBQXVCO1FBQWpCLGNBQWM7WUFEbkIsZUFBUSxDQUFDLEVBQUMsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBQyxDQUFDO1dBQ3hDLGNBQWMsQ0FBRztRQUV2QixJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVFLElBQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJO1lBQy9DLE9BQUEsSUFBSSxDQUFDLGFBQWEsS0FBSyxpQkFBaUI7UUFBeEMsQ0FBd0MsQ0FDM0MsQ0FBQztRQUNGLElBQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzdCLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUFuQkQsSUFtQkM7QUFuQlksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7cUNBR3FCLGVBQVE7R0FGN0IsZ0JBQWdCLENBbUI1QjtBQW5CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBDb21waWxlciwgQ29tcG9uZW50LCBOZ01vZHVsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIER5bmFtaWNDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHt9XG5cblxuICAgIHB1YmxpYyBhZGRDb21wb25lbnQoY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZTogc3RyaW5nKXtcbiAgICAgICAgQENvbXBvbmVudCh7dGVtcGxhdGU6IHRlbXBsYXRlfSlcbiAgICAgICAgY2xhc3MgVGVtcGxhdGVDb21wb25lbnR7fVxuXG4gICAgICAgIEBOZ01vZHVsZSh7ZGVjbGFyYXRpb25zOiBbVGVtcGxhdGVDb21wb25lbnRdfSlcbiAgICAgICAgY2xhc3MgVGVtcGxhdGVNb2R1bGUge31cblxuICAgICAgICBjb25zdCBtb2QgPSB0aGlzLmNvbXBpbGVyLmNvbXBpbGVNb2R1bGVBbmRBbGxDb21wb25lbnRzU3luYyhUZW1wbGF0ZU1vZHVsZSk7XG4gICAgICAgIGNvbnN0IGZhY3RvcnkgPSBtb2QuY29tcG9uZW50RmFjdG9yaWVzLmZpbHRlcigoY29tcCk9PlxuICAgICAgICAgICAgY29tcC5jb21wb25lbnRUeXBlID09PSBUZW1wbGF0ZUNvbXBvbmVudFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBjb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnlbMF0pO1xuICAgICAgICByZXR1cm4gVGVtcGxhdGVDb21wb25lbnQ7XG4gICAgfVxufSJdfQ==