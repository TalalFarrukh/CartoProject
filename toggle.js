$(function(){
  $('svg#2017').hide();// hide it initially
  $('svg#2018').hide();
  $('svg#2019').hide();
  $('svg#2020').hide();

  $('button#2k16').on('click', function(){
     $('svg#2016').show();
     $('svg#2017').hide();
     $('svg#2018').hide();
     $('svg#2019').hide();
     $('svg#2020').hide();
  });

  $('button#2k17').on('click', function(){
     $('svg#2017').show();
     $('svg#2016').hide();
     $('svg#2018').hide();
     $('svg#2019').hide();
     $('svg#2020').hide();
  });

  $('button#2k18').on('click', function(){
     $('svg#2018').show();
     $('svg#2016').hide();
     $('svg#2017').hide();
     $('svg#2019').hide();
     $('svg#2020').hide();
  });

  $('button#2k19').on('click', function(){
     $('svg#2019').show();
     $('svg#2016').hide();
     $('svg#2017').hide();
     $('svg#2018').hide();
     $('svg#2020').hide();
  });

  $('button#2k20').on('click', function(){
     $('svg#2020').show();
     $('svg#2016').hide();
     $('svg#2017').hide();
     $('svg#2018').hide();
     $('svg#2019').hide();
  });

});
