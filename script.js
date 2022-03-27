let num1 =  document.querySelector('input#fnum')
let num2 =  document.querySelector('input#fnum2')
let num3 =  document.querySelector('input#fnum3')
let res = document.querySelector('div#res')
function finalizar(){
    if (Number(num1.value) != Number(num2.value)){
        var tot = Number(num1.value) + Number(num2.value)
        var tut = tot / 2
        res.innerHTML = `<p>O valor total do seu pedido é: ${tut} reais;<br></br> Precisará de troco?</p>`  
        
    } else {
        res.innerHTML = `<p>O valor total do seu pedido é: ${Number(num1.value)} reais;<br></br> Precisará de troco?</p>`
    }
    if (Number(num3.value) != 0 ){
        var tot = Number(num1.value) + Number(num2.value)
        if (Number(num2.value) == 0 ){
            var tat = tot + Number(num3.value)
        }else{
            var tat = tot / 2 + Number(num3.value)
        }
        res.innerHTML = `<p>O valor total do seu pedido é: ${tat} reais;<br></br> Precisará de troco?</p>`  
    }
}