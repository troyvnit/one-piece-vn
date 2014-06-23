Ext.define('OnePiece.view.AllPostView', {
    extend: 'Ext.Container',
    xtype: 'allPostView',
    requires: [
        'Ext.TitleBar',
        'Ext.carousel.Carousel'
    ],
    config: {
        scrollable: true,
        items: [
            {
                xtype: 'toolbar',
                title: 'All Post',
                items: [
                    {
                        text: 'Back',
                        ui: 'back'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: 'Save',
                        ui: 'confirm'
                    }
                ]
            },
            {
                xtype: 'panel',
                height: '1000px',
                itemId: 'contentPanel',
                scrollable: true,
                items: [
                    {
                        xtype: 'gallery',
                        height: '1000px'
                    }
                ]
            }
        ]
    }
});
