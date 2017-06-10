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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbGxvd29ybGQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVBO2dCQUF3Qyw4QkFBdUI7Z0JBQS9EOztnQkFXQSxDQUFDO2dCQVRVLDJCQUFNLEdBQWI7b0JBRUksTUFBTSxDQUFDLENBQ0gsdUNBQUssU0FBUyxFQUFDLGFBQWEsb0JBRXRCLENBQ1QsQ0FBQztnQkFFTixDQUFDO2dCQUNMLGlCQUFDO1lBQUQsQ0FYQSxBQVdDLENBWHVDLGVBQUssQ0FBQyxTQUFTLEdBV3REOztRQUNELENBQUMiLCJmaWxlIjoiaGVsbG93b3JsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8e30sIHt9PiB7XG5cbiAgICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIFx0XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvLXdvcmxkXCI+XG4gICAgICAgICAgICAgICAgSGVsbG8sIHdvcmxkIVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==
