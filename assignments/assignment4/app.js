
del = (a)=>
{
	$(a).remove();
}


let i=0;

$('#btn').click(()=>{
	let a = $('#in').val();
	let b='k'+i;
	if(a.length!=0)
	$('#ad').append('<div class="ans" id='+b+'><h1>'+a+'</h1><button id='+b+' onclick=del('+b+') >X</button></div>');
    i++;
    console.log(b);
});

let f=true;
$('#mode').click(()=>{
	if(f==true)
	{
		$('body').css('background', 'black');
		$('#head').css('color', 'white');
		$('#mode').css('background', 'skyblue');
		f=false;
    }
	else
	{
		$('body').css('background', 'skyblue');
		$('#head').css('color', 'black');
		$('#mode').css('background', 'white');
		f=true;
	}
})


