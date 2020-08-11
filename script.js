const triggerBtn = document.getElementById('button');
const audioElement = document.getElementById('audio');


//get joke from api
const getJoke = async () => {
  const jokeURL =
    'https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist';
  const response = await fetch(jokeURL);
  const data = await response.json();
  const joke = data.joke ? data.joke : data.setup + data.delivery;
  tellMe(joke);
};

// text to speech
const tellMe = (joke) => {
  const ttsObj = {
    key: '0f2e3a6ebe754761991139a9b16ba2c4',
    src: 'hahahahah ',
    hl: 'en-us',
    v: 'Jason',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  };
  ttsObj.src = joke;
  VoiceRSS.speech(ttsObj);
};

//initial
triggerBtn.addEventListener('click', () => {
  getJoke();
  triggerBtn.disabled = true;
});

audioElement.onended = () => {
  triggerBtn.disabled = false;
};
