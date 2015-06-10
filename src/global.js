window.fbAsyncInit = function() {
        FB.init({
          appId      : '1434589160191195',
          xfbml      : true,
          version    : 'v2.3'
        });
      };

var share = function () {
       FB.ui({
  method: 'share',
  href: 'http://upkk982cff39.pforpianist.koding.io/MLA/',
}, function(response){});
}
       
       window.fbAsyncInit();