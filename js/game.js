let textBox = document.getElementById('text');
let box1 = document.getElementById('button 1');
let box2 = document.getElementById('button 2');

//the whole json part
var mydata = JSON.parse(data);
alert(mydata[0].name);
alert(mydata[0].age);
alert(mydata[1].name);
alert(mydata[1].age);

box1.addEventListener('click', () => {
    textBox.textContent = 'some other text';    
})
box2.addEventListener('click', () => {
    textBox.textContent = 'nayy';    
})

