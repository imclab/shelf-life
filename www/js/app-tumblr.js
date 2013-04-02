$(document).ready(function(){
    $b = $('body');
    $form = $('#project-form');
    $modal_bg = $('.modal-bg');
    $modal_btn = $('#modal-btn');
    $project_hdr = $form.find('.hdr');
    
    function toggle_header() {
        $form.toggle();
        $modal_bg.toggle();
        $b.toggleClass('modal-open');
    }
    
    $modal_btn.click(function() {
        toggle_header();
    });
    $project_hdr.click(function() {
        toggle_header();
    });
    $modal_bg.click(function() {
        toggle_header();
    });
    
});