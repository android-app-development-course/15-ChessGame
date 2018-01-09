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

        StringNode: {
            default: null,
            type: cc.Node,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.schedule(function () {
            this.StringNode.active = true;
            this.StringNode.setOpacity(0);
            this.StringNode.runAction(cc.fadeIn(1.0));
        },2,0,2);

        this.schedule(function () {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function () {
                cc.director.loadScene("Story")
            })))
        }, 5);
    },

    start () {
        this.node.setOpacity(0);
        this.node.runAction(cc.fadeIn(1.0));
    },

    // update (dt) {},
});
