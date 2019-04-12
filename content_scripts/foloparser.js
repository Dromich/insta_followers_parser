(function () {

	
	//Блок кнопки копіювати
	function setClipboard() {
		console.log(text); 
		let data = new DataTransfer();
	  
		data.items.add("text/plain", text);
		navigator.clipboard.write(data).then(function() {
		 console.log('/* success */'); 
		}, function() {
			console.log('/* failure */')
		  
		});
	  };

	//кінець конопки копіювати

	function addTextHTML(div, text) {
		
			p1 = document.getElementById(div);
			p1.insertAdjacentHTML('beforeend',text );
			
	};

	function addTextNode(div, text) {
		var newtext = document.createTextNode(text),
			p1 = document.getElementById(div);
		p1.appendChild(newtext);
	};

	function dinamik_text(div, text) {
		var node = document.getElementById(div);
		if (!node) {
			console.log("No element" + div)
		} else {

			while (node.firstChild)
				node.removeChild(node.firstChild);
			node.appendChild(document.createTextNode("" + text + ""));
		}
	};


	try {
		// Змінні ------------------------------------------------------------
		var loader = document.getElementsByClassName("ztp9m");          //клас лоадера
		var x = document.getElementsByClassName("isgrP");           	// класс тега div списку акаунтів
		var a = document.getElementsByClassName("jSC57  _6xe7A");   	// класс тега ul списку акаунтів
		var n = document.getElementsByClassName("wo9IH");           	// класс тега li списку акаунтів(головний масив)
		var timeoutID = '';
		var t = 1;

		var i = document.getElementsByClassName("g47SY")[1].title;
		var i =  Number( i.replace(/[/.,!?;]*/g, '')); 
		console.log('КІлькість користувачів ' +i);

		


	} catch (e) {
		console.log('%cВиникла помилка' + e + ')', 'color: #a22e1c; font-size:28px;');
	}

	/**
	 * Check and set a global guard variable.
	 * If this content script is injected into the same page again,
	 * it will do nothing next time.
	 */
	if (window.hasRun) {
		return;
	}
	window.hasRun = true;

	function AddInfoblock() {

		var div = document.createElement('div');
		div.setAttribute("id", "infoblock");
		div.innerHTML = "<center><strong>FoloParser</strong></center><br><span id=\"folovers_count\">Загальна кількість підписників: <strong><span id=\"folovers_num\"></span></strong></span><div id=\"pars_meseger\"></>";
		document.body.insertBefore(div, document.body.firstChild);
		console.log("AddInfoblock");
		addTextNode("folovers_num", i)
		start();
	};

	function RemInfoblock() {
		var div = document.getElementById("infoblock");
		if (!div) {
			console.log("Інфоблока вже нема")
		} else {
			document.body.removeChild(div);
			console.log("RemInfoblock");
		};

	};

	function run() {
		timeoutID = setTimeout(start, 1800);
		dinamik_text("pars_meseger", "Поки завантажено " + n.length + " .ак");
	};


	function off() {
		clearTimeout(timeoutID);
		timeoutID = null;
		var content = document.getElementById("pars_meseger");
		var text = a[0].innerHTML;
		var result = text.match(/title="[^"]+"/g);
		result = result.join(' ');
		result = result.match(/"[^"]+"/g);
		result = result.join(' ');
		result = result.match(/[^"]+/g);
		result = result.join('');
		result = result.match(/[^\s]+/g);
		result = result.join(',');//Зібрало  через кому, потім можна розпарсити як масив
		if (!content) {
			alert("Інфоблок відсутній");
		} else {
			var content = document.getElementById("pars_meseger");
			if (i > n.length) {
				content.innerHTML = "<center><b>ГОТОВО</b></center><br><hr><center><span style=\"color:red;\">Спарсило не всі а лише: <span id=\"pars_only\"></span> шт.</span></center><hr><br>Залишилось <b><span id=\"need_more\"></span> </b><br><hr><div id=\"result\"></div>"
				addTextNode("pars_only", n.length);
				addTextNode("need_more", i - n.length);
				addTextHTML("result", result);
				

			} else {
				content.innerHTML = "<center><b>ГОТОВО</b></center><br><hr><center><span style=\"color:green;\">Спарсило <span id=\"pars_only\"></span>  шт.</span></center><hr><br><div id=\"result\"></div>"
				addTextNode("pars_only", n.length);
				addTextHTML("result", result);
				

			};



		};



	};

	function RemItPic() {//видаляє фотки зі списку користувачі(економія пам'яті)
		let itpic = document.querySelectorAll('.RR-M-');

		for (let index = 0; index < itpic.length; index++) {
		itpic[index].remove();
			
		}

		
	};

	function start() {
		if (i == n.length ||i<=n.length) {
			off();

			var content = document.getElementById("pars_meseger");
			var text = a[0].innerHTML;
			var result = text.match(/title="[^"]+"/g);
			result = result.join(' ');
			result = result.match(/"[^"]+"/g);
			result = result.join(' ');
			result = result.match(/[^"]+/g);
			result = result.join('');
			result = result.match(/[^\s]+/g);
			result = result.join(',');//Зібрало  через кому, потім можна розпарсити як масив

			if (!content) {
				alert("Інфоблок відсутній");
			} else {
				
				if (i > n.length) {
					content.innerHTML = "<center><b>ГОТОВО</b></center><br><hr><center><span style=\"color:red;\">Спарсило не всі а лише: <span id=\"pars_only\"></span> шт.</span></center><hr><br>Залишилось <b><span id=\"need_more\"></span> </b><br><hr>Скопіювати</span><div id=\"result\"></div>"
					addTextNode("pars_only", n.length);
					addTextNode("need_more", i - n.length);
					addTextHTML("result", result);
					

				} else {
					content.innerHTML = "<center><b>ГОТОВО</b></center><br><hr><center><span style=\"color:green;\">Спарсило <span id=\"pars_only\"></span>  шт.</span></center><hr><br><div id=\"result\"></div>"
					addTextNode("pars_only", n.length);
					addTextHTML("result", result);
					

				};
			};

		} else {
			
			if (loader.length>0) {
				console.log('поки грузить')
				setTimeout(run, 1800);

				
			}else{
				x[0].scrollTop =  a[0].scrollHeight  ;
				RemItPic();
				run();
				
			}
				
				
			
		}
	};



	function GetFolovers(comand) {
		if (comand == "start") {
			console.log("Виконуємо старт");
			var element = document.getElementById('infoblock');

			try {
				var xxx = document.getElementsByClassName("isgrP");

			} catch (error) {
				console.log("No!!" + error);
			};//шукаєм список фоловерів

			if (xxx.length == 0) {
				alert("Ви не відкрили список фоловерів(тепер обведений червоним)!!")
				var atrr = document.getElementsByClassName("-nal3 ")[1];
				atrr.classList.add("redalert");
			} else {
				if (!element) {
					AddInfoblock();
				} else {
					start();
				};
			};//перевірка на відкритий список фоловерів		



		} else {
			console.log("Зупиняємо");
			off();
		};

	};


	/**
	 .
	 * В залежності що передав тааб скрип виконуєм ті чи інші функції
	*/
	browser.runtime.onMessage.addListener((message) => {
		if (message.command === "goparse") {

			GetFolovers(message.Comand)//переадєм параметри функції

		}else if(message.command === "copyR"){
			console.log('Try GEt COPYR');
			let emailLink = document.getElementById('result').innerText;

			navigator.clipboard.writeText(emailLink).then(function() {
			console.log('/* clipboard successfully set */')	
			  }, function() {
				console.log('/* clipboard write failed */')	
			  });

			alert("Всі акаунти скопійовано у буфер обміну ви можете вставити їх куди потрібно натиснувши Ctrl + V");

		}else if (message.command === "reset") {
			// removeExistingBeasts();
			RemInfoblock();
		}
	});

})();


