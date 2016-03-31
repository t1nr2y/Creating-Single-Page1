﻿define(['services/logger'], function (logger) {
    var title = 'Home page';
    var vm = {
        activate: activate,
        title: title
    };

    return vm;

    //#region Internal Methods
    function activate() {
        logger.log(title + ' View Activated', null, title, true);
        return true;
    }
    //#endregion
});