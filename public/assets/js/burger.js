$(function(){

    $(".eat").on("click", function(event){
        var id = $(this).data("id");
        console.log("clicked "+id);
		$.ajax("/api/burger/" + id, {
	      type: "PUT"
	    }).then(function(){
	        location.reload();
	      }
	    );
	});
});