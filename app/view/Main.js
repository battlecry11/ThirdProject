Ext.define('AK.view.Main', {
    extend: 'Ext.panel.Panel',
    layout: 'fit',
    controller: {
        class: 'AK.view.MainController',
    },
    viewModel: {
        xclass: 'AK.view.MainViewModel',
    },
    items: [{  xclass: 'AK.view.Grid'}]


})