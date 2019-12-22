// Enemies our player must avoid
class Enemy {
  constructor(x,y,speed,width,height) {
    this.x= x,// enemy x axis
    this.y= y,// enemy Y axis
    this.width=width,
    this.height=height,
    this.speed=100+Math.floor(Math.random() *200+10);// to walk randomly
    this.sprite = 'images/enemy-bug.png';


  }

  update(dt) {

    var x=(this.speed*dt)+this.x;
    this.x=x;

    if(this.x>=500){
      this.x=this.x-this.x;
    }
    var player1 = {x:player.x, y: player.y, width:player.width, height:player.height}
    var enemy2 = {x:this.x, y:this.y, width:this.width, height:this.height}
    let modal=document.getElementById('display');
    let button=document.getElementById('button1');

    if (player1.x < enemy2.x + enemy2.width &&
      player1.x + player1.width > enemy2.x &&
      player1.y < enemy2.y + enemy2.height &&
      player1.y + player1.height > enemy2.y){
        player.y=400;
        player.x=203;
      }

      if(player.y<40){
        modal.classList.add("pop");
        button.onclick=function(){
          restart();
        }
      }


    }

  }

  Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

  function restart(){
    location.reload();
  }
  class Player {
    constructor(x,y,width,height){
      this.x=x,
      this.y=y,
      this.width=width,
      this.height=height,
      this.player='images/char-princess-girl.png';
    }
    update(t){

    }
    render(){
      ctx.drawImage(Resources.get(this.player), this.x, this.y); //this function appearing the player on the screen
    }

    handleInput(llowedKeys){

      if(llowedKeys ==='right'){
        if(player.x<=303){
        console.log(player.x);
        player.x=player.x+100;}// moving the player on the right hand  (203+100=303).

      }
      if(llowedKeys ==='up'){
        if(player.y>0){
        console.log(player.y);
        player.y=player.y-90;}// moving the player on the up side.
      }
      if(llowedKeys ==='left'){
        if(player.x>=103){
        console.log(player.x);
        player.x=player.x-100;}// moving the player on the left hand.
      }
      if(llowedKeys ==='down'){
        if(player.y<400){
        console.log(player.y);
        player.y=player.y+90;}
      }// moving the player on the down side.

    }
  }




  var allEnemies=[];// pushing the enemies into this array.
  var player = new Player(203,400,50,60);
  [50,130,220].map(event);// enemies positions.

  function event(y){
    allEnemies.push(new Enemy(5,y,200,50,60));
  }

  document.addEventListener('keyup', function(e) {
    var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
  });
