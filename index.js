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

//  ******************************** word Section************
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






// ******************************** alphabet Section*******************
function chooseRandom(id){
    let numR =Math.floor(Math.random()*5);
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