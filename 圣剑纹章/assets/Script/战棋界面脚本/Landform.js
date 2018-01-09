var CharacterClick = require("CharacterClick");
cc.Class({
    extends: cc.Component,

    properties: {

        DefUp:{
            default: null,
            type: cc.Node,
        },

        DodUp: {
            default: null,
            type: cc.Node,
        },

        leftnode: {
            default: null,
            type: cc.Node,
        },

        leftnode1: {
            default: null,
            type: cc.Node,
        },

        newnode: {
            default: null,
            type: cc.Node,
        },

        rightnode: {
            default: null,
            type: cc.Node,
        },

        Landform: {
            default: null,
            type:cc.Label,
        },

        SelectBox: {
            default: null,
            type:cc.Node,
        },
        
        Character: {
            default: null,
            type:cc.Node,
        },

        Action: {
            default: null,
            type:cc.Node,
        },

    },

    // use this for initialization
    onLoad: function () {
    },

    ShowName: function (event, customEventData) {
        this.leftnode.active = false;
        this.leftnode1.active = false;
        this.Landform.string = customEventData.toString();
    },

    ShowDef: function (event, customEventData) {
        this.DefUp.active = true;
        this.Landform.string = customEventData.toString();
    },

    ShowDod: function (event, customEventData) {
        this.DodUp.active = true;
        this.Landform.string=customEventData.toString();
    },

    MoveSelect: function (event) {
        //this.SelectBox.getComponent("Landform").newnode = self.getComponent("Landform").newnode;
        this.SelectBox.runAction(cc.moveTo(0.2, this.newnode.getPosition()));//this.SelectBox.parent.convertToNodeSpaceAR(event.getLocation());
    },

    MoveCharacter: function () {
        //检测在Character节点中的CharacterClick组件中的Moveable是否为1，若是则进行人物移动
            this.Character.runAction(cc.moveTo(0.2, this.newnode.getPosition()));
            this.schedule(function() {
                this.Action.active=true;
            },0,0,0.2);
    },

    ChangeNewNode: function () {
        this.SelectBox.getComponent("Landform").newnode = this.node.getComponent("Landform").newnode;
        this.Character.getComponent("Landform").newnode = this.node.getComponent("Landform").newnode;
    },

});
