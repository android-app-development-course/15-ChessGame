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
        Aaron_hp_now: 0,
        Aaron_mp: 0,
        Aaron_mp_now: 0,
        Aaron_DMG: 0,
        Aaron_HIT: 0,
        Aaron_CRT: 0,
        Dragon_hp: 0,
        Dragon_hp_now: 0,
        Dragon_DMG: 0,
        Dragon_HIT: 0,
        Dragon_CRT: 0,

        Aaronhp: {
            default: null,
            type: cc.Label,
        },

        Aaronhp_now: {
            default: null,
            type: cc.Label,
        },

        Aaronmp: {
            default: null,
            type: cc.Label,
        },

        Aaronmp_now: {
            default: null,
            type: cc.Label,
        },

        AaronDMG: {
            default: null,
            type: cc.Label,
        },

        AaronHIT: {
            default: null,
            type: cc.Label,
        },

        AaronCRT: {
            default: null,
            type: cc.Label,
        },

        Dragonhp: {
            default: null,
            type: cc.Label,
        },

        Dragonhp_now: {
            default: null,
            type: cc.Label,
        },

        DragonDMG: {
            default: null,
            type: cc.Label,
        },

        DragonHIT: {
            default: null,
            type: cc.Label,
        },

        DragonCRT: {
            default: null,
            type: cc.Label,
        },

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.Aaron_hp = 80;
        this.Aaron_hp_now = 80;
        this.Aaron_mp = 20;
        this.Aaron_mp_now = 20;
        this.Aaron_DMG = 17;
        this.Aaron_HIT = 77;
        this.Aaron_CRT = 25;
        this.Dragon_hp = "???";
        this.Dragon_hp_now = 3;
        this.Dragon_DMG = "???";
        this.Dragon_HIT = "???";
        this.Dragon_CRT = "???";
        //
    },



    start () {
        this.node.setOpacity(0);
        this.node.runAction(cc.fadeIn(1.0));
        this.Aaronhp.string = this.Aaron_hp;
        this.Aaronhp_now.string = this.Aaron_hp_now;
        this.Aaronmp.string = this.Aaron_mp;
        this.Aaronmp_now.string = this.Aaron_mp_now;
        this.AaronDMG.string = this.Aaron_DMG;
        this.AaronHIT.string = this.Aaron_HIT;
        this.AaronCRT.string = this.Aaron_CRT;
        this.Dragonhp.string = this.Dragon_hp;
        this.Dragonhp_now.string = this.Dragon_hp_now;
        this.DragonDMG.string = this.Dragon_DMG;
        this.DragonHIT.string = this.Dragon_HIT;
        this.DragonCRT.string = this.Dragon_CRT;
    },

    // update (dt) {},
});
