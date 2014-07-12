Ext.define('OnePiece.store.PhotoPostStore', {
    extend: 'Ext.data.Store',
    config: {
        model: 'OnePiece.model.PhotoPost',
        autoLoad: true,
        proxy: {
            type: "ajax",
            url: "http://api.tumblr.com/v2/blog/troyvnit.tumblr.com/posts?api_key=bG5akRvJLhTpHlXRp0tzLMsVBQc582JFk3SP6HbEJobnGysh8W",
            reader: {
                type: "json",
                rootProperty: "photos"
            }
        }
    }
});