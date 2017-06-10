System.register(["./hello-world", "react", "react-dom"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hello_world_1, react_1, react_dom_1, MainView;
    return {
        setters: [
            function (hello_world_1_1) {
                hello_world_1 = hello_world_1_1;
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
                    react_dom_1.default.render(react_1.default.createElement(hello_world_1.default, null), document.getElementById('content'));
                };
                return MainView;
            }());
            exports_1("default", MainView);
            ;
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3JlbmRlci9tYWluLXZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSUE7Z0JBRUM7Z0JBRUEsQ0FBQztnQkFFRCx3QkFBSyxHQUFMO29CQUNDLG1CQUFRLENBQUMsTUFBTSxDQUNkLDhCQUFDLHFCQUFVLE9BQUcsRUFDZCxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUNsQyxDQUFDO2dCQUNILENBQUM7Z0JBQ0YsZUFBQztZQUFELENBWkEsQUFZQyxJQUFBOztZQUFBLENBQUM7UUFBQSxDQUFDIiwiZmlsZSI6Ii4uLy4uL3JlbmRlci9tYWluLXZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVsbG9Xb3JsZCBmcm9tICcuL2hlbGxvLXdvcmxkJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluVmlldyB7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0XG5cdH1cblxuXHRoZWxsbygpIHtcblx0XHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0XHQ8SGVsbG9Xb3JsZCAvPixcblx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jylcblx0XHQpO1xuXHR9XG59OyJdfQ==
