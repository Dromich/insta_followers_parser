
const CssCode = `body {
                    border: 5px solid red;
				  }
				  #infoblock {
					display: block;
					position: fixed;
					top: 0;
					left: 0;
					width: 30%;
					padding: 10px;
					background-color: rgba(0,0,0,.7);
					color: #fff;
					font-size: 1.2em;
					z-index: 999999;
					height: 100%;
					overflow-y: scroll;
				}
				#infoblock b{
					font-weight: 600;
					padding: auto 2px;				
					color:rgb(245, 17, 17);			
				}
				
				#pars_meseger{
					display:block;
					width:95% ;
					margin:10px auto;
				}
				.redalert{
					border:2px solid red!important;
					padding:5px;
				} 
				  `;

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {


		 // return browser.extension.getURL("beasts/frog.jpg"); //формує урл до дужок стндарний шлях
		  


function getParam(butText) {
	
	switch (butText) {
		 case "START":
		   return "start"; 
		   
		 case "STOP":
		   return "Stop" ;
		 
	   }
}

    /**
     
	 * передає "повідомлення" контент-скрипт для слухача 46 строка з параметром бістіфай
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({code: CssCode}).then(() => {
        let param = getParam(e.target.textContent);
		browser.tabs.sendMessage(tabs[0].id, 
			{command: "goparse",			
			Comand:param  });
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
	 * передає "повідомлення" контент-скрипт для слухача 46 строка але з параметром ресет
     */
    function reset(tabs) {
      browser.tabs.removeCSS({code: CssCode}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Помилка функції: ${error}`);
    }

    /**
     * Перевіряєм клас кнопки і залежно від цього шлемо проміс (бістіфай чи ресет)
     * then call "beastify()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(beastify)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#user_mesage").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Помилка загрузки скрипта: ${error.message}`);
}

/**
 * Вбудована функція яка передає проміс контент скрипту(як параметр адреса самого скрипта)
 */
browser.tabs.executeScript({file: "/content_scripts/foloparser.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
