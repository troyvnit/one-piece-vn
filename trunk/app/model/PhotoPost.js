Ext.define('OnePiece.model.PhotoPost', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
			{ name: 'id', type: 'int' },
			{ name: 'blog_name', type: 'string' },
			{ name: 'post_url', type: 'string' },
			{ name: 'type', type: 'string' },
			{ name: 'date', type: 'date' },
			{ name: 'timestamp', type: 'int' },
			{ name: 'format', type: 'string' },
			{ name: 'reblog_key', type: 'string' },
			{ name: 'tags', type: 'auto' },
			{ name: 'note_count', type: 'int' },
			{ name: 'caption', type: 'string' },
			{ name: 'photos', type: 'auto' }
        ]
    }
});
