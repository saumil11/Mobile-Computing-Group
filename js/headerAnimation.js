$(window).scroll(function (event) {
				var scroll = $(window).scrollTop();
				if(scroll>=50){
					$("#mainHeading").stop();
					$(".navbar-nav > li").stop();
					$("#mainHeading").animate({fontSize: "15px"},{
						duration: 300,
						easing: "linear",
					});
					$(".navbar-nav > li").animate({marginLeft: "15px",marginRight: "15px",fontSize: "120%"},{
						duration: 350,
						easing: "linear",
					});
					$("#topLink").fadeIn();
				}else{
					$("#mainHeading").stop();
					$(".navbar-nav > li").stop();
					$("#mainHeading").animate({fontSize: "30px"},{
						duration: 300,
						easing: "linear",
					});
					$(".navbar-nav > li").animate({marginLeft: "3px",marginRight: "3px",fontSize: "100%"},{
						duration: 250,
						easing: "linear",
					});
					$("#topLink").fadeOut();
				}
			});