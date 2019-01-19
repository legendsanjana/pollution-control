$("ul").on("click","li",function()
{
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event)
{
	$(this).parent().fadeOut(500,function()
		{
			$(this).remove();
		});
	event.stopPropagation();
});
$("input").keypress(function(event)
{
	if(event.which == 13)
	{
		var to= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + to + "</li>");
	}
});
$(".fa-plus").click(function(){
	// body...
	$("input[type='text'").fadeToggle(500);
})