$("#count").text($(".crypto_container").length);

$("#main_container").append(
  $(
    '<div class="crypto_container"><img src="ripple.png" alt="Ripple" class="picto-crypto"><h6>Ripple</h6><div class="divider"></div><p>0,2€</p></div>'
  )
);

$("#main_container").append(
  $(
    '<div class="crypto_container"><img src="litecoin.png" alt="Litecoin" class="picto-crypto"><h6>Litecoin</h6><div class="divider"></div><p>39,9€</p></div>'
  )
);

$("#count").text($(".crypto_container").length);
