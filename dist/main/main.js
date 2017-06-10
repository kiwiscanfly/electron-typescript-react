"use strict";
//import {Electron} from 'electron';
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
        Main.mainWindow.webContents.openDevTools();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG9DQUFvQzs7QUFFcEM7SUFBQTtJQTZCQSxDQUFDO0lBekJVLHNCQUFpQixHQUF4QjtRQUNJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO1lBQzlCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNNLFlBQU8sR0FBZDtRQUNJLGlFQUFpRTtRQUNqRSxtRUFBbUU7UUFDbkUsb0RBQW9EO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDTSxZQUFPLEdBQWQ7UUFDSSxpREFBaUQ7UUFDakQsOENBQThDO1FBQzlDLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQyxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUNNLFNBQUksR0FBWCxVQUFZLEdBQWlCLEVBQUMsYUFBNEM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLEVBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBQ0wsV0FBQztBQUFELENBN0JBLEFBNkJDLElBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IHtFbGVjdHJvbn0gZnJvbSAnZWxlY3Ryb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluIHtcbiAgICBzdGF0aWMgbWFpbldpbmRvdzogRWxlY3Ryb24uQnJvd3NlcldpbmRvdztcbiAgICBzdGF0aWMgYXBwbGljYXRpb246IEVsZWN0cm9uLkFwcDtcbiAgICBzdGF0aWMgQnJvd3NlcldpbmRvdztcbiAgICBzdGF0aWMgb25XaW5kb3dBbGxDbG9zZWQoKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLnBsYXRmb3JtICE9PSAnZGFyd2luJylcbiAgICAgICAgICAgIE1haW4uYXBwbGljYXRpb24ucXVpdCgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25DbG9zZSgpe1xuICAgICAgICAvLyBEZXJlZmVyZW5jZSB0aGUgd2luZG93IG9iamVjdCwgdXN1YWxseSB5b3Ugd291bGQgc3RvcmUgd2luZG93c1xuICAgICAgICAvLyBpbiBhbiBhcnJheSBpZiB5b3VyIGFwcCBzdXBwb3J0cyBtdWx0aSB3aW5kb3dzLCB0aGlzIGlzIHRoZSB0aW1lXG4gICAgICAgIC8vIHdoZW4geW91IHNob3VsZCBkZWxldGUgdGhlIGNvcnJlc3BvbmRpbmcgZWxlbWVudC5cbiAgICAgICAgTWFpbi5tYWluV2luZG93ID0gbnVsbDtcbiAgICB9XG4gICAgc3RhdGljIG9uUmVhZHkoKXtcbiAgICAgICAgLy8gdGhpcyBpcyBhIGRlcGVuZGVuY3kgd2Ugd2lsbCBoYXZlIHRvIGxpdmUgd2l0aFxuICAgICAgICAvLyBiZWNhdXNlIHdlIGNhbid0IGNyZWF0ZSBCcm93c2VyV2luZG93IHVudGlsXG4gICAgICAgIC8vIG9uUmVhZHkgZmlyZXMuXG4gICAgICAgIE1haW4ubWFpbldpbmRvdyA9IG5ldyBNYWluLkJyb3dzZXJXaW5kb3coe3dpZHRoOiA4MDAsIGhlaWdodDogNjAwfSlcbiAgICAgICAgTWFpbi5tYWluV2luZG93LmxvYWRVUkwoJ2ZpbGU6Ly8nICsgX19kaXJuYW1lICsgJy8uLi9yZW5kZXIvaW5kZXguaHRtbCcpO1xuICAgICAgICBNYWluLm1haW5XaW5kb3cud2ViQ29udGVudHMub3BlbkRldlRvb2xzKCk7XG4gICAgICAgIE1haW4ubWFpbldpbmRvdy5vbignY2xvc2VkJywgTWFpbi5vbkNsb3NlKTtcbiAgICB9XG4gICAgc3RhdGljIG1haW4oYXBwOiBFbGVjdHJvbi5BcHAsYnJvd3NlcldpbmRvdzogdHlwZW9mIEVsZWN0cm9uLkJyb3dzZXJXaW5kb3cpe1xuICAgICAgICBNYWluLkJyb3dzZXJXaW5kb3cgPSBicm93c2VyV2luZG93O1xuICAgICAgICBNYWluLmFwcGxpY2F0aW9uID0gYXBwO1xuICAgICAgICBNYWluLmFwcGxpY2F0aW9uLm9uKCd3aW5kb3ctYWxsLWNsb3NlZCcsTWFpbi5vbldpbmRvd0FsbENsb3NlZCk7XG4gICAgICAgIE1haW4uYXBwbGljYXRpb24ub24oJ3JlYWR5JywgTWFpbi5vblJlYWR5KTtcbiAgICB9XG59XG5cbiJdfQ==
