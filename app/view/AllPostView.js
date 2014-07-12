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
                        iconCls: 'menu-icon',
                        handler: function () {
                            Ext.Viewport.child('mainmenu').toggle();
                        }
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            },
                    {
                        xtype: 'list',
                        flex: 0.9,
                        pinHeaders: false,
                        disableSelection: true,
                        cls: 'postlist',
                        store: 'PhotoPostStore',

                        itemTpl: '<div class="box col2">' +
                            '<div class="box-footer">' +
                            '<span class="profile-avatar">' +
                            '<img src="https://gp5.googleusercontent.com/-q6wSJriJDws/AAAAAAAAAAI/AAAAAAAAAAA/EshQZ2QhOQc/s48-c-k-no/photo.jpg" />' +
                            '</span>' +
                            '<span class="box-postername">' +
                            'Kizaru' +
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
                            '<img src="http://img.hayhaytv.com/film/04102013/one-piece_64431380857712.jpg">' +
                            '</div>' +
                            '<div class="box-arrow">' +
                            '<div class="box-shortdesc">' +
                            '<p>{caption}</p>' +
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
                            select: function (view, record) {
                                Ext.Msg.alert('Selected!', 'You selected ' + record.get('name'));
                            }
                        }
                    }
        ]
    }
});
