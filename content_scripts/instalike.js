var likeH = document.getElementsByClassName("coreSpriteHeartOpen");//кнопка лайк

var post = document.getElementsByClassName("KL4Bh");//ідентефікатор поста,перший пост(перший пост post[0])


function randomInteger(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
  }

//Функція кліку на елемент по ідентифікатору(сам елемент, тип події(наприклад клік))
function eventFire(el, etype){
if (el == undefined) {
	console.log("елемент відсутній")
}else{

	if (el.fireEvent) {
		el.fireEvent('on' + etype);
	  } else {
		var evObj = document.createEvent('MouseEvents');
		evObj.initEvent(etype, true, false);
		var canceled = !el.dispatchEvent(evObj);
		if (canceled) {
		  // A handler called preventDefault.
		  console.log("automatic click canceled");
		} else {
		  // None of the handlers called preventDefault.
		} 
	  };
};
};




//https://www.instagram.com/p/BpmvPy6hPx2/

akarray = ["lalimonaia.eu",
"itsallamets",
"ilnytskanataliia",
"victor_250492",
"anatolyazasikan",
"tafiichuktaniusha",
"_.manunichka._",
"ivankavovk21",
"vadimpanasuk3",
"anytyhka",
"lyudmyla_kostyuk",
"herminia_mizerk_911",
"matkovskyj",
"nataliiadrobenko",
"_katysha_kings_",
"ilvicolinodelpaninaio",
"tedacar_ternopil",
"vaniakorochkin9892",
"olchikmarusich",
"viktoria_teplenko",
"bojkoviktorija162017",
"_____alesia_",
"trendovatska_avon",
"marinaovcarenko23",
"viramorozenko",
"absdi000000",
"len_lenka__",]


for (let index = 0; index < akarray.length; index++) {
	
	OpenPage(karray[index],0)
	
}

function OpenPage(akurl) {
	window.location.href = "https://www.instagram.com/" + akurl;

	setTimeout(LikeOpen,5000)


};

function Like() {
	setTimeout(eventFire, randomInteger(2000,6000), likeH[0], 'click');//клікаєм по сердечку з затримкою від 2 до 6 сек
		console.log("Клікнув по сердечку");
};

function OpenInstapost(postnum) {
	eventFire(post[postnum],'click');//клікаєм по  посту(рандомно від кількості постів)
		console.log("відкрив пост");
};

function LikeOpen() {
	if ( post.length > 1 ) {
		eventFire(post[randomInteger(0,post.length-1)],'click');//клікаєм по  посту(рандомно від кількості постів)
		console.log("відкрив пост");
	}else{
		setTimeout(eventFire, randomInteger(2000,6000), likeH[0], 'click');//клікаєм по сердечку з затримкою від 2 до 6 сек
		console.log("Клікнув по сердечку");		
	};
}


//window.location.href = "https://www.instagram.com/viramorozenko"

//runtimer(eventFire(likeH[1],'click'),4000);//чекаємо загузки

//eventFire(likeH[0],'click');//клікаєм по сердечку