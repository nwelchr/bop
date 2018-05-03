import MovingObject from './object';

document.addEventListener("DOMContentLoaded", () => {
    var canvas = document.getElementById('power-of-friendship');
    var ctx = canvas.getContext('2d');
    window.MovingObject = MovingObject;
    
    const color = "fD0";

    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 75, 75);
    ctx.fillStyle = '#6C0';
    ctx.fillRect(75, 0, 75, 75);
    ctx.fillStyle = '#09F';
    ctx.fillRect(0, 75, 75, 75);
    ctx.fillStyle = '#F30';
    ctx.fillRect(75, 75, 75, 75);
    ctx.fillStyle = '#FFF';
  
    // set transparency value
    ctx.globalAlpha = 0.8;
  
    // Draw semi transparent circles
    for (var i = 0; i < 10; i++) {
      ctx.beginPath();
      ctx.lineWidth = 1 + i;
      ctx.strokeStyle = 'rgb(255, 0, 0)';
      ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
      ctx.stroke();
    }

});