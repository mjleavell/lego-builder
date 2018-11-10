import $ from 'jquery';
import partsData from '../../data/partsData';
import legoCharacter from '../LegoCharacter/legoCharacter';

const getRandomHead = () => {
  $('#random-btn').on('click', () => {
    partsData.getHeadsData().then((heads) => {
      const allHeads = heads.data;
      const randomHead = allHeads[Math.floor(Math.random() * 8)];
      legoCharacter.writeSelectedHead(randomHead);
    });
  });
};

const getRandomTorso = () => {
  $('#random-btn').on('click', () => {
    partsData.getTorsosData().then((torsos) => {
      const allTorsos = torsos.data;
      const randomTorso = allTorsos[Math.floor(Math.random() * 8)];
      legoCharacter.writeSelectedTorso(randomTorso);
    });
  });
};

const getRandomLegs = () => {
  $('#random-btn').on('click', () => {
    partsData.getLegsData().then((legs) => {
      const allLegs = legs.data;
      const randomLeg = allLegs[Math.floor(Math.random() * 8)];
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
