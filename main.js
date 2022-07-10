/*resultが結果　textが過程の表示 */
/*直前に何を入力したかをstate */
/*小数点か否かをmode*/
const numbuttons = document.getElementsByClassName("num");
const markbuttons = document.getElementsByClassName("mark");
const zerobuttons = document.getElementsByClassName("zero");
let result = 0
let text = "0"
let i = 0
let state = ""
let mode = "int"

/*クリック時の挙動 = */
equal.addEventListener("click",function(){
  if(state == "num"){
    result = eval(text);
    text = "0"
    document.getElementById("screen").textContent = result
    state = ""
    mode = "int"
  }
})  

/*クリック時の挙動 C */
clear.addEventListener("click",function(){
  result = 0 
  text = "0"
  document.getElementById("screen").textContent = result
  state = ""
  mode = "int"
})

/*クリック時の挙動 記号 */
for(let i = 0; i < markbuttons.length; i++){
  markbuttons[i].addEventListener("click",function(){
    if( state !="" && state !="mark" && state != "point"){
      text += markbuttons[i].textContent
      document.getElementById("screen").textContent = text
      state = "mark"
      mode = "int"
    }
  })
}

/*クリック時の挙動 1-9数字 */
for(let i = 0; i < numbuttons.length; i++){
  numbuttons[i].addEventListener("click", function(){
    if(state == ""){
      text = this.textContent
    }
    else{
      text += this.textContent
    }
    document.getElementById("screen").textContent = text
    state = "num"
  })
}

/*クリック時の挙動 0 00 */
for(let i = 0; i < zerobuttons.length; i++){
  zerobuttons[i].addEventListener("click",function(){
    if(state == "" || state == "mark"){
      if(text.slice(-1) == 0){ 
        document.getElementById("screen").textContent = text
      }
    }
    else{
      text += this.textContent
      document.getElementById("screen").textContent = text
    }
  })
}

/*クリック時の挙動 . */
point.addEventListener("click",function(){
  if(mode == "int"){
    if(state == ""){
      text = "0."
    }
    else if (state == "mark"){
      text += "0."
    }
    else{
      text += this.textContent
    }
    state = "point"
    mode = "deci"
    document.getElementById("screen").textContent = text
  }
})




