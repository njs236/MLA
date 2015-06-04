var mla = {};

mla = (function () {
    var initModule = function () {
     
        var controller = mla.controller.initModule();
        var model = controller.returnModel();
        var view = controller.returnView();
        mla.test.initialize(model, controller, view);
    }
    
    return {initModule: initModule};
}())