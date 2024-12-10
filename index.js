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

}


// ******************** Start make new carousel for words and sylabels in alpha Page --> vagetables & Fruits ******

function makeWordCarousel(classCarousel,sectionClass){
    let wordCrousel = {
        title:"میوه ها و سبزیجات",
        targetCarouselId :"carouselExampleControlsNoTouching20",
        idLetter :"h2",
        imageCarousel :"imgcarousel2"
    }
    document.querySelector(`${classCarousel}`).innerHTML=`
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
            image : "./images/exampleLetter/example2/11-07-6.png",
            sylabelWord : "اِس + فِ + ناج --> اِسفِناج",
            active :"active"
        },
        {
            image : "./images/exampleLetter/example2/11-07-7.png",
            sylabelWord : "با + دِن + جان--> بادِنجان",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-8.png",
            sylabelWord : "پی + یاز -->پیاز",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-9.png",
            sylabelWord : "پی + یاز + چه --> پیازچه",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-10.png",
            sylabelWord : "تُ + رُب --> تُرُب",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-11.png",
            sylabelWord : "جَع + فَ + ری --> جَعفَری",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-12.png",
            sylabelWord : "چُ + غُن + دَر --> چُغُندَر",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-13.png",
            sylabelWord : "سیر",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-14.png",
            sylabelWord : "شَل + غَم --> شَلغَم",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-15.png",
            sylabelWord : "شِ + وید --> شِوید",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-16.png",
            sylabelWord : "فِل + فِل --> فِلفِل",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-17.png",
            sylabelWord : "فِل + فِل + دُل +مِه --> فِلفِل دُلمِه",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-18.png",
            sylabelWord : "قارچ",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-19.png",
            sylabelWord : "کا + هو --> کاهو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-20.png",
            sylabelWord : "کَ + دو --> کَدو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-21.png",
            sylabelWord : " کَ + دو + سَبز --> کَدوسَبز",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-22.png",
            sylabelWord : "کَ + رَفس --> کَرَفس",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-23.png",
            sylabelWord : "کَ + لَم --> کَلَم",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-24.png",
            sylabelWord : "کَ + لَم + بُ + روک + لی--> کَلَم بُروکلی",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-25.png",
            sylabelWord : "گُل + کَ + لَم --> گُل کَلَم",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-26.png",
            sylabelWord : "لو + بی + یا --> لوبیا ",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-27.png",
            sylabelWord : "نُ + خُود + فَ + رَن + گی --> نُخود فَرَنگی",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/11-07-28.png",
            sylabelWord : "هَ + ویج --> هَویج",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-1-e.png",
            sylabelWord : "آ + لو --> آلو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-2-e.png",
            sylabelWord : "اَ + نار --> اَنار",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-3-e.png",
            sylabelWord : "آ + نا + ناس --> آناناس",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-4-e.png",
            sylabelWord : "اَن + به --> اَنبه",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-5-e.png",
            sylabelWord : "اَن + جیر --> اَنجیر",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-6-e.png",
            sylabelWord : "اَن + گور --> اَنگور",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-7-e.png",
            sylabelWord : "پا + پا + یا --> پاپایا",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-8-e.png",
            sylabelWord : "پُر + تِ + قال --> پُرتِقال",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-9-e.png",
            sylabelWord : "تَ + مِشک --> تَمِشک",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-10-e.png",
            sylabelWord : "توت + فَ + رَن + گی --> توت فَرَنگی",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-11-e.png",
            sylabelWord : "زَرد + آ + لو --> زردآلو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-12-e.png",
            sylabelWord : "سیب",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-13-e.png",
            sylabelWord : "گُ + لا + بی --> گُلابی",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-14-e.png",
            sylabelWord : "گی + لاس --> گیلاس",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-15-e.png",
            sylabelWord : "لی + مو --> لیمو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-16-e.png",
            sylabelWord : "موز",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-17-e.png",
            sylabelWord : "هُ + لو --> هُلو",
            active :""
        },
        {
            image : "./images/exampleLetter/example2/12-2-18-e.png",
            sylabelWord : "هِن + دِ + وا + نه --> هندوانه",
            active :""
        },
    ]
     
    let alphaImageHTML = "";
    
    alphaImage.forEach((image)=>{
        alphaImageHTML += `
            <div class="carousel-item ${image.active} " style="height: 500px; max-width:985px">
                <img src="${image.image}" class="d-block mx-auto mb-5 h-75 w-75" alt="...">
                <div class="carousel-caption text-primary " style="width: 100px; height: 100px;margin: 0 auto;          background-color: transparent;">
                    <img src="./images/webPic/bobSfanji.jpg" class="w-100 h-100" onmouseover="putWordhover('${wordCrousel.idLetter}','${image.sylabelWord}','')"  alt="" srcset="">
                </div>
            </div>
        `;
    })
    
    document.querySelector(`.${wordCrousel.imageCarousel}`).innerHTML += alphaImageHTML;
    
}
// *******************End make new carousel for words and sylabels in alpha Page --> vagetables & Fruits *****

// ******************** Start make new carousel for words and sylabels in alpha Page --> Body Parts ******

function makeWordCarousel1(classCarousel,sectionClass){
    let bodycarousel = {
        title:"اعضای بدن",
        targetCarouselId :"bodyPart1",
        idLetter :"B1",
        imageCarousel :"bodyPart2"
    }
    document.querySelector(`${classCarousel}`).innerHTML=`
                <section class = "${sectionClass}" >
          <h1 class="bg-info mt-5 rounded-3 p-4 text-center hov" onclick="sentenceAll('letterW-k2')">${bodycarousel.title}</h1>
          <!-- **** start carousel**** -->
             <div id="${bodycarousel.targetCarouselId}" class="carousel slide mx-auto w-75" data-bs-touch="false" data-bs-interval="false">
               <div class="carousel-inner mt-4 rounded-2 ${bodycarousel.imageCarousel}" >

                                          <!-- here fill out with js section -->

              </div>
               <button class="carousel-control-prev" style="background-color: rgba(227, 217, 204, 0.331);" type="button" data-bs-target="#${bodycarousel.targetCarouselId}" data-bs-slide="prev">
                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                 <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next  " style="background-color: rgba(227, 217, 204, 0.331);" type="button" data-bs-target="#${bodycarousel.targetCarouselId}" data-bs-slide="next">
                 <span class="carousel-control-next-icon " aria-hidden="true"></span>
                 <span class="visually-hidden">Next</span>
               </button>
             </div>
          <!-- **** End carousel**** -->
          <div class=" rounded-3 py-10 wpic changeColor" onmouseleave="removeWord('${bodycarousel.idLetter}')" style="background-color: rgb(202, 160, 44); height: 300px;" id="${bodycarousel.idLetter}"></div>

        </section>
    `

    let alphaBady = [
        {
            image : "./images/exampleLetter/body-exa/12-6-1.png",
            sylabelWord : "اَعضای بَدَن",
            active :"active"
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-2.png",
            sylabelWord : "چِشم",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-3.png",
            sylabelWord : "اَب + رو --> اَبرو",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-4.png",
            sylabelWord : "دَست",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-5.png",
            sylabelWord : "پا",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-6.png",
            sylabelWord : "لَب",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-7.png",
            sylabelWord : "دَن + دان --> دَندان",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-8.png",
            sylabelWord : "مو",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-9.png",
            sylabelWord : "اَن + گُش + تان --> اَنگُشتان",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-10.png",
            sylabelWord : "شَصت",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-11.png",
            sylabelWord : "بی + نی --> بینی",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-12.png",
            sylabelWord : "گوش",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-13.png",
            sylabelWord : "زا + نو --> زانو",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-14.png",
            sylabelWord : "زَ + بان --> زَبان",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-15.png",
            sylabelWord : "گَر + دَن --> گَردَن",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-16.png",
            sylabelWord : "شِ + کَم --> شِکَم",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-17.png",
            sylabelWord : "نا + خُن --> ناخُن",
            active :""
        },
        {
            image : "./images/exampleLetter/body-exa/12-6-18.png",
            sylabelWord : "صو + رَت --> صورَت",
            active :""
        },
    ]
     
    let alphaImageHTML1 = "";
    
    alphaBady.forEach((imag)=>{
        console.log(imag);
        
        alphaImageHTML1 += `
            <div class="carousel-item ${imag.active} " style="height: 500px; max-width:985px">
                <img src="${imag.image}" class="d-block mx-auto mb-5 h-75 w-75" alt="...">
                <div class="carousel-caption text-primary " style="width: 100px; height: 100px;margin: 0 auto;          background-color: transparent;">
                    <img src="./images/webPic/bobSfanji.jpg" class="w-100 h-100" onmouseover="putWordhover('${bodycarousel.idLetter}','${imag.sylabelWord}','')"  alt="" srcset="">
                </div>
            </div>
        `;
    })
    
    document.querySelector(`.${bodycarousel.imageCarousel}`).innerHTML += alphaImageHTML1;
    
}
// *******************End make new carousel for words and sylabels in alpha Page --> vagetables & Fruits *****
