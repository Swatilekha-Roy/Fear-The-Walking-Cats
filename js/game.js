let textBox = document.getElementById('text');
let box1 = document.getElementById('button 1');
let box2 = document.getElementById('button 2');
textBox.textContent = 'asd';

box1.addEventListener('click', () => {
    textBox.textContent = 'some other text';    
})
box2.addEventListener('click', () => {
    textBox.textContent = 'nayy';    
})