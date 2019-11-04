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