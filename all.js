// 1 印出乘法表，從 3~15，從 3x1、3x2~一直到 15x15
// for(let i = 3; i++;i<16){
//     for(let j=1;j++;j<16){
//         console.log(i+"x"+j+"="+i*j);
//     }
// }
//2.請建立一個 BMI 函式，裡頭有兩個參數(身高,體重)，執行時會印出對應 BMI，並取小數點後一位。範例如下
// input: BMI(178,70)
// console.log：25.2
function BMI(height,weight){
    let heightToM = Math.round((height/100)*100)/100; //公分變公尺
    let bmi = weight/(heightToM*heightToM);
    let result = Math.round(bmi*10)/10; //取小數點後一位
    console.log(result);
}
BMI(175,70);

//養工處有幾個案件 處理完成跟待處理加起來有幾個案件
let xhr = new XMLHttpRequest();
let newData;
console.log(xhr);
xhr.open("get","https://soweb.kcg.gov.tw/open1999/ServiceRequestsQuery.asmx/ServiceRequestsQuery?startdate=&enddate=");
xhr.send();
xhr.onload=function(){
    // let textData = xhr.responseText;
    // console.log(textData);
    let jData = JSON.parse(xhr.responseText);
    console.log(jData);
    let numOfYon=0;
    let totalNum=0;
    for(let i=0;i<jData.length;i++){
        if(jData[i].UnitName_=="養工處"){
            numOfYon++;     
        }
        if(jData[i].StatusName_="待處理" || "處理完成"){
            totalNum++;
        }
    }
    console.log("養工處案件="+numOfYon);
    console.log("處理完成跟待處理加起來="+totalNum);
}