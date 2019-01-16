var el = document.getElementById ('calc')
el.addEventListener('click', s)

function s () 
{
  var arg1 =+ document.getElementById('namber1').value
  var arg2 =+ document.getElementById('namber2').value
  var arg3 =+ document.getElementById('namber3').value
  if (arg1> 0 && arg2 > 0 && arg3 > 0 )
{
  var stage = 1/2*(arg1+arg2+arg3)
  var stage2 = stage*(stage-arg1)*(stage-arg2)*(stage-arg3)
  var result = Math.pow(stage2, (1/2)).toFixed(2)
 
  document.getElementById('namber1').innerHTML = arg1
  document.getElementById('result').innerHTML = result
} else {
  alert('Ошибка при вводе координат!')
}
}