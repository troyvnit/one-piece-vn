Ext.define('OnePiece.model.PhotoPost', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
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
			{ name: 'caption', type: '' }
        ],
        associations: [
            { type: 'hasMany', model: 'OnePiece.model.PhotoPost.Photo', name: 'photos' }
        ]
    }
});

Ext.define('OnePiece.model.PhotoPost.Photo', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
			{ name: 'id', type: 'int' },
			{ name: 'width', type: 'int' },
			{ name: 'height', type: 'int' }
        ],
        associations: [
            { type: 'belongsTo', model: 'OnePiece.model.PhotoPost', primaryKey: 'id', foreignKey: 'photopost_id' },
            { type: 'hasMany', model: 'OnePiece.model.PhotoPost.Photo.Info', name: 'alt_sizes' }
        ]
    }
});

Ext.define('OnePiece.model.PhotoPost.Photo.Info', {
    extend: 'Ext.data.Model',

    config: {
        idProperty: 'id',
        fields: [
			{ name: 'id', type: 'int' },
			{ name: 'width', type: 'int' },
			{ name: 'height', type: 'int' },
			{ name: 'url', type: 'string' }
        ],
        associations: [
            { type: 'belongsTo', model: 'OnePiece.model.PhotoPost.Photo', primaryKey: 'id', foreignKey: 'photo_id' }
        ]
    }
});