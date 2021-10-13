document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const apple = new Apple(board);


  body.addEventListener('keydown', (e) => {

  });

  // additional functionality to pause game
  body.addEventListener('keyup', event =>{
    if(event.code === "Space"){
      head.currentDirection = -1; 
    }
  });

  body.addEventListener('apple-eaten', (e) => {

  });
});
//a/sdasdssds
//asdasf
