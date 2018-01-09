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
        i: 0,
        l: 0,     //这里是字母L
        r: 0,
        p: 0,
        q: 0,
        s: 0,


        label: {
            default: null,
            type:cc.Label,
        },

        Canva: {
            default: null,
            type: cc.Node,
        },

        Aronsprite:{
            default:null,
            type:cc.Sprite,
        },

        Liusprite: {
            default: null,
            type: cc.Sprite,
        },

        Magesprite: {
            default: null,
            type: cc.Sprite,
        },

        aronactive_string: {  //定义一个数组用于操作亚伦精灵是否显示
            default: [],
            type: ["String"]
        },

        liuactive_string: {  //定义一个数组用于操作老刘精灵是否显示
            default: [],
            type: ["String"]
        },

        mageactive_string: {  //定义一个数组用于操作夏末精灵是否显示
            default: [],
            type: ["String"]
        },

        leftname_string: {  //定义一个数组用于存储左边角色昵称
            default: [],
            type: ["String"]
        },

        rightname_string: {  //定义一个数组用于存储右边角色昵称
            default: [],
            type: ["String"]
        },

        story_string: {  //定义一个数组用于存储剧情文字
            default: [],
            type: ["String"]
        }

    },

    onLoad: function () {
        this.i = -1;
        this.l = 0;    //这里是字母L
        this.r = 0;
        this.p = 0;
        this.q = 0;
        this.s = 0;
        //cc.game.addPersistRootNode(this.Canva);
    },

    // LIFE-CYCLE CALLBACKS:
    Name1: function () {                //左角色名框显示调用函数
        var self = this;
        self.label.string = this.leftname_string[this.l];
        this.l = this.l + 1;
    },

    Name2: function () {                //右角色名框显示调用函数
        var self = this;
        self.label.string = this.rightname_string[this.r];
        this.r = this.r + 1;
    },

    AronActive: function () {
        var self = this;
        if (this.aronactive_string[this.p] == 1) {
            self.Aronsprite.enabled = true;
        }
        else{
            self.Aronsprite.enabled = false;
        }
        this.p = this.p + 1;
    },

    LiuActive: function () {
        var self = this;
        if (this.liuactive_string[this.q] == 1) {
            self.Liusprite.enabled = true;
        }
        else{
            self.Liusprite.enabled = false;
        }
        this.q = this.q + 1;
    },

    MageActive: function () {
        var self = this;
        if (this.mageactive_string[this.s] == 1) {
            self.Magesprite.enabled = true;
        }
        else{
            self.Magesprite.enabled = false;
        }
        this.s = this.s + 1;
    },

    Story: function () {
        var self = this;
        var index = 1;
        self.schedule(function () {
            self.label.string = this.story_string[this.i].substr(0,index);
            index = index + 1;
        }, 0.01, 100);
        this.i = this.i + 1;
        if (this.i == 24) {
            this.node.runAction(cc.sequence(cc.fadeOut(1.0), cc.callFunc(function () {
                cc.director.loadScene("Chess")
            })));
            stop();
        }
    },

    menu_click: function(){
        Alert.show();
    },
//渐入效果，新建JS文件，并且将这个文件添加到场景Story中（添加用户自定义脚本）
  start () {
      this.node.setOpacity(0);
        this.node.runAction(cc.fadeIn(1.0));
    },
    // update (dt) {},
});
