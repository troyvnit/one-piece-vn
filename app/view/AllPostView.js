Ext.define('OnePiece.view.AllPostView', {
    extend: 'Ext.Panel',
    xtype: 'allPostView',
    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel',
        'Ext.dataview.List',
        'OnePiece.store.PhotoPostStore'
    ],
    config: {
        cls: 'all-post-panel',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                title: 'All Post',
                cls: 'all-post-toolbar',
                items: [
                    {
                        iconCls: 'menu2',
                        handler: function() {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
            {
                xtype: 'infinitelist',
                flex: 0.9,
                pinHeaders: false,
                disableSelection: true,
                cls: 'postlist',
                store: 'PhotoPostStore',

                itemTpl: '<div class="box col2">' +
                    '<div class="box-footer">' +
                    '<span class="profile-avatar">' +
                    '<img data-gifffer="http://api.tumblr.com/v2/blog/{blog_name}.tumblr.com/avatar/64?api_key=bG5akRvJLhTpHlXRp0tzLMsVBQc582JFk3SP6HbEJobnGysh8W" />' +
                    '</span>' +
                    '<span class="box-postername">' +
                    '{blog_name}' +
                    '</span>' +
                    '<span class="box-createdtime box-action-count">' +
                    '<span class="clock-full-icon"></span>' +
                    '<span class="text">1h</span>' +
                    '</span>' +
                    '<span class="box-likecount box-action-count">' +
                    '<span class="like-full-icon"></span>' +
                    '<span class="text">15</span>' +
                    '</span>' +
                    '<span class="box-commentcount box-action-count">' +
                    '<span class="comment-full-icon"></span>' +
                    '<span class="text">1h</span>' +
                    '</span>' +
                    '</div>' +
                    '<div class="box-content">' +
                    '<tpl for="photos">' +
                    '<tpl for="alt_sizes">' +
                    '<tpl if="[xindex] == \'1\'">' +
                    '<div class="infinite-item">' +
                        '<div class="wrapper" style="position: relative; width:100%; padding-bottom: {[100*values.height/values.width]}%;">' +
                            '<div class="inner" style="position:absolute; top:0; bottom:0; left:0; right:0 ">' +
                                '<img style="width: 100%; opacity:0; transition: opacity 3s" data-gifffer="{url}" />' +
                            '</div>' +
                        '</div>' +
                    '</div>'+
                    '</tpl>' +
                    '</tpl>' +
                    '</tpl>' +
                    '</div>' +
                    '<div class="box-arrow">' +
                    '<div class="box-shortdesc">' +
                    '{caption}' +
                    '</div>' +
                    '</div>' +
                    '<div class="box-action">' +
                    '<span class="box-like">' +
                    '<a href="#" class="stylish"><span class="icon-heart"></span></a>' +
                    '</span>' +
                    '<span class="box-comment">' +
                    '<a href="#" class="stylish"><span class="icon-message2"></span></a>' +
                    '</span>' +
                    '<span class="box-share">' +
                    '<a href="#" class="stylish"><span class="icon-cloud"></span></a>' +
                    '</span>' +
                    '</div>' +
                    '</div>',

                listeners: {
                    select: function(view, record) {
                        Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                    }
                }
            }
        ]
    }
});
