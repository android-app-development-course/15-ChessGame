cc.Class({
    extends: cc.Component,

    properties: {
        Blocks:{
            default: [],
            type: [cc.Node],
        },
    },


    onLoad: function () {
        
    },

    Attack: function () {
        var i=0;
        while(i<=3){
            this.Blocks[i].color = new cc.Color(213,26,33);
            this.Blocks[i].opacity = 160;
            i=i+1;
        }
        while(i<=27){
            this.Blocks[i].opacity = 0;
            i=i+1;
        }
        this.node.active=false;
    },

});

