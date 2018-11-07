import $ from 'jquery';
import 'bootstrap';
import './index.scss';
import getAndPrintAllParts from './components/LegoCharacter/legoCharacter';

const initApp = () => {
  getAndPrintAllParts();
};

initApp();

$('#click-btn').on('click', () => {
  $('#output').append('yo');
});
