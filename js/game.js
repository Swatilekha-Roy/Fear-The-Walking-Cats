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
        this.scene = "1";
        box1.addEventListener('click', () => {
            //i= i+ 1;
            //textBox.textContent = myData[i];

            console.log(this.scene);
            switch(this.scene){
                case "1": this.scene_1();
                break;
                case "2":this.scene_2();
                break;
            }
        })
        box2.addEventListener('click', () => {
            if(this.scene == "Aye"){
                textBox.textContent = 'nayy';    
                app.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
            }
        })
    }

    // Markets
    scene_1(){
        app.style.backgroundImage = "url('https://wallpaperaccess.com/full/1139963.jpg')";
        if(box1.textContent == "Aye"){
            textBox.textContent = myData[1];
            box1.textContent = "Next";
            box2.hidden;
            box2.style.display = "none";
        }
        else if(box1.textContent == "Next"){
            textBox.textContent = myData[2];
            box1.textContent = "What Voices?";
            this.scene = "2";
        }
    }
    scene_2(){
        app.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
        textBox.textContent = myData[3];
        box1.textContent = "What Voices?";
        console.log("scene 3");
    }
    scene_3(){}
    scene_4(){}
    scene_5(){}
    scene_6(){}
}


//let name_1 = prompt('Please enter your name: ');
let gameStory = new story('Nimit', textBox, box1, box2);
gameStory.intro();
gameStory.sceneController();
