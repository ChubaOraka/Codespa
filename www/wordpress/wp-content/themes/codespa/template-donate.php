<?php
/**
 * Template Name: Donate Template
 */
?>

<section class="banner banner-donate">
  <div class="headline">
    <h1>Donate</h1>
  </div>
</section>
<section class="section-padded section-donate">
  <div class="container">
    <div class="row">
      <div class="col-sm-8">
        <h2>Donate Today!</h2>
        <?php  gravity_form( 'Donate Form', false, false, false, '', true );  ?>
        <?php  wx_build_embed("https://nest.givingfuel.com/nest-online-donations", "Click Here") ;  ?>
      </div>
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm-12">
            <hr>
            <h4>Make an Impact</h4>
            <p>Make an impact in the lives of those whose voices and struggles too often go unheard and unnoticed, it is easy to make an enormous difference and CODESPA guarantees that your gift will help those in need:</p>
            <p><strong>Your donation will support our services around the world</strong></p>
            <hr>
            <div class="map-donate" id="map_donate"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
