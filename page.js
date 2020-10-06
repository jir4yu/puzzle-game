$( document ).ready(function() {
  $('.puzzle').on('click', function(){
    $(this).addClass('h')
  });

  $('.random-btn').on('click', function(){
    let puzzles = $('.puzzle:not(.h)');
    let randomEl = puzzles[Math.floor(Math.random() * puzzles.length)];
    $(randomEl).addClass('h');
  });
});