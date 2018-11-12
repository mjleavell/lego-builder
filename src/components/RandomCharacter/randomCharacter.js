import $ from 'jquery';
import partsData from '../../data/partsData';
import legoCharacter from '../LegoCharacter/legoCharacter';

const getRandomHead = () => {
  $('#random-btn').on('click', () => {
    partsData.getHeadsData().then((heads) => {
      const randomHead = heads[Math.floor(Math.random() * 8)];
      legoCharacter.writeSelectedHead(randomHead);
    });
  });
};

const getRandomTorso = () => {
  $('#random-btn').on('click', () => {
    partsData.getTorsosData().then((torsos) => {
      const randomTorso = torsos[Math.floor(Math.random() * 8)];
      legoCharacter.writeSelectedTorso(randomTorso);
    });
  });
};

const getRandomLegs = () => {
  $('#random-btn').on('click', () => {
    partsData.getLegsData().then((legs) => {
      const randomLeg = legs[Math.floor(Math.random() * 8)];
      legoCharacter.writeSelectedLeg(randomLeg);
    });
  });
};

const getRandomCharacter = () => {
  getRandomHead();
  getRandomTorso();
  getRandomLegs();
};

export default getRandomCharacter;
