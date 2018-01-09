cc.Class({
    extends: cc.Component,

    properties: {
        gamestart: {
            default: null,
            type: cc.Node
        },
        load: {
            default: null,
            type: cc.Node
        },
        setting: {
            default: null,
            type: cc.Node
        },
        exit: {
            default: null,
            type: cc.Node
        },
       press: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {
this.gamestart.runAction(cc.hide());
this.load.runAction(cc.hide());
this.setting.runAction(cc.hide());
this.exit.runAction(cc.hide());
this.press.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(1.0),cc.fadeOut(1.0))));
this.node.on("touchstart", function(event){
this.gamestart.runAction(cc.fadeIn(1.0));
        },this);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
