document.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body');

  // code here
  // start timer on page load

  // create array of urls for spooky images
  let spookyImgUrls = [
    'https://planet.s3.us-east-1.wasabisys.com/2021/10/call-of-duty-warzone-welcomes-scream-villain-for-halloween-event.jpg',
    'https://upload.wikimedia.org/wikipedia/en/e/e9/MichaelMyers2018.jpg',
    'https://i1.wp.com/bloody-disgusting.com/wp-content/uploads/2018/12/halloween-2018-kills.png?w=1020&ssl=1',
    'https://i2.wp.com/biffbampop.com/wp-content/uploads/2011/10/fk01.jpg?resize=425%2C400&ssl=1'
  ]
   // create array of spooky words
  const spookyWords = [
  "Murder", "Blood", "Cemetary", "Gory", "Terrify", "RIP", "Scream", "Vampire", "Haunting", "Ghost", 
  "Coffin", "Hell", "Kill", "Decapitate", "Slash", "Stab", "Boo", "Horror", "Haunted", "Terror", "Howling", 
  "Witchy", "Frankenstein", "Chucky", "Friday the 13th", "Evil", "Gore", "Fright"
  ];

  
  window.setTimeout(makeSpookyImages, 1000);
  window.setTimeout(darkenPage, 1000);
  window.setTimeout(playMusic, 1000);
  // // window.setTimeout(addSpookyWords, 1000);
  for (let i = 0; i < 100; i++) {
    window.setTimeout(addSpookyWords, 1000*i);
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
    for (let i = 0; i < allImgs.length; i++) {
      let randomImg = Math.floor(Math.random() * spookyImgUrls.length);
      console.log(allImgs[i].src);
      // store original image size
      let imgWidth = allImgs[i].clientWidth;
      let imgHeight = allImgs[i].clientHeight;
      // replace img src with random spookyImg
      allImgs[i].src = spookyImgUrls[randomImg];
      // restore original image size
      allImgs[i].style.width = imgWidth;
      allImgs[i].style.height = imgHeight;
    }
  }

  function darkenPage() {
    // activate customly defined dark mode
    body.classList.toggle("dark-mode");
  }

  function playMusic(){
  // play Halloween theme song
    let audio = new Audio("src/assets/halloween.mp3");
    audio.play();
  }

  // change images to spooky images
  // spawn spooky images in random locations
  // spawn bug gifs randomly
  
  // change some of page text to spooky words
    // change to spooky font
    // How do we choose which words to change??


  body.addEventListener('keydown', (e) => {

  });

  body.addEventListener('apple-eaten', (e) => {

  });
});