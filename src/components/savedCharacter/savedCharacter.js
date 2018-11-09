import $ from 'jquery';

const writeNewCharacter = (savedChar) => {
  let domString = '';
  domString += `
  <div class="card" style="width: 18rem;">
    <img class="card-img-top saved-img" src="${savedChar[0].head}" alt="Card image cap">
    <img class="card-img-top saved-img" src="${savedChar[0].torso}" alt="Card image cap">
    <img class="card-img-top saved-img" src="${savedChar[0].leg}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${savedChar[0].name}</h5>
    </div>
  </div>`;
  $('#output').append(domString);
};

const savedCharEvent = () => {
  $('#save-btn').on('click', () => {
    const savedCharacter = [];
    const head = $('#head').find('img').attr('src');
    const torso = $('#torso').find('img').attr('src');
    const leg = $('#leg').find('img').attr('src');
    const name = $('#lego-name').text();
    savedCharacter.push({
      head, torso, leg, name,
    });
    console.log(savedCharacter);
    return writeNewCharacter(savedCharacter);
  });
};

export default savedCharEvent;
