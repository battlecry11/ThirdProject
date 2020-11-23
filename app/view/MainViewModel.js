Ext.define('AK.view.MainViewModel',{
    extend: 'Ext.app.ViewModel',
    stores: {
        topics: {
            autoLoad: true,
            fields: ['title', 'threadid', 'replycount',{name: 'lastpost',type:'date',dateFormat: 'timestamp'}, 'lastposter', 'excerpt'],
            proxy: {
                type: 'rest',
                headers : {
                    'Authorization': 'Basic YWRtaW46YWRtaW4='
                },
                url: 'https://softlab-api.softgen.ge/sencha/topics',
                reader: {
                    rootProperty: 'topics',
                    totalProperty: 'totalCount'
                }

            }
        }
    }
})