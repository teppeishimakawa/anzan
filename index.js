

var cnt=0;
var PassSec;
var PassageID;


var num_arr1=[0,1,2,3,4,5,6,7,8,9]
var num_arr2=[0,1,2,3,4,5,6,7,8,9]
var comment_arr=["&nbsp;&nbsp;足して！","&nbsp;&nbsp;足して！","&nbsp;&nbsp;掛けて！"]
//↓配列の値に四則演算子を使うとエラー出たため。
var kigou=["+","+","*"]


var enter=document.getElementById("enter");
var random1=Math.floor(Math.random()*10)
var random1_2=Math.floor(Math.random()*10)
var random2=Math.floor(Math.random()*3)
var order_num = document.getElementById("order_num");

// プログレスバーの進捗値
var val;
// 一定間隔で処理を行うintervalのIDを保持
var intervalID;



export {enter};



　　　　　function showPassage()
　　　　　{
         var msg;
   　　　 PassSec++;
   　　　 //msg = 29 - (Math.floor(PassSec/100)) + ":" +  ( '00' + (100 - PassSec%100)).slice( -2 );   // 表示文作成
         msg = (Math.floor(PassSec/100)) + ":" +  ( '00' + (PassSec%100)).slice( -2 );
         document.getElementById("time").innerHTML = msg;
         endChk();
　　　　　}

　　　　　function startShowing()
　　　　　{
   　　　　PassSec = 0;
   　　　　PassageID = setInterval(showPassage,10);
　　　　　}

        function stopShowing()
        {
        clearInterval(PassageID);
        }



function endChk()
{
 if( (PassSec/100) >= 30 || cnt == 5)
  {
   stopShowing();
   //document.getElementById("time").innerHTML="0:00";
   document.getElementById("score").style.color="red";

   document.getElementById("enter").style.pointerEvents="none"
   document.getElementById("order_num").style.display="none";
   document.getElementById("order_comment").style.display="none";
   //document.getElementById("ans").style.display="none";

   clearInterval(intervalID);
  }
}




//random1 0:gu,1:cho,2:pa
//random2 0:勝ち,1:負け,2:引き分け




function next()
{
   cnt++
   document.getElementById("score").innerHTML=cnt;
   random1=Math.floor(Math.random()*10)
   random1_2=Math.floor(Math.random()*10)
   random2=Math.floor(Math.random()*3)
   //空白300ms,文字表示500ms
   document.getElementById("order_num").innerHTML="ok!";
   document.getElementById("order_comment").innerHTML="";
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},300)
      setTimeout(function(){document.getElementById("order_num").innerHTML=num_arr1[random1];},600)
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},1100)
      setTimeout(function(){document.getElementById("order_num").innerHTML=num_arr2[random1_2];},1400)
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},1900)
      setTimeout(function(){document.getElementById("order_comment").innerHTML=comment_arr[random2];},2200)
}




function NGnext()
{
   cnt--;
   document.getElementById("score").innerHTML=cnt;
   random1=Math.floor(Math.random()*10)
   random1_2=Math.floor(Math.random()*10)
   random2=Math.floor(Math.random()*3)
   document.getElementById("order_num").style.color="red"
   document.getElementById("order_num").innerHTML="NG...";
   document.getElementById("order_comment").innerHTML="";
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},300)
      setTimeout(function()
        {
         document.getElementById("order_num").innerHTML=num_arr1[random1]
         document.getElementById("order_num").style.color="black";
        },600)
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},1100)
      setTimeout(function(){document.getElementById("order_num").innerHTML=num_arr2[random1_2];},1400)
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},1900)

      setTimeout(function(){document.getElementById("order_comment").innerHTML=comment_arr[random2];},2200)


}




  // プログレスバーを更新する
  function updateProgress()
  {
    // プログレスバーの進捗値を更新し、プログレスバーに反映させる
    val += 1;
    document.getElementById("myProgress").value = val;
    document.getElementById("myProgress").innerText = val + "%";
    //console.log("progress:", val, "%");

    // 最大値まで達したら終了
    if (val == 100)
    {
      clearInterval(intervalID);
    }
  }




export function click()
{
  var flg=0;
  if(flg == 0)
    {
      startShowing();
      document.getElementById("stt").disabled=true;
      flg=1;

      document.getElementById("order_num").style.visibility="visible";
      document.getElementById("order_num").innerHTML=num_arr1[random1];
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},500)
      setTimeout(function(){document.getElementById("order_num").innerHTML=num_arr2[random1_2];},800)
      setTimeout(function(){document.getElementById("order_num").innerHTML="";},1300)
      setTimeout(function(){document.getElementById("order_comment").innerHTML=comment_arr[random2];},1600)
      document.getElementById("enter").style.pointerEvents="auto"
    }else
    {

    }
        val = 0;
    // 300msおきにプログレスバーを更新する。30秒で100%
    intervalID = setInterval(updateProgress, 300);
}





export function edit(e)
{
  order_num.innerHTML = order_num.innerHTML + this.value;
  if(order_num.innerHTML == (  Math.abs(new Function("return " + num_arr1[random1] + kigou[random2] + num_arr2[random1_2])())  ))
    {
    document.getElementById("enter").className = 'green'
    }else{document.getElementById("enter").className = 'red';}
}





export function result()
 {
      //console.log(random2);
      //console.log(num_arr1[random1] + kigou[random2] + num_arr2[random1_2])
      //ans.innerHTML = new Function("return " + ans.innerHTML)();
      if(order_num.innerHTML == (  Math.abs(new Function("return " + num_arr1[random1] + kigou[random2] + num_arr2[random1_2])())  ))
       {
        next();
       }else{NGnext()}
 }
