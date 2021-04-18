let textBox = document.getElementById('text');
let box1 = document.getElementById('button 1');
let box2 = document.getElementById('button 2');

let url = 'http://127.0.0.1:5500/';
fetch(`${url}/data/story.json`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(error));

let story_data = '["asd", "asd2"]';
let myData = JSON.parse(story_data);
console.log(myData);
box1.addEventListener('click', () => {
    textBox.textContent = myData;    
})
box2.addEventListener('click', () => {
    textBox.textContent = 'nayy';    
})