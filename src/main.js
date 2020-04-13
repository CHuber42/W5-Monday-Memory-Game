import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { shuffle } from './shuffle.js';

var cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
shuffle(cards);

for (var i = 0; i < 12; i++){
  $(`#${i}`).append(cards[i]);
}

$("div").click(function(event) {
  event.preventDefault();
  $(this).children().show();
});