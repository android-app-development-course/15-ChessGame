// Learn cc.Class:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/class/index.html
// Learn Attribute:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/reference/attributes/index.html
// Learn life-cycle callbacks:
//  - [Chinese] http://www.cocos.com/docs/creator/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/editors_and_tools/creator-chapters/scripting/life-cycle-callbacks/index.html

cc.Class({
    extends: cc.Component,

    properties: {
        DragonHp: {
            default: null,
            type: cc.Label,
        },

        Background: {
            default: null,
            type: cc.Node,
        },
    },

    onLoad () {
        this.schedule(function () {
            this.node.runAction(cc.sequence(cc.blink(0.7, 3), cc.fadeOut(1.0)));
            this.DragonHp.string = 0;
            this.schedule(function () {
                this.Background.runAction(cc.sequence(cc.fadeOut(2.0), cc.callFunc(function () {
                cc.director.loadScene("Story2")
                })));
            }, 0, 0, 2);
        }, 0, 0, 3.7);
    },

    start () {

    },

    // update (dt) {},
});
