cc.Class({
    extends: cc.Component,

    properties: {

    },


    onLoad: function () {
        this.node.runAction(cc.repeatForever(cc.sequence(cc.sequence(cc.fadeIn(0.2),cc.delayTime(0.5)),cc.fadeOut(0.2))));
    },


});
