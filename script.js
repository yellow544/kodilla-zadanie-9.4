function drawTree(h) {
  for (var i = 0; i < h; i++) {
    var star = '';
    
    for (var j = 0; j <= i; j++) {
      star += '* ';  
    }
    
    var space = '';
    for (var k = h; k > i; k--) {
      space += ' ';
    }
      
    console.log(space + star);
  } 
}

drawTree(10);

