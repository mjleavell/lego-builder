import $ from 'jquery';

const writeNewCharacter = (savedChar) => {
  let domString = '';
  domString += `
  <div class="card" style="width: 5rem;">
    <img class="card-img-top saved-img" src="${savedChar[0].head}" alt="Card image cap">
    <img class="card-img-top saved-img" src="${savedChar[0].torso}" alt="Card image cap">
    <img class="card-img-top saved-img" src="${savedChar[0].leg}" alt="Card image cap">
    <div class="card-body p-0">
      <p class="card-title">${savedChar[0].name}</p>
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
    $('#head').html('');
    $('#torso').html('');
    $('#leg').html('');
    $('#head-name').html('');
    $('#torso-name').html('');
    $('#leg-name').html('');
    return writeNewCharacter(savedCharacter);
  });
};

export default savedCharEvent;
