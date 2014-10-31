
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ball:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        //ball 생성
        this.ball = new cc.Sprite("res/ball.png")
        //초기 위치 및 크기 설정
        this.ball.x = this.width/2;
        this.ball.y = this.height/2;
        this.ball.scaleX = 0.2;
        this.ball.scaleY = 0.18;
        //초기 속도
        var initialDirection = Math.random(2*Math.PI);
        this.ball.speedX = Math.cos(initialDirection);
        this.ball.speedY = Math.sin(initialDirection);
        this.addChild(this.ball);
        
        /*this.update = function(dt){
        	this.ball.x += this.ball.speedX;
        	this.ball.y += this.ball.speedY;
        	if(this.ball.x<this.ball.getBoundingBox().width/2){
        		this.ball.speedX = -this.ball.speedX;
        	}
        	if(this.ball.x>this.width-this.ball.getBoundingBox().width/2){
        		this.ball.speedX = -this.ball.speedX;
        	}
        	if(this.ball.y<this.ball.getBoundingBox().height/2){
        		this.ball.speedY = -this.ball.speedY;
        	}
        	if(this.ball.y>this.height-this.ball.getBoundingBox().height/2){
        		this.ball.speedY = -this.ball.speedY;
        	}
        }*/
        this.update = function(dt){
        	this.ball.x += this.ball.speedX;
        	this.ball.y += this.ball.speedY;
        	if(this.ball.x<this.ball.getBoundingBox().width/2){
        		this.ball.speedX = -1;
        		this.ball.x = 2*(this.ball.getBoundinBox().width/2)-this.ball.x;
        	}
        	if(this.ball.x>this.width-this.ball.getBoundingBox().width/2){
        		this.ball.speedX = -1;
        		this.ball.x = 2*(this.width-this.ball.getBoundingBox().width/2)-this.ball.x;
        	}
        	if(this.ball.y<this.ball.getBoundingBox().height/2){
        		this.ball.speedY = -1;
        		this.ball.y = 2*(this.ball.getBoundingBox().height/2)-this.ball.y;
        	}
        	if(this.ball.y>this.height-this.ball.getBoundingBox().height/2){
        		this.ball.speedY = -1;
        		this.ball.y = 2*(this.height-this.ball.getBoundingBox().height/2)-this.ball.y;
        	}
        }
        this.scheduleUpdate();
        
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

