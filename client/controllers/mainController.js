var mainController = (function () {
    function mainController() {
        this.message = "Hello from the controller!";
        this.items = [
            { title: 'a', body: 'albatross' },
            { title: 'b', body: 'barbados' }
        ];
    }
    return mainController;
}());
var page1Controller = (function () {
    function page1Controller() {
    }
    return page1Controller;
}());
angular.module('exampleApp').controller('mainController', mainController);
angular.module('exampleApp').controller('page1Controller', page1Controller);
