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
    sceneController(){
        app.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
        this.fun();
        //let  i = 1;
        let scene;
        this.scene = scene;
        box1.addEventListener('click', () => {
            //i= i+ 1;
            //textBox.textContent = myData[i];
            scene = box1.textContent;
            console.log(scene);
            if(scene == "Aye")    
                this.scene_1();
        })
        box2.addEventListener('click', () => {
            textBox.textContent = 'nayy';    
        })
    }

    // Markets
    scene_1(){
        app.style.backgroundImage = "url('https://wallpaperaccess.com/full/1139963.jpg')";
        console.log('scene 1');
    }
    scene_3(){

    }
    scene_4(){}
    scene_5(){}
    scene_6(){}
    scene_7(){}
}


//let name_1 = prompt('Please enter your name: ');
let gameStory = new story('Nimit', textBox, box1, box2);
gameStory.intro();
gameStory.sceneController();
