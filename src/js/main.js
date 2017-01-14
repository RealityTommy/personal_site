// capitalizes first letter of string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

$(document).ready(function(){
	
	var page = $( 'main' ).attr('id');
	var page_type = $( 'main' ).attr('class');
	
	if ( page_type != 'project' ) {
		page = capitalizeFirstLetter( page )
		$( document ).find( 'title' ).text( page + ' | Tommy Truong' );
	} else {
		$( document ).find( 'title' ).text( page + ' | Projects | Tommy Truong' );
	}
		
});