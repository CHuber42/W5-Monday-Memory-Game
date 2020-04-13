import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { shuffle } from './shuffle.js';

var cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
var targetFlag = 1;
var target1 = 0;
var target2 = 0;
shuffle(cards);


for (var i = 0; i < 12; i++){
  $(`#${i}`).append(cards[i]);
}

$(".blue").click(function(event) {
  event.preventDefault();
  var card = $(this).children(); 
  card.show();

  
  if (targetFlag === 1) {
    target1 = card;
    targetFlag = 2;
  }
  else if (targetFlag === 2) {
    target2 = card;
    targetFlag = 1;
  }
  setTimeout(function(){
    if (targetFlag === 1) {
      if (target1.text() !== target2.text()) {
        target1.hide();
        target2.hide();
      }
    }
  }
  , 1000);
});