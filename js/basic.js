//var는 구형
//let은 업데이트 할때, const는 계속 유지할때.
const
let
var

//prompt입력받음
const age = prompt("How r u?");
console.log(age)

//prompt가 int형인지, type이 뭔지
const age_a=parseInt(age)
console.log(age_a, typeof age)

//nan 형인지, ex) age_a가 만약 int가 아니면 오류 출력해야함. 그때 자주 쓰임 if문도 함께
if(isNaN(age_a)){

}else if(age_a<2){

}else{
    
}
