document.addEventListener('DOMContentLoaded', () => {
  const speakerObj = [
    {
      name: 'Bob Quinn',
      img: './images/Bob.jpg',
      job: 'Professor in Business Administration-Professor od Management & Organizations',
      desc: 'Bob Quinn is a co-founder and the current director of the Center for Positive Organizational Scholarship.He has published 16 books on the subjects of leadership, organizational change, and effectiveness.',
    },
    {
      name: 'Shirli Kopelman',
      img: './images/kopelmanshirli.jpg',
      job: 'Clinical Assistant Professor of Management and Organizations',
      desc: 'Shirli Kopelman conducts extensive research and provides coaching on the strategic ways individuals can leverage emotions, cross-cultural differences, and power to co-create value in challenging circumstances.such as high-stakes negotiations.',
    },
    {
      name: 'John Branch',
      img: './images/branchjohn.jpg',
      job: 'Lecturer of Marketing and Strategy Faculty Associate, Center for Russian and East European Studies',
      desc: 'John Branch brings extensive global marketing experience to the classroom to help his students better understand customers in todays global business environment.',
    },
    {
      name: 'Wally Hopp',
      img: './images/hoppwallace.jpg',
      job: 'Associate Dean, Faculty and Research Herrick Professor of Technology and Operations, Professor of indutrial and Operations Engineering',
      desc: 'Wally Hopp is a former editor-in-chief of the journal Management Science and is currently a senior editor of Production and Operations Management.',
    },
    {
      name: 'Venky Nagar',
      img: './images/nagarvenky.jpg',
      job: 'Associate Professor of Accounting',
      desc: 'Venky Nagar serves on the editorial boards of the journal of political Economy, The Accounding Review, and Journal of Management Accounting Research. He has contributed and garnered awards from many other publications.',
    },
    {
      name: 'Aneel Karnani',
      img: './images/karnanianeel.jpg',
      job: 'Associate Professor of Strategy',
      desc: 'Aneel Karnani studies how firms can leverage existing competitive advantages and create new ones to achieve rapid growth. He is interested in global competition, particularly in the context of emerging economies.',
    },
  ];
  const containerSpeaker = document.createElement('div');
  containerSpeaker.className = 'speakers_container';
  const speakerSection = document.querySelector('.guest_speaker');
  speakerSection.appendChild(containerSpeaker);
  for (let i = 0; i < speakerObj.length; i += 1) {
    const indivSpeakerContainer = document.createElement('div');
    indivSpeakerContainer.className = 'speakers_container';
    const containerSpeakerImg = document.createElement('div');
    containerSpeakerImg.className = 'img-content';
    const containerSpeakerInfo = document.createElement('div');
    containerSpeakerInfo.className = 'info_content';
    const imgBlock = document.createElement('div');
    imgBlock.className = 'image_block';
    const speakerImage = document.createElement('img');
    speakerImage.className = 'guest_speaker';
    speakerImage.setAttribute('alt', `${speakerObj[i].name}`);
    speakerImage.setAttribute('src', `${speakerObj[i].img}`);
    const speakerName = document.createElement('h1');
    speakerName.className = 'speaker_name';
    speakerName.textContent = `${speakerObj[i].name}`;
    const speakerJob = document.createElement('h5');
    speakerJob.className = 'speaker_job';
    speakerJob.textContent = `${speakerObj[i].job}`;
    const seperator = document.createElement('div');
    seperator.className = 'seperator';
    const speakerInfo = document.createElement('p');
    speakerInfo.className = 'speaker_info';
    speakerInfo.textContent = `${speakerObj[i].desc}`;
    const containerSpeaker = document.querySelector('.speakers_container');
    containerSpeaker.appendChild(indivSpeakerContainer);
    indivSpeakerContainer.appendChild(containerSpeakerImg);
    indivSpeakerContainer.appendChild(containerSpeakerInfo);
    containerSpeakerImg.appendChild(imgBlock);
    containerSpeakerImg.appendChild(speakerImage);
    containerSpeakerInfo.appendChild(speakerName);
    containerSpeakerInfo.appendChild(speakerJob);
    containerSpeakerInfo.appendChild(seperator);
    containerSpeakerInfo.appendChild(speakerInfo);
  }
});
