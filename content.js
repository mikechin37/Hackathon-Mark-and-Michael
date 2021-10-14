// content.js
    const body = document.querySelector('body');
  
    // create array of urls for spooky images
    let spookyImgUrls = [
      'https://planet.s3.us-east-1.wasabisys.com/2021/10/call-of-duty-warzone-welcomes-scream-villain-for-halloween-event.jpg',
      'https://upload.wikimedia.org/wikipedia/en/e/e9/MichaelMyers2018.jpg',
      'https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2018/12/halloween-2018-kills.png?w=1020&ssl=1',
      'https://i2.wp.com/biffbampop.com/wp-content/uploads/2011/10/fk01.jpg?resize=425%2C400&ssl=1',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrW9Li_ZZD-JHyQW5O-PpFiRi1Bm39bSAsUQ&usqp=CAU',
      'https://img8bit.com/uploads/61685b73705d1-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685c323a853-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685c838d721-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685cbbbd00c-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685cf30638d-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685d3564613-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685d681dc58-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685da836222-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685df27c8a7-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685e63187c8-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685e63187c8-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/61685e63187c8-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/616864704f213-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/616864c726ea5-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/616864f8b2dea-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/6168654fd2c2e-8bit-Horror-Effect/My-img8bit-com-Effect.gif',
      'https://img8bit.com/uploads/6168659d1b52b-8bit-Horror-Effect/My-img8bit-com-Effect.gif'
,     
      // chrome.runtime.getURL('/assets/bluemangroup.jpeg')
    ]

    let cohort29 = [
      'https://ca.slack-edge.com/T02B59DL83Y-U02EBA3BMFB-3ed8324ee24f-512', 
      'https://ca.slack-edge.com/T02B59DL83Y-U02D11VUBV2-edad7b5601cc-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02ESNL27NY-1edc53665a94-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02C4AGKVTP-adc2ed44812e-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02DRQTNR8W-b7ce3d4b86d0-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02BWM9ESF8-5b4f47d7a09c-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02BCV37XGT-2341e808a6af-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FE9J200H-227b690190f4-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02F4U1SBRN-54de1007029a-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02ERMU0MRR-c1e9992e28df-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02D7PFDTFB-73f7c8658c9f-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02F7E5U1T7-4a16b137c2c2-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02EWV19TCP-26be8be6b756-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02CW0VLHRA-9f0aa5e23469-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02F6UX7KAP-6ed7535173c4-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02CW0VLHRA-9f0aa5e23469-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02CZ9ECS1X-6bf154dd1b6f-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FKB0TXAR-ca1e692ce4f7-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02BMAT5Q8P-4425339947b8-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FTMTBX36-8aded56a981e-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FK1UGS0M-a756524c4182-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02DCFE5SGN-c88823091127-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02G5J55SSG-7b5a4844dd7e-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FWHMJZPY-3bcb28114b6e-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FUQ7A79R-c812373563d4-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FRNRLG3Y-525faaec1c8d-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FU1TDT1Q-e124a6eab162-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02DJK0A049-1401ae41f105-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FWLDU9D3-e9896e94d65b-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02FVUX4U21-ffa4c78dded7-512',
      'https://ca.slack-edge.com/T02B59DL83Y-U02CUP2UFLL-060ab58a709b-512'
    ];

     // create array of spooky words
    const spookyWords = [
    "Murder", "Blood", "Cemetary", "Gory", "Terrify", "RIP", "Scream", "Vampire", "Haunting", "Ghost", 
    "Coffin", "Hell", "Kill", "Decapitate", "Slash", "Stab", "Boo", "Horror", "Haunted", "Terror", "Howling", 
    "Witchy", "Frankenstein", "Chucky", "Friday the 13th", "Evil", "Gore", "Fright", "Death", "Spooky"
    ];
  
    
    window.setTimeout(darkenPage, 10000);
    // window.setTimeout(playMusic, 1000);
    // // window.setTimeout(addSpookyWords, 1000);
    for (let i = 0; i < 100; i++) {
      window.setTimeout(addSpookyWords, 250*i);
      window.setTimeout(makeSpookyImages, 500*i);
    }
    
    function addSpookyWords() {
      // get random spookyWord
      console.log("INNER TEXT");
      console.log(body.innerText);
      // split inner Text into array of strings
      let innerTextArr = body.innerText.split(" ");
      console.log(innerTextArr);
      // get random string from innerTextArray
      let randomWordIndex = Math.floor(Math.random() * innerTextArr.length);
  
      let randomWord = innerTextArr[randomWordIndex];
      // generate random number to be the index of innerTextArr
      let spookyIndex = Math.floor(Math.random() * spookyWords.length);
      // get random spooky Word
      let spookyWord = spookyWords[spookyIndex];
      // replace random string with spooky word
      // body.innerText = body.innerText.replace(randomWord, spookyWord);
      replaceTextOnPage(" " + randomWord + " ", " " + spookyWord + " ");
    }
  
    function replaceTextOnPage(from, to){
      getAllTextNodes().forEach(function(node){
        // node.nodeValue = node.nodeValue.replace(new RegExp(quote(from), 'g'), to);
        node.nodeValue = node.nodeValue.replace(from, to);
  
      });
    
      function getAllTextNodes(){
        var result = [];
    
        (function scanSubTree(node){
          if(node.childNodes.length) 
            for(var i = 0; i < node.childNodes.length; i++) 
              scanSubTree(node.childNodes[i]);
          else if(node.nodeType == Node.TEXT_NODE) 
            result.push(node);
        })(document);
    
        return result;
      }
    
      // function quote(str){
      //   return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
      // }
    }
  
    function addSpookyFont() {
      
    }
    
    function addSpiders() {
      const spiderUrl = 'https://c.tenor.com/hYaLznScK80AAAAC/spider-creepy.gif';
      // find random spot to spawn spider
  
    }
    function makeSpookyImages() {
      let allImgs = body.getElementsByTagName('img');
      let spookyImgIndex = Math.floor(Math.random() * spookyImgUrls.length);
      let currentPageImgIndex = Math.floor(Math.random() * allImgs.length);

      // store original image size
      let imgWidth = allImgs[currentPageImgIndex].clientWidth;
      let imgHeight = allImgs[currentPageImgIndex].clientHeight;
      // replace img src with random spookyImg
      allImgs[currentPageImgIndex].src = spookyImgUrls[spookyImgIndex];
      // restore original image size
      allImgs[currentPageImgIndex].style.width = imgWidth;
      allImgs[currentPageImgIndex].style.height = imgHeight;
    }
  
    function darkenPage() {
      // activate customly defined dark mode
      body.classList.toggle("dark-mode");
    // document.documentElement.classList.add('darkmode');
    }
  
    function playMusic(){
    // play Halloween theme song
    //   let audio = new Audio(chrome.runtime.getURL("src/assets/halloween.mp3"));
      //create iframe
      let ifrm = document.createElement("iframe");
      ifrm.setAttribute("src", "src/assets/halloween.mp3" );
      ifrm.setAttribute("allow", "autoplay");
      ifrm.setAttribute("style", "display:none");
      ifrm.setAttribute("id", "iframeAudio");

      body.appendChild(ifrm);

      // let audio = new Audio("src/assets/halloween.mp3");
      // audio.play();
    }
  
    // change images to spooky images
    // spawn spooky images in random locations
    // spawn bug gifs randomly
    
    // change some of page text to spooky words
      // change to spooky font
      // How do we choose which words to change??
  
  
    body.addEventListener('keydown', (e) => {
  
    });
  
    // body.addEventListener('click', (e) => {
    //     alert("Clicked!");
    //     window.setTimeout(playMusic, 1000);
    // }, true);