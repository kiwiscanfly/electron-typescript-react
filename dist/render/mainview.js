System.register(["./helloworld.js", "react", "react-dom"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var helloworld_js_1, react_1, react_dom_1, MainView;
    return {
        setters: [
            function (helloworld_js_1_1) {
                helloworld_js_1 = helloworld_js_1_1;
            },
            function (react_1_1) {
                react_1 = react_1_1;
            },
            function (react_dom_1_1) {
                react_dom_1 = react_dom_1_1;
            }
        ],
        execute: function () {
            MainView = (function () {
                function MainView() {
                }
                MainView.prototype.hello = function () {
                    react_dom_1.default.render(react_1.default.createElement(helloworld_js_1.default, null), document.getElementById('content'));
                };
                return MainView;
            }());
            exports_1("default", MainView);
            ;
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW52aWV3LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUVDO2dCQUVBLENBQUM7Z0JBRUQsd0JBQUssR0FBTDtvQkFDQyxtQkFBUSxDQUFDLE1BQU0sQ0FDZCw4QkFBQyx1QkFBVSxPQUFHLEVBQ2QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FDbEMsQ0FBQztnQkFDSCxDQUFDO2dCQUNGLGVBQUM7WUFBRCxDQVpBLEFBWUMsSUFBQTs7WUFBQSxDQUFDO1FBQUEsQ0FBQyIsImZpbGUiOiJtYWludmlldy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWxsb1dvcmxkIGZyb20gJy4vaGVsbG93b3JsZC5qcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdFxuXHR9XG5cblx0aGVsbG8oKSB7XG5cdFx0UmVhY3RET00ucmVuZGVyKFxuXHRcdFx0PEhlbGxvV29ybGQgLz4sXG5cdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cdFx0KTtcblx0fVxufTsiXX0=
