Ext.define('AK.view.Grid', {
    extend: 'Ext.grid.Panel',
    bind: '{topics}',
    columns: [{
        xtype: 'templatecolumn',
        text: 'Topic',
        dataIndex: 'title',
        tpl: '<b><a href="http://sencha.com/forum/showthread.php?t={threadid}" target="_blank">{title}</a></b>',
        flex: 1,

    },{
        text: 'replies',
        dataIndex: 'replycount',
        flex: 1,
    },{
        xtype: 'templatecolumn',
        text: 'Last Post',
        //dataIndex: 'lastpost',
        tpl: '{lastpost:date("H:i d.m.Y")} by <strong>{lastposter}</strong>',

        flex: 1
    }],
    plugins: {
        ptype: 'rowexpander',
        rowBodyTpl: new Ext.Template('excerpt:this.addParagraphs',{
            addParagraphs:v=> v.replace('\n', '<br/>')
        })
    },
    bbar: {
        xtype: 'pagingtoolbar'
    }
})