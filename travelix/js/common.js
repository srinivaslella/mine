$(document).ready(function(){
	commonHeader();
	footer();
});

var date = new Date();
var year = date.getFullYear();

function commonHeader(){
	var htmlStr = "";
				htmlStr += '	<header class="header">';
				htmlStr += '<nav class="main_nav"> ';
				htmlStr += '<div class="container"> ';
				htmlStr	+=	'<div class="row">';
				htmlStr += '  <div class="col main_nav_col d-flex flex-row align-items-center justify-content-start"> ';
				htmlStr += '<div class="logo_container"> ';
				htmlStr += '<div class="logo"><a href="#"><img src="images/logo.png" alt="">myfamily</a></div>  ';
				htmlStr += '</div> ';
				htmlStr += '<div class="main_nav_container ml-auto"> ';
				htmlStr += '<ul class="main_nav_list"> ';
				htmlStr += '<li class="main_nav_item"><a href="#">Family</a></li>';	  
				htmlStr +=  '<li class="main_nav_item"><a href="about.html">about us</a></li>';
				htmlStr +=  '				<li class="main_nav_item"><a href="offers.html">Functions</a></li>';
				htmlStr +=  '				<li class="main_nav_item"><a href="blog.html">Memories</a></li>';
				htmlStr +=  '			<li class="main_nav_item"><a href="contact.html">contact</a></li>';
				htmlStr +=  '		</ul>';
				htmlStr +=  '</div>';
				htmlStr +=  '	<div class="content_search ml-lg-0 ml-auto">';							
				htmlStr +=  '	</div>';
				htmlStr +=  '	<form id="search_form" class="search_form bez_1">';
				htmlStr +=  '	<input type="search" class="search_content_input bez_1">';
				htmlStr +=  '	</form>';
				htmlStr +=  '	<div class="hamburger">';
				htmlStr +=  '			<i class="fa fa-bars trans_200"></i>';
				htmlStr +=  '	</div>';
				htmlStr +=  '	</div>';
				htmlStr +=  '</div>';
				htmlStr +=  '</div>	';
				htmlStr +=  '</nav>';	  
				htmlStr +=  '  </header>';
				htmlStr +=  '<div class="menu trans_500">';
				htmlStr +=  '	<div class="menu_content d-flex flex-column align-items-center justify-content-center text-center">';
				htmlStr +=  '	<div class="menu_close_container"><div class="menu_close"></div></div>';
				htmlStr +=  '	<div class="logo menu_logo"><a href="#"><img src="images/logo.png" alt=""></a></div>';
				htmlStr +=  '	<ul>';
				htmlStr +=  '		<li class="menu_item"><a href="#">Family</a></li>';
				htmlStr +=  '		<li class="menu_item"><a href="about.html">about us</a></li>';
				htmlStr +=  '	<li class="menu_item"><a href="offers.html">Functions</a></li>';
				htmlStr +=  '	<li class="menu_item"><a href="blog.html">Memories</a></li>';
				htmlStr +=  '	<li class="menu_item"><a href="contact.html">contact</a></li>';
				htmlStr +=  '	</ul>';
				htmlStr +=  '	</div>';
				htmlStr +=  '</div>';

	
$("#commonHeader").append(htmlStr);

}

function footer(){
	var htmlStr = "";
				htmlStr +=  '<footer class="footer">';
				htmlStr +=  '	<div class="container">';
				htmlStr +=  '	<div class="row">';
				htmlStr +=  '	<div class="col-lg-6 footer_column">';
				htmlStr +=  '		<div class="footer_col">';
				htmlStr +=  '		<div class="footer_content footer_about">';
				htmlStr +=  '			<div class="logo_container footer_logo">';
				htmlStr +=  '				<div class="logo"><a href="#"><img src="images/logo.png" alt="">Myfamily</a></div>';
				htmlStr +=  '			</div>';
				htmlStr +=  '			<p class="footer_about_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.</p>';							
				htmlStr +=  '		</div>';
				htmlStr +=  '	</div>';
				htmlStr +=  '</div>';
				htmlStr +=  '	<div class="col-lg-6 footer_column">';
				htmlStr +=  '		<div class="footer_col">';
				htmlStr +=  '		<div class="footer_title">contact info</div>';
				htmlStr +=  '		<div class="footer_content footer_contact">';
				htmlStr +=  '			<ul class="contact_info_list">';
				htmlStr +=  '				<li class="contact_info_item d-flex flex-row">';
				htmlStr +=  '					<div><div class="contact_info_icon"><img src="images/placeholder.svg" alt=""></div></div>';
				htmlStr +=  '					<div class="contact_info_text">Srinivasarao Lella</div>';
				htmlStr +=  '				</li>';
				htmlStr +=  '				<li class="contact_info_item d-flex flex-row">';
				htmlStr +=  '					<div><div class="contact_info_icon"><img src="images/phone-call.svg" alt=""></div></div>';
				htmlStr +=  '					<div class="contact_info_text">+91-9182260635</div>';
				htmlStr +=  '				</li>';								
				htmlStr +=  '			</ul>';
				htmlStr +=  '		</div>';
				htmlStr +=  '	</div>';
				htmlStr +=  '</div>';
				htmlStr +=  '</div>';
				htmlStr +=  '</div>';
				htmlStr +=  '	</footer>';
   
   $("#commonFooter").append(htmlStr);
}