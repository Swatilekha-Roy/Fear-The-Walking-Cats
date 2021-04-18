let textBox = document.getElementById('text');
let box1 = document.getElementById('button 1');
let box2 = document.getElementById('button 2');
let app = document.getElementById('body_');
let myData;

let url_1 = 'http://127.0.0.1:5500/';

class story{
    constructor(name, textBox, box1, box2, app) {
        this.name = name;
    }
    async fun (){
        let data = await fetch(`${url_1}/data/story.json`);
        data = await data.json();
        myData = data;
        console.log(data);
    }
    intro(){
        //alert(`welcome ${this.name}`)
        console.log(`welcome ${this.name}`);
    }

    // Ruins and Entrance
    scene_1(){
        app.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
        this.fun();
        let  i = 1;

        box1.addEventListener('click', () => {
            i= i+ 1;
            textBox.textContent = myData[i];    
            app.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
        })
        box2.addEventListener('click', () => {
            textBox.textContent = 'nayy';    
        })
    }

    // Markets
    scene_2(){
        box2.addEventListener('click', () => {
        app.style.backgroundImage= "url('https://wallpaperaccess.com/full/1139963.jpg')";
            textBox.textContent = 'nayy';    
        })
    }
}


//let name_1 = prompt('Please enter your name: ');
let gameStory = new story('Nimit', textBox, box1, box2);
gameStory.intro();
gameStory.scene_1();
gameStory.scene_2();
// fetch(`${url}/data/story.json`)
//   .then(response => response.json())
//   .then(data => {
//     myData = data;
//     })
//   .catch(err => console.log(error));

//   let fun = async function fun (){
//       let data = await fetch(`${url}/data/story.json`);
//       data = await data.json();
//       myData = data;
//       console.log(data);
//   }
// fun();
// console.log(`mydata: ${myData}`);
// let  i = 1;

// // box1.addEventListener('click', () => {
// //     i= i+ 1;
// //     textBox.textContent = myData[i];    
// // })


// box2.addEventListener('click', () => {
//     textBox.textContent = 'nayy';    
// })