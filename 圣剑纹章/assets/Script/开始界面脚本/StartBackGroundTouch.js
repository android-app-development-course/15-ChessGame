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
this.gamestart.opacity = 0;
this.load.opacity = 0;
this.setting.opacity = 0;
this.exit.opacity = 0;
this.press.runAction(cc.repeatForever(cc.sequence(cc.fadeIn(1.0),cc.fadeOut(1.0))));
this.gamestart.on("touch",function(event){
this.gamestart.runAction(cc.fadeIn(2.0));
        },this);
this.load.on("touch",function(event){
this.load.runAction(cc.sequence(cc.delayTime(0.5),cc.fadeIn(2.0)));
        },this);
this.setting.on("touch",function(event){
this.setting.runAction(cc.sequence(cc.delayTime(1.0),cc.fadeIn(2.0)));
        },this);
this.exit.on("touch",function(event){
this.exit.runAction(cc.sequence(cc.delayTime(1.5),cc.fadeIn(2.0)));
        },this);

this.press.on("touch",function(event){
this.press.stopAllActions();
this.press.runAction(cc.fadeOut(1.0));
        },this);
this.node.on("touchstart", function(event){
this.gamestart.emit("touch",{});
this.load.emit("touch",{});
this.setting.emit("touch",{});
this.exit.emit("touch",{});
this.press.emit("touch",{});
        },this);

this.gamestart.on("touchstart", function(event){         
	//场景1渐暗，转到story场景
 this.node.runAction(cc.sequence(cc.fadeOut(1.0),cc.callFunc(function(){
                cc.director.loadScene("LoadToOne")
                })));
        },this);

this.setting.on("touchstart", function(event){          
this.setting.runAction(cc.hide());
        },this);
this.load.on("touchstart", function(event){          
this.load.runAction(cc.hide());
        },this);
this.exit.on("touchstart", function(event){         
Game.end();
        },this);
    },
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    start () {
        this.node.setOpacity(0);
        this.node.runAction(cc.fadeIn(1.0));
    },
    // },
});
