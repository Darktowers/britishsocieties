(function ($) {

	

	jQuery(document).ready(function ($) {

			$(document).on("scroll", function(){
				//sacamos el desplazamiento actual de la página
				var desplazamientoActual = $(document).scrollTop();
				//accedemos al control de "ir arriba"
				var controlArriba = $(".rowUp");
				//compruebo si debo mostrar el botón
				if(desplazamientoActual > 100 && controlArriba.css("display") == "none"){
					controlArriba.css("display","flex");
				}
				//controlo si debo ocultar el botón
				if(desplazamientoActual < 100 && controlArriba.css("display") == "flex"){
					controlArriba.fadeOut(500);
				}

				
			});
			$(".rowUp").on("click", function(e){
				e.preventDefault();
				$("html, body").animate({
					scrollTop: 0
				}, 1000); 
			});
			$('a.ancla').click(function(e){
				e.preventDefault();
				enlace  = $(this).attr('href');
				$('html, body').animate({
					scrollTop: $(enlace).offset().top
				}, 1000);
			});
			$(".video-Link .question").on("click",
				function() {
					$( ".video-Link .info" ).slideToggle();
				}
			);

		var i=0;
		while(i!=150){
			i++;
			var div = document.createElement('div');
			$(".back-Star").append(div);
			div.setAttribute('class', 'start'+Math.round(Math.random() * 5));
			div.style.left = Math.round(Math.random() * 99)+"%";
			div.style.bottom = Math.round(Math.random() * 99)+"%";
			width=(Math.round(Math.random() * 1)+1);
			div.style.width = width+"px";
			div.style.height = width+"px";
		}
		$(".play").on("click",function(){
			x = $(this).parent().parent().parent().find("iframe").clone();
			$(".modal-video .video-cont").html(x);
			$(".modal-video .video-cont").prepend("<i class='fa fa-times closex close'>");
			$(".form-Modal").slideDown("slow");
			$(".modal-video").css("display","flex");

		});
		$(".menu").on("click",function(){
			$(".header-Menu-Nav").animate({width:'toggle'},500);
		});
		$(".header-Menu-Nav").on("click",function(){
			$(".header-Menu-Nav").animate({width:'toggle'},500);
		});

		$(".start-form-artist").on("click",function(e){
			e.preventDefault()
			$(".forms-Info").css("display","none");
			$(".form-artist").slideToggle(500);

		});
		$(".start-form-news").on("click",function(e){
			e.preventDefault()
			$(".forms-Info").css("display","none");
			$(".form-news").slideToggle(500);

		});
		$(document).on("click",".close",function(){
			$(".form-Modal").slideUp("slow");
			$(".form").css("display","none");
			$(".forms-Info").css("display","block");
			$(".modal-video").slideUp("slow");
			$("iframe").each(function() { 
				var src= $(this).attr('src');
				$(this).attr('src',src);  
			});
		});
		// $('.desp').on('mouseover', function(){
		// 	$('.back-desp').slideToggle();
		// });
		$(".span-menuM").on("click", function () {

			$(".menuM").stop().slideDown();
			$(".span-menuM").attr("style", "display:none !important;");
			$(".span-menuM-Close").attr("style", "display:block !important;");
		});
		$(".span-menuM-Close").on("click", function () {

			$(".menuM").stop().slideUp();
			$(".span-menuM").attr("style", "display:block !important;");
			$(".span-menuM-Close").attr("style", "display:none !important;");
		});
		$('.sliderRelacionados').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 890,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]

		});

	});

})(jQuery);