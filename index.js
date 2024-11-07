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
    if(!alphabetPage){
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
            document.querySelector("#letterGh2").innerHTML = newSentence;
            document.querySelector("#letterGh4").innerHTML = Nsentence;
        }

    }


function AddSentenceCarousel(){
    let inputSentence = document.querySelector("#letterGh3");
    sentences.push(inputSentence.value);
    inputSentence.value = " ";     
    renderHtml();
    
}









// ******************************** alphabet Section*******************
function chooseRandom(id){
    let numR =Math.floor(Math.random()*11);
    console.log(numR);
        let myB = document.getElementById(id);
    switch (numR) {
        case 0:
            myB.setAttribute('data-bs-target','#exampleL-A1');
            break;
        case 1:
            myB.setAttribute('data-bs-target','#exampleL-B1');
            break;
        case 2:
            myB.setAttribute('data-bs-target','#exampleL-P1');
            break;
        case 3:
            myB.setAttribute('data-bs-target','#exampleL-T1');
            break;
        case 4:
            myB.setAttribute('data-bs-target','#exampleL-Th1');
            break;
        case 5:
            myB.setAttribute('data-bs-target','#exampleL-J1');
            break;
        case 6:
            myB.setAttribute('data-bs-target','#exampleL-Ch1');
            break;
        case 7:
            myB.setAttribute('data-bs-target','#exampleL-H1');
            break;
        case 8:
            myB.setAttribute('data-bs-target','#exampleL-Kh1');
            console.log("hi masooma");
            break;
        case 9:
            myB.setAttribute('data-bs-target','#exampleL-D1');
            break;
        case 10:
            myB.setAttribute('data-bs-target','#exampleL-Zal1');
            break;
        case 11:
            myB.setAttribute('data-bs-target','#exampleL-R1');
            break;
        case 12:
            myB.setAttribute('data-bs-target','#exampleL-ZZ1');
            break;
        case 13:
            myB.setAttribute('data-bs-target','#exampleL-Sin1');
            break;
        case 14:
            myB.setAttribute('data-bs-target','#exampleL-Shin1');
            break;
        case 15:
            myB.setAttribute('data-bs-target','#exampleSad-1');
            break;
        case 16:
            myB.setAttribute('data-bs-target','#exampleZad-1');
            break;
        case 17:
            myB.setAttribute('data-bs-target','#exampleTaa-1');
            break;
        case 18:
            myB.setAttribute('data-bs-target','#exampleZaa-1');
            break;
        case 19:
            myB.setAttribute('data-bs-target','#exampleAin-1');
            break;
        case 20:
            myB.setAttribute('data-bs-target','#exampleGhain-1');
            break;
        case 21:
            myB.setAttribute('data-bs-target','#exampleFa-1');
            break;
        case 22:
            myB.setAttribute('data-bs-target','#exampleGhaf-1');
            break;
        case 23:
            myB.setAttribute('data-bs-target','#exampleKaf-1');
            break;
        case 24:
            myB.setAttribute('data-bs-target','#exampleGaf-1');
            break;
        case 25:
            myB.setAttribute('data-bs-target','#exampleLam-1');
            break;
        case 26:
            myB.setAttribute('data-bs-target','#exampleLam-1');
            break;
    
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

setInterval(function changebg(){
    let bgColor = [ "rgb(125, 48, 8)", " rgb(135, 48,88)","rgb(101, 48, 75)"," rgb(59, 18, 148)","rgb(84, 11, 11)","rgb(21, 86, 86)"];
    let color = bgColor[Math.floor(Math.random()*bgColor.length)];
    document.querySelector(".changeColor").style.backgroundColor = color;    
},20000);

function test(id,colordiv="#761102",colorTitle = "#335198",title,q,w,e,r="",t="",y="",u="",i="",o="",p=""){
    console.log(id);
    
    document.querySelector(id).innerHTML=`<section id="" class="container-fluid">
          <div class="p-4 pageN1 w-75" style="background-color: ${colordiv};">
            <h1 class="text-center  p-4 rounded-3 text-light" style="background-color: ${colorTitle};">${title}</h1>
            <h2>${q}</h2>
            <h2> ${w} </h2>
            <h2> ${e} </h2>
            <h2> ${r} </h2>
            <h2> ${t} </h2>
            <h2> ${y} </h2>
            <h2> ${u} </h2>
            <h2> ${i} </h2>
            <h2> ${o} </h2>
            <h2> ${p} </h2>
          </div>
        </section>
`;
console.log(id);

}


// ******************** Start make new carousel for words and sylabels in alpha Page

function makeWordCarousel(classCarousel,sectionClass){
    let wordCrousel = {
        title:"letter kk",
        targetCarouselId :"carouselExampleControlsNoTouching20",
        idLetter :"h2",
        imageCarousel :"imgcarousel2"
    }
    document.querySelector(`${classCarousel}`).innerHTML=`<h1> hi</h1>
                <section class = "${sectionClass}" >
          <h1 class="bg-info mt-5 rounded-3 p-4 text-center hov" onclick="sentenceAll('letterW-k2')">${wordCrousel.title}</h1>
          <!-- **** start carousel**** -->
             <div id="${wordCrousel.targetCarouselId}" class="carousel slide mx-auto w-75" data-bs-touch="false" data-bs-interval="false">
               <div class="carousel-inner mt-4 rounded-2 ${wordCrousel.imageCarousel}" >

                                          <!-- here fill out with js section -->

              </div>
               <button class="carousel-control-prev" style="background-color: rgba(227, 217, 204, 0.331);" type="button" data-bs-target="#${wordCrousel.targetCarouselId}" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next  " style="background-color: rgba(227, 217, 204, 0.331);" type="button" data-bs-target="#${wordCrousel.targetCarouselId}" data-bs-slide="next">
                 <span class="carousel-control-next-icon " aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
             </div>
          <!-- **** End carousel**** -->
          <div class=" rounded-3 py-10 wpic changeColor" onmouseleave="removeWord('${wordCrousel.idLetter}')" style="background-color: rgb(202, 160, 44); height: 300px;" id="${wordCrousel.idLetter}"></div>

        </section>
    `

    let alphaImage = [
        {
            image : "https://cdn.britannica.com/45/5645-050-B9EC0205/head-treasure-flower-disk-flowers-inflorescence-ray.jpg",
            sylabelWord : "کو +زه",
            active :"active"
        },
        {
            image : "./images/wordPic/10-16-2-ک.png",
            sylabelWord : "کِ + تاب",
            active :""
        },
        {
            image : "./images/wordPic/10-16-3-ک.png",
            sylabelWord : "کاک + توس",
            active :""
        },
        {
            image : "./images/wordPic/10-16-4-ک.png",
            sylabelWord : "کا + نا + دا",
            active :""
        },
        {
            image : "./images/wordPic/10-16-5-ک.png",
            sylabelWord : "کا + سه",
            active :""
        },
    ]
     
    let alphaImageHTML = "";
    
    alphaImage.forEach((image)=>{
        alphaImageHTML += `
            <div class="carousel-item ${image.active} " style="height: 500px;">
                <img src="${image.image}" class="d-block mx-auto mb-5 h-75" alt="...">
                <div class="carousel-caption text-primary " style="width: 100px; height: 100px;margin: 0 auto;          background-color: transparent;">
                    <img src="./images/webPic/bobSfanji.jpg" class="w-100 h-100" onmouseover="putWordhover('${wordCrousel.idLetter}','${image.sylabelWord}','')"  alt="" srcset="">
                </div>
            </div>
        `;
    })
    
    document.querySelector(`.${wordCrousel.imageCarousel}`).innerHTML += alphaImageHTML;
    
}
// *******************End make new carousel for words and sylabels in alpha Page
