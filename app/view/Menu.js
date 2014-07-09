Ext.define('OnePiece.view.Menu', {
    extend: 'Ext.Container',
    xtype: 'mainmenu',
    config: {
        layout: 'vbox',
        cls: 'mainmenu',
        docked: 'left',
		top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
		width: 285,
        padding: '100 0 0 0',
        open: false,
        scrollable: 'vertical',
        defaultType: 'button',
        defaults: {
            textAlign: 'left'
        },
        items: [{
            xtype: 'panel',
            cls:'profile',
                    data:{
                        firstname: 'Troy',
                        lastname: 'Lee',
                        avatar: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/t1.0-1/p160x160/1229921_661986813819335_105860452_n.jpg'
                    },
                    tpl: '<span class="profile-avatar"><img src="{avatar}"></span><span class="profile-welcome"><div class="profile-fullname">{firstname} <strong>{lastname}</strong></div><div class="profile-message">Welcome</div></span>',
                flex: 1
        },
            {
                    xtype: 'list',
                    cls: 'mainmenu-list',
                    itemHeight: 60,
                    baseCls: 'menuList',
                    scrollable: false,
                    flex: 4,
                    store: {
                        fields: ['name', 'icon'],
                        data: [
                            { name: 'Edit profile', icon: '/resources/images/config.png' },
                            { name: 'Everett', icon: '/resources/images/config.png' },
                            { name: 'University', icon: '/resources/images/config.png' },
                            { name: 'Forest', icon: '/resources/images/config.png' },
                            { name: 'Everett', icon: '/resources/images/config.png' },
                            { name: 'University', icon: '/resources/images/config.png' }
                        ]
                    },
                    itemTpl: '<span class="mainmenu-icon"><img src="{icon}"/></span><span class="mainmenu-name">{name}</span>'
                }]
    },
    
    setParent: function(parent) {
        this.callParent(arguments);
        this.maskCmp = parent.add({
            xtype   : 'component',
            cls     : 'mainmenu-mask',
            top     : 0,
            zIndex  : 5000,
            hidden  : true,
			width   : 9999,
			left    : this.getWidth(),
			bottom  : 0
        });
        
        this.maskCmp.element.on({
            scope   : this,
            touchend: 'onMaskRelease'
        });
    },
    
    onMaskRelease: function() {
        this.setOpen(false);
    },
    
    onDestroy: function() {
        this.maskCmp.destroy();
        delete this.maskCmp;
        
        this.callParent(arguments);
    },
    
    toggle: function() {
        this.setOpen(!this.getOpen());
    },
    
    updateOpen: function(open) {
        var targetEl,
            parentCt = this.up();
        
        if (!parentCt) {
            return;
        }
        
        targetEl = parentCt.innerElement;
        
        if (open) {
			targetEl.translate(this.getWidth(), 0, 0);
            this.maskCmp.show();
        }
        else {
            targetEl.translate(0, 0, 0);
            this.maskCmp.hide();
        }
    }
});