// script for small posts animated when hover
function postHoverAnimated(postImg, postImgAnimate){
	jQuery(document).ready(function() {
		postImg.mouseenter(function() {
			postImgAnimate.css("display", "block")
				postImg.css("display", "none")
		postImgAnimate.mouseleave(function(){
			postImgAnimate.css("display", "none")
				postImg.css("display", "block")
			});
		});
	});
};

// for small posts animated in first row

postHoverAnimated(jQuery(".posts_small_row_1 > .post_sm_1 > .post_sm_1_img"), 
	jQuery(".posts_small_row_1 > .post_sm_1 > .post_sm_1_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_1 > .post_sm_2 > .post_sm_2_img"), 
	jQuery(".posts_small_row_1 > .post_sm_2 > .post_sm_2_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_1 > .post_sm_3 > .post_sm_3_img"), 
	jQuery(".posts_small_row_1 > .post_sm_3 > .post_sm_3_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_1 > .post_sm_4 > .post_sm_4_img"), 
	jQuery(".posts_small_row_1 > .post_sm_4 > .post_sm_4_img_animate"));

// for small posts animated in second row

postHoverAnimated(jQuery(".posts_small_row_2 > .post_sm_1 > .post_sm_1_img"), 
	jQuery(".posts_small_row_2 > .post_sm_1 > .post_sm_1_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_2 > .post_sm_2 > .post_sm_2_img"), 
	jQuery(".posts_small_row_2 > .post_sm_2 > .post_sm_2_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_2 > .post_sm_3 > .post_sm_3_img"), 
	jQuery(".posts_small_row_2 > .post_sm_3 > .post_sm_3_img_animate"));

postHoverAnimated(jQuery(".posts_small_row_2 > .post_sm_4 > .post_sm_4_img"), 
	jQuery(".posts_small_row_2 > .post_sm_4 > .post_sm_4_img_animate"));

// for small posts animated in mix row

postHoverAnimated(jQuery(".posts_mix_row_1 > .post_sm_2 > .post_sm_2_img"), 
	jQuery(".posts_mix_row_1 > .post_sm_2 > .post_sm_2_img_animate"));

postHoverAnimated(jQuery(".posts_mix_row_1 > .post_sm_4 > .post_sm_4_img"), 
	jQuery(".posts_mix_row_1 > .post_sm_4 > .post_sm_4_img_animate"));

