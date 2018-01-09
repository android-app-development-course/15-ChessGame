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
        Aaron_hp: 0,
        Aaron_mp: 0,
        Aaron_attack: 0,
        Aaron_defence: 0,
        Aaron_speed: 0,
        Aaron_technology: 0,
        Aaron_move: 0,
        Dragon_hp: 0,
        Dragon_hp_now:0,
        Dragon_mp: 0,
        Dragon_mp_now: 0,
        Dragon_attack: 0,
        Dragon_defence: 0,
        Dragon_speed: 0,
        Dragon_technology: 0,
        Dragon_move: 0,
        leftnode:{
            default: null,
            type: cc.Node,
        },

        leftnode1: {
            default: null,
            type: cc.Node,
        },

        rightnode: {
            default: null,
            type: cc.Node,
        },

        hp_now: {
            default: null,
            type: cc.Label,
        },

        hp_total: {
            default: null,
            type: cc.Label,
        },

        mp_now: {
            default: null,
            type: cc.Label,
        },

        mp_total: {
            default: null,
            type: cc.Label,
        },

        attack: {
            default: null,
            type: cc.Label,
        },

        defence: {
            default: null,
            type: cc.Label,
        },

        speed: {
            default: null,
            type: cc.Label,
        },

        technology: {
            default: null,
            type: cc.Label,
        },

        move: {
            default: null,
            type: cc.Label,
        },

        Blocks:{
            default: [],
            type: [cc.Node],
        },
    },

    Dragon_Show: function () {
        this.hp_total.string = this.Dragon_hp;
        this.hp_now.string = this.Dragon_hp_now;
        this.mp_total.string = this.Dragon_mp;
        this.mp_now.string = this.Dragon_mp_now;
        this.attack.string = this.Dragon_attack;
        this.defence.string = this.Dragon_defence;
        this.speed.string = this.Dragon_speed;
        this.technology.string = this.Dragon_technology;
        this.move.string = this.Dragon_move;
        this.leftnode.active = false;
        this.leftnode1.active = true;
        this.rightnode.active = true;
    },

    Aaron_Show: function () {
        this.hp_total.string = this.Aaron_hp;
        this.hp_now.string = this.hp_total.string;
        this.mp_total.string = this.Aaron_mp;
        this.mp_now.string = this.mp_total.string;
        this.attack.string = this.Aaron_attack;
        this.defence.string = this.Aaron_defence;
        this.speed.string = this.Aaron_speed;
        this.technology.string = this.Aaron_technology;
        this.move.string = this.Aaron_move;
        this.leftnode.active = true;
        this.leftnode1.active = false;
        this.rightnode.active = true;
        var i=0;
        while(i<=14){
            this.Blocks[i].color = new cc.Color(69,137,148);
            this.Blocks[i].opacity = 160;
            i=i+1;
        }
        while(i<=27){
            this.Blocks[i].color = new cc.Color(213,26,33);
            this.Blocks[i].opacity = 160;
            i=i+1;
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Aaron_hp = 80;
        this.Aaron_mp = 20;
        this.Aaron_attack = 25;
        this.Aaron_defence = 18;
        this.Aaron_speed = 23;
        this.Aaron_technology = 27;
        this.Aaron_move = 4;
        this.Dragon_hp = "???";
        this.Dragon_hp_now = 3;
        this.Dragon_mp = 0;
        this.Dragon_mp_now = 0;
        this.Dragon_attack = "???";
        this.Dragon_defence = "???";
        this.Dragon_speed = "???";
        this.Dragon_technology = "???";
        this.Dragon_move = "???";
    },

    start () {

    },

    // update (dt) {},
});
