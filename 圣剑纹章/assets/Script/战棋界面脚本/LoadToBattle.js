cc.Class({
    extends: cc.Component,

    properties: {

        Canva:{
            default: null,
            type: cc.Node,
        },
    },

    onLoad: function () {

    },

    LoadBattle:function(){
        this.Canva.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function () {
            cc.director.loadScene("Battle")
        })));

    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
