function deleteRow(row){
    row.parentNode.removeChild(row);
}
deleteRow()
// Question4

function testVariable() {
    var strText = document.getElementById("textone").value;          
    var strText1 = document.getElementById("textTwo").value;
    var strText = document.getElementById("textThree").value;          
    var strText1 = document.getElementById("textFour").value;
    var result = strText + ' ' + strText1;
    document.getElementById('spanResult').textContent = result;
     
}
var counterElement = document.getElementById("counter");
var increaseBut = document.getElementsById("increaseButton")
var decreaseBut = document.getElementsById("decreaseButton")
var counterValue = 0;

function updateCounter(){
counterElement.textContent=counterValue;
    // console.log(counterValue, "decrease");
}
increaseBut.addEventListener('click',function(){
    counterValue ++;
    updateCounter();
})
decreaseBut.addEventListener('click',function(){
    counterValue-- ;
    updateCounter();
})
updateCounter()