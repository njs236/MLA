var mla = {};

mla = (function () {
    var initModule = function () {
        var view = mla.view.initModule({levelScreen: document.getElementById('selectScreen'),
        resultsScreen: document.getElementById('resultsScreen')});
        var model = mla.model.initModule();
        var controller = mla.controller.initModule(view, model);
        view.setController(controller);
        controller.Vocabulary();
        mla.test.initialize(model, controller);
    }
    
    return {initModule: initModule};
}())