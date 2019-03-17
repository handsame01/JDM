window.onload=function(){
	search();
	banner();
	downtime();
};
var search = function(){
	var searbox=document.querySelector('.jd_search_box');
	var banner=document.querySelector('.jd_banner');
	var height=banner.offsetHeight;
	
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop;
//		console.log(scroll);
//		console.log(height);
	
	var opcatial=0;
	if(scroll<=height){
		opactial=scroll/height*0.85;
	}
	else{
		opactial=0.85;
	}

	searbox.style.background = 'rgba(201,21,35,' + opactial + ')';
	} 
};
//轮播图
var banner=function(){
 var banner = document.querySelector('.jd_banner');
    /*屏幕宽度*/
    var width = banner.offsetWidth;
    /*图片容器*/
    var imageBox = banner.querySelector('ul:first-child');
    /*点容器*/
    var pointBox = banner.querySelector('ul:last-child');
    /*所有的点*/
    var points = pointBox.querySelectorAll('li');
    var index=1;
    
    var addtransition=function(){
    	imageBox.style.transition='all 0.2s';
    	imageBox.style.webkitTransition='all 0.2s';
    }
    var removetransition=function(){
    	imageBox.style.transition='none';
    	imageBox.style.webkitTransition='none';
    }
    var settranslatex=function(translateX){
    	imageBox.style.transform='translateX('+translateX+'px)';
 		imageBox.style.webkitTransform='translateX('+translateX+'px)';
    }
    
    var timer=setInterval(function(){
    	index++;
    	addtransition();
    	settranslatex(-index*width);
    },2500);
    imageBox.addEventListener("transitionend",function(){
    	if(index>=9){
    		removetransition();
    		index=1;
    		settranslatex(-index*width);
    	}
    	else if(index<=0){
    		removetransition();
    		index=8;
    		settranslatex(-index*width);
    	}
    	setpoint();
    })
    var setpoint=function(){
		for(var i=0;i<points.length;i++){
			var obj=points[i];
			obj.classList.remove("now");
		}
		points[index-1].className="now";
	}
    var startX=0;
    var distants=0;
    imageBox.addEventListener("touchstart",function(e){
    	clearInterval(timer);
    	startX=e.touches[0].clientX;
    });
    imageBox.addEventListener("touchmove",function(e){
    	var movex=e.touches[0].clientX;
    	 distants=movex-startX;
    	var translatex=-index*width+distants
    	settranslatex(translatex);
    	removetransition();
    	settranslatex(translatex);
    });
    imageBox.addEventListener("touchend",function(e){
    	if(Math.abs(distants)<width/3){
    		addtransition();
    		settranslatex(-index*width);
    	}else{
    		if(distants>0){
    			index--;
    		}else{
    			index++;
    		}
    		addtransition();
    		settranslatex(-index*width);
    	}
  
    clearInterval(timer);
    //重新加上定时器
     timer=setInterval(function(){
    	index++;
    	addtransition();
    	settranslatex(-index*width);
    },2500);
   });
   startX=0;
   distants=0;
   };
 
var downtime=function(){
	var time=2*60*60;
	var spans=document.querySelectorAll('.time span');
	var timer=setInterval(function(){
		time--;
	var h=Math.floor(time/3600);
	var m=Math.floor(time%3600/60);
	var s=Math.floor(time%60);

     spans[0].innerHTML = Math.floor(h/10);
	 spans[1].innerHTML=h%10;
	 spans[3].innerHTML=Math.floor(m/10);
	 spans[4].innerHTML=m%10;
	 spans[6].innerHTML=Math.floor(s/10);
	 spans[7].innerHTML=s%10;
	 if(time<=0){
		clearInterval(timer);
	}
	},1000);
};


