//全局文件Alter，随时调用prefab(需要在此js属性上勾选为插件，是它成为全局文件)
        
var Alert = {
    _alert: null,           // prefab
    _closeButton:   null,   // 取消按钮
    _soundButton:   null,   //音量按钮
    _saveButton:    null,   //存档按钮
    _loadButton:    null,   //读取按钮
    _musicButton:   null,   //关闭音乐
    _animSpeed:     0.3,    // 动画速度
    _stopButton:    null,   //禁用按钮
    _audio:         null,   //音频
};
/**
 * animSpeed:        动画速度 default = 0.3.
*/
Alert.show = function () {

    // 引用
    var self = this;

    // 判断
    if (Alert._alert != undefined) return;

    // 加载 prefab 创建
    cc.loader.loadRes("Alert", cc.Prefab, function (error, prefab) {

        if (error) {
            cc.error(error);
            return;
        }

        // 实例 
        var alert = cc.instantiate(prefab);

        // Alert 持有
        Alert._alert = alert;

        // 动画 
        var cbFadeOut = cc.callFunc(self.onFadeOutFinish, self);
        var cbFadeIn = cc.callFunc(self.onFadeInFinish, self);
        self.actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 255), cc.scaleTo(Alert._animSpeed, 1.0)), cbFadeIn);
        self.actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(Alert._animSpeed, 0), cc.scaleTo(Alert._animSpeed, 2.0)), cbFadeOut);

        //获取按钮结点
        Alert._closeButton = cc.find("Menubackground2/Close", alert);
        Alert._soundButton = cc.find("Menubackground2/Sound", alert);
        Alert._musicButton = cc.find("Menubackground2/Music", alert);
        Alert._saveButton = cc.find("Menubackground2/Save", alert);
        Alert._loadButton = cc.find("Menubackground2/Load", alert);
        Alert._stopButton = cc.find("Menubackground2/CloseSound",alert);

        // 添加点击事件
        Alert._closeButton.on('click', self.onButtonClicked, self);
        Alert._soundButton.on('click', self.onButtonClicked,self);
        Alert._musicButton.on('click', self.onButtonClicked,self);
        Alert._saveButton.on('click', self.onButtonClicked,self);
        Alert._loadButton.on('click', self.onButtonClicked,self);
        Alert._stopButton.on('click', self.onButtonClicked,self);
    
        // 父视图
        Alert._alert.parent = cc.find("Canvas");

         //初始化按钮
         Alert._stopButton.active = false;
        // 展现 alert
        self.startFadeIn();

    });

    // 执行弹进动画
    self.startFadeIn = function () {
        cc.eventManager.pauseTarget(Alert._alert, true);
        Alert._alert.position = cc.p(0, 0);
        Alert._alert.setScale(2);
        Alert._alert.opacity = 0;
        Alert._alert.runAction(self.actionFadeIn);
    };

    // 执行弹出动画
    self.startFadeOut = function () {
        cc.eventManager.pauseTarget(Alert._alert, true);
        Alert._alert.runAction(self.actionFadeOut);
    };

    // 弹进动画完成回调
    self.onFadeInFinish = function () {
        cc.eventManager.resumeTarget(Alert._alert, true);
    };

    // 弹出动画完成回调
    self.onFadeOutFinish = function () {
        self.onDestory();
    };

    // 按钮点击事件(需要在prefab精灵属性上添加按钮组件)
    self.onButtonClicked = function(event){
    	if(event.target.name == "Close"){
    		 self.startFadeOut();
    	}
        else if (event.target.name == "Music"){
            Alert._musicButton.active = false;
            Alert._stopButton.active = true;
        }
        else if (event.target.name == "CloseSound"){
            Alert._musicButton.active = true;
            Alert._stopButton.active = false;   
        }
        /*
        else if (event.target.name == "Sound"){
        }
        else if (event.target.name == "Save"){

        }
        else if (event.target.name == "Load"){      	
        }		
        */
    };

    // 重置Alert
    self.onDestory = function () {
        Alert._alert.destroy();
       
        Alert._alert = null;
        Alert._closeButton = null;
    };
};