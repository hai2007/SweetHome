let dialogs = {
    aboutUS: () => import('./aboutUS.paper')
};


export default {
    install(QuickPaper) {
        window.sweethome_dialog = null;

        // 打开弹框
        QuickPaper.prototype.$openDialog = function (dialogName) {
            dialogs[dialogName]().then(data => {
                window.sweethome_dialog = data.default;
                document.getElementById('dialog_help_button').click();
            });
        };

        // 关闭弹框
        QuickPaper.prototype.$closeDialog = function () {
            window.sweethome_dialog = null;
            document.getElementById('dialog_help_button').click();
        };

    }
};
