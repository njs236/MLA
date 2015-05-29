var mla = {};

mla = (function () {
    var initModule = function () {
     
        var controller = mla.controller.initModule();
        var model = controller.returnModel();
        mla.test.initialize(model, controller);
    }
    
    return {initModule: initModule};
}())