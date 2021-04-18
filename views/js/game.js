let textBox = document.getElementById('text');
let box1 = document.getElementById('button 1');
let box2 = document.getElementById('button 2');
let body_ = document.getElementById('body_');
let app = document.getElementById('app');
let title = document.getElementById('title');
let myData;
console.log(title);

let url_1 = 'http://127.0.0.1:8081';

class story{
    constructor(name, textBox, box1, box2, body_, title) {
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
    sceneController_demo(){
        this.fun();
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=1')";
        let scene;
        this.scene = scene;
        this.scene = "2";
        box1.addEventListener('click', () => {
            //i= i+ 1;
            //textBox.textContent = myData[i];

            console.log(this.scene);
            switch(this.scene){
                case "2": this.scene_2();
                break;
                case "3": this.scene_3();
                break;
                case "4": this.scene_4();
                break;
                case "5": this.scene_5();
                break;
                case "6": this.scene_6();
                break;
                case "10": this.end_scene();
                break;
            }
        })
        box2.addEventListener('click', () => {
            if(this.scene == "Aye"){
                textBox.textContent = 'nayy';    
                body_.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
            }
        })
    }

    sceneController(){
        body_.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
        this.fun();
        this.scene_1();
        //let  i = 1;
        let scene;
        this.scene = scene;
        this.scene = "1";
        console.log(this.scene);
        box1.addEventListener('click', () => {
            //i= i+ 1;
            //textBox.textContent = myData[i];

            console.log(this.scene);
            switch(this.scene){
                case "1": this.scene_1();
                break;
                case "2": this.scene_2();
                break;
                case "3": this.scene_3();
                break;
            }
        })
        box2.addEventListener('click', () => {
            if(this.scene == "Aye"){
                textBox.textContent = 'nayy';    
                body_.style.backgroundImage= "url('https://wallpapercave.com/wp/wp5405231.jpg')";
            }
        })
    }
    // Markets

    scene_1(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=1')";
        textBox.textContent = myData[1];
        console.log(myData[1]);
    }    
    scene_2(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=2')";
        textBox.textContent = myData[1];
        box1.textContent = "Next";
        box2.hidden;
        title.hidden =true;
        box2.style.display = "none";
        this.scene = "3";
        console.log(myData[1]);
    }
    scene_3(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=3')";
        textBox.textContent = myData[2];
        box1.textContent = "What Voices?";
        this.scene = "4";
        console.log(myData[2]);
    }
    scene_4(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=4')";
        textBox.textContent = myData[2];
        box1.textContent = "Follow Them!";
        this.scene = "5";
        console.log(myData[3]);
    }
    scene_5(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=5')";
        this.scene = "6";
    }
    scene_6(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=6')";
        this.scene = "10";
    }
    scene_7(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=8')";
        this.scene = "9";
    }
    scene_8(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=9')";
        this.scene = "9";
    }
    scene_9(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=10')";
        this.scene = "10";
    }
    end_scene(){
        body_.style.backgroundImage= "url('https://dummyimage.com/1440x1080/000/fff&text=6')";
    }
    
    // scene_1(){
    //     //body_.style.backgroundImage = "url('https://wallpaperaccess.com/full/1139963.jpg')";
    //     if(box1.textContent == "Aye"){
    //         textBox.textContent = myData[1];
    //         console.log(myData[1]);
    //         box1.textContent = "Next";
    //         box2.hidden;
    //         box2.style.display = "none";
    //     }
    //     else if(box1.textContent == "Next"){
    //         textBox.textContent = myData[2];
    //         box1.textContent = "What Voices?";
    //         this.scene = "2";
    //     }
    // }
    // scene_2(){
    //     body_.style.backgroundImage= "url('https://wallpaperaccess.com/full/1139963.jpg')";
    //     textBox.textContent = myData[2];
    //     box1.textContent = "What Voicasd";
    //     console.log("scene 2"); 
    // }
    
}


//let name_1 = prompt('Please enter your name: ');
let gameStory = new story('Nimit', textBox, box1, box2, body_, title);
gameStory.intro();
// gameStory.sceneController();
gameStory.sceneController_demo();