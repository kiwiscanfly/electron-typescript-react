"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Main = (function () {
    function Main() {
    }
    Main.onWindowAllClosed = function () {
        if (process.platform !== 'darwin')
            Main.application.quit();
    };
    Main.onClose = function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        Main.mainWindow = null;
    };
    Main.onReady = function () {
        // this is a dependency we will have to live with
        // because we can't create BrowserWindow until
        // onReady fires.
        Main.mainWindow = new Main.BrowserWindow({ width: 800, height: 600 });
        Main.mainWindow.loadURL('file://' + __dirname + '/../render/index.html');
        Main.mainWindow.on('closed', Main.onClose);
    };
    Main.main = function (app, browserWindow) {
        Main.BrowserWindow = browserWindow;
        Main.application = app;
        Main.application.on('window-all-closed', Main.onWindowAllClosed);
        Main.application.on('ready', Main.onReady);
    };
    return Main;
}());
exports.default = Main;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL21haW4vbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQUE7SUE0QkEsQ0FBQztJQXhCVSxzQkFBaUIsR0FBeEI7UUFDSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDTSxZQUFPLEdBQWQ7UUFDSSxpRUFBaUU7UUFDakUsbUVBQW1FO1FBQ25FLG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ00sWUFBTyxHQUFkO1FBQ0ksaURBQWlEO1FBQ2pELDhDQUE4QztRQUM5QyxpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUMsQ0FBQyxDQUFBO1FBQ25FLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLEdBQUcsdUJBQXVCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDTSxTQUFJLEdBQVgsVUFBWSxHQUFpQixFQUFDLGFBQW1DO1FBQzdELElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLG1CQUFtQixFQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBIiwiZmlsZSI6Ii4uLy4uL21haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RWxlY3Ryb259IGZyb20gJ2VsZWN0cm9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiB7XG4gICAgc3RhdGljIG1haW5XaW5kb3c6IEVsZWN0cm9uLkJyb3dzZXJXaW5kb3c7XG4gICAgc3RhdGljIGFwcGxpY2F0aW9uOiBFbGVjdHJvbi5BcHA7XG4gICAgc3RhdGljIEJyb3dzZXJXaW5kb3c7XG4gICAgc3RhdGljIG9uV2luZG93QWxsQ2xvc2VkKCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSAhPT0gJ2RhcndpbicpXG4gICAgICAgICAgICBNYWluLmFwcGxpY2F0aW9uLnF1aXQoKTtcbiAgICB9XG4gICAgc3RhdGljIG9uQ2xvc2UoKXtcbiAgICAgICAgLy8gRGVyZWZlcmVuY2UgdGhlIHdpbmRvdyBvYmplY3QsIHVzdWFsbHkgeW91IHdvdWxkIHN0b3JlIHdpbmRvd3NcbiAgICAgICAgLy8gaW4gYW4gYXJyYXkgaWYgeW91ciBhcHAgc3VwcG9ydHMgbXVsdGkgd2luZG93cywgdGhpcyBpcyB0aGUgdGltZVxuICAgICAgICAvLyB3aGVuIHlvdSBzaG91bGQgZGVsZXRlIHRoZSBjb3JyZXNwb25kaW5nIGVsZW1lbnQuXG4gICAgICAgIE1haW4ubWFpbldpbmRvdyA9IG51bGw7XG4gICAgfVxuICAgIHN0YXRpYyBvblJlYWR5KCl7XG4gICAgICAgIC8vIHRoaXMgaXMgYSBkZXBlbmRlbmN5IHdlIHdpbGwgaGF2ZSB0byBsaXZlIHdpdGhcbiAgICAgICAgLy8gYmVjYXVzZSB3ZSBjYW4ndCBjcmVhdGUgQnJvd3NlcldpbmRvdyB1bnRpbFxuICAgICAgICAvLyBvblJlYWR5IGZpcmVzLlxuICAgICAgICBNYWluLm1haW5XaW5kb3cgPSBuZXcgTWFpbi5Ccm93c2VyV2luZG93KHt3aWR0aDogODAwLCBoZWlnaHQ6IDYwMH0pXG4gICAgICAgIE1haW4ubWFpbldpbmRvdy5sb2FkVVJMKCdmaWxlOi8vJyArIF9fZGlybmFtZSArICcvLi4vcmVuZGVyL2luZGV4Lmh0bWwnKTtcbiAgICAgICAgTWFpbi5tYWluV2luZG93Lm9uKCdjbG9zZWQnLCBNYWluLm9uQ2xvc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgbWFpbihhcHA6IEVsZWN0cm9uLkFwcCxicm93c2VyV2luZG93OiB0eXBlb2YgQnJvd3NlcldpbmRvdyl7XG4gICAgICAgIE1haW4uQnJvd3NlcldpbmRvdyA9IGJyb3dzZXJXaW5kb3c7XG4gICAgICAgIE1haW4uYXBwbGljYXRpb24gPSBhcHA7XG4gICAgICAgIE1haW4uYXBwbGljYXRpb24ub24oJ3dpbmRvdy1hbGwtY2xvc2VkJyxNYWluLm9uV2luZG93QWxsQ2xvc2VkKTtcbiAgICAgICAgTWFpbi5hcHBsaWNhdGlvbi5vbigncmVhZHknLCBNYWluLm9uUmVhZHkpO1xuICAgIH1cbn1cblxuIl19
