System.register(["react"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var react_1, HelloWorld;
    return {
        setters: [
            function (react_1_1) {
                react_1 = react_1_1;
            }
        ],
        execute: function () {
            HelloWorld = (function (_super) {
                __extends(HelloWorld, _super);
                function HelloWorld() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                HelloWorld.prototype.render = function () {
                    return (react_1.default.createElement("div", { className: "hello-world" }, "Hello, world!"));
                };
                return HelloWorld;
            }(react_1.default.Component));
            exports_1("default", HelloWorld);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3JlbmRlci9oZWxsby13b3JsZC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBRUE7Z0JBQXdDLDhCQUF1QjtnQkFBL0Q7O2dCQVdBLENBQUM7Z0JBVFUsMkJBQU0sR0FBYjtvQkFFSSxNQUFNLENBQUMsQ0FDSCx1Q0FBSyxTQUFTLEVBQUMsYUFBYSxvQkFFdEIsQ0FDVCxDQUFDO2dCQUVOLENBQUM7Z0JBQ0wsaUJBQUM7WUFBRCxDQVhBLEFBV0MsQ0FYdUMsZUFBSyxDQUFDLFNBQVMsR0FXdEQ7O1FBQ0QsQ0FBQyIsImZpbGUiOiIuLi8uLi9yZW5kZXIvaGVsbG8td29ybGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWxsb1dvcmxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PHt9LCB7fT4ge1xuXG4gICAgcHVibGljIHJlbmRlcigpIHtcbiAgICBcdFxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWxsby13b3JsZFwiPlxuICAgICAgICAgICAgICAgIEhlbGxvLCB3b3JsZCFcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
