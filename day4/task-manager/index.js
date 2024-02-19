console.log("hello world");

// class assignment
// var i;
// function PrintNum(){
//     for (i=1;i<=100;i++)
//     console.log(i);
// }
// PrintNum();

// function sumNumber(x,y){
//      console.log(x+y);
// }
// sumNumber(4,5);

// function sumNumbers(x,y){
//     return x+y;
// }
// sumNumbers(4,6)

var i=0;
function printPyramid(){
    for(i=1;i<=5;i++)
    {
        let row = "";
        for(j = 0; j<=i; j++){
            row += "*";
        }
        console.log(row);
    }
}
printPyramid(5);