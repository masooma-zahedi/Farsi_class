function putPic(id,url){
    document.getElementById(id).innerHTML="<img class='imgWord' src='"+url+"'>";
 }
function putWord(id,word){
    document.getElementById(id).innerHTML="<h1 class='enWord mt-5'>"+word+"</h1>";
 }

 function putWordPic(id,word = '' ,url = ''){
    if(word !== "" && url !== ""){
        document.getElementById(id).innerHTML = "<div> <img class ='imgword' src='"+url+"'></div> <h1 class='enword text-light text-center mt-1'>"+ word+"</h1>"
    } else if (word && url === "") {
        putWord(id,word);
    } else if(word === "" && url){
        putPic(id,url)
    }
 }

//  ******************************** word Section*******************************************************************
function clearBox(id){
    document.getElementById(id).innerHTML="";
}
function sentenceAll(id){
    let x = document.getElementById(id)
    if(x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}
                        // ******** Add Sentence To Carousel********
    let sentences = [];
    
    renderHtml();
    function renderHtml(){
        let newSentence = "";
        let Nsentence = "";
        for(let i = 0; i < sentences.length; i++){
            const getSentence = sentences[i];
            if(i === 0){
                const html = `<div  class="carousel-item active  pe-5">
                      <h1 class="text-center">${getSentence} <button onclick='sentences.splice(${i},1); renderHtml();' style='background-color:transparent ;border:none; width:60px; height:50px;'><img class='w-100 h-100' style='overflow:hidden' src='./images/word_pic/10-22-1-deleteButton.webp'></button></h1>
                    </div>`;
                    newSentence +=html;
            } else {                
                // const getSentence = sentences[i];
                const html = `<div  class="carousel-item pe-5">
                      <h1 class="text-center">${getSentence} <button onclick='sentences.splice(${i},1); renderHtml();' style='background-color:transparent ;border:none; width:60px; height:50px;'><img class='w-100 h-100' style='overflow:hidden' src='./images/word_pic/10-22-1-deleteButton.webp'></button></h1>
                    </div>`;
                    // renderHtml();
                    newSentence +=html;
                }            
                const sentenceHtml = `<h2>${getSentence}</h2>`;
                Nsentence += sentenceHtml;
        }
        // document.querySelector("#letterGh2").innerHTML = newSentence;
        // document.querySelector("#letterGh4").innerHTML = Nsentence;
    }


function AddSentenceCarousel(){
    let inputSentence = document.querySelector("#letterGh3");
    sentences.push(inputSentence.value);
    inputSentence.value = " ";     
    renderHtml();
    
}









// ******************************** alphabet Section*******************
function chooseRandom(id){
    let numR =Math.floor(Math.random()*14);
    console.log(numR);
    let myB = document.getElementById(id);
    switch (numR) {
        case 0:
            myB.setAttribute('data-bs-target','#exampleL-A1');
            console.log("hi masooma");
            break;
        case 1:
            myB.setAttribute('data-bs-target','#exampleL-B1');
            console.log("hi masooma");
            break;
        case 2:
            myB.setAttribute('data-bs-target','#exampleL-P1');
            console.log("hi masooma");
            break;
        case 3:
            myB.setAttribute('data-bs-target','#exampleL-T1');
            console.log("hi masooma");
            break;
        case 4:
            myB.setAttribute('data-bs-target','#exampleL-Th1');
            console.log("hi masooma");
            break;
        case 5:
            myB.setAttribute('data-bs-target','#exampleL-J1');
            console.log("hi masooma");
            break;
        case 6:
            myB.setAttribute('data-bs-target','#exampleL-H1');
            console.log("hi masooma");
            break;
        case 7:
            myB.setAttribute('data-bs-target','#exampleL-Kh1');
            console.log("hi masooma");
            break;
        case 8:
            myB.setAttribute('data-bs-target','#exampleL-D1');
            console.log("hi masooma");
            break;
        // case 2:
        //     myB.setAttribute('data-bs-target','#exampleL-P1');
        //     console.log("hi masooma");
        //     break;
        // case 2:
        //     myB.setAttribute('data-bs-target','#exampleL-P1');
        //     console.log("hi masooma");
        //     break;
    
        default:
            break;
    }
    
}

function putWordhover(id,word  ,url = '' ){
    // alert(word)
    putWord(id,word );
    
}
function removeWord(id){
    document.getElementById(id).innerHTML = "";

}

// setInterval(changebg(),3000)

// changebg();
setInterval(function changebg(){
    let bgColor = [ "rgb(125, 48, 8)", " rgb(135, 48,88)","rgb(101, 48, 75)"," rgb(59, 18, 148)","rgb(84, 11, 11)","rgb(21, 86, 86)"];
    let color = bgColor[Math.floor(Math.random()*bgColor.length)]
    document.querySelector(".changeColor").style.backgroundColor = color;
    console.log(color);
    
},1000)