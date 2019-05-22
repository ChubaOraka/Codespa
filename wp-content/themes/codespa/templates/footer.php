<a name="footer"></a>
<footer class="footer-main">
  <div class="gradient-top"></div>
  <div class="gradient-bottom"></div>
  <div class="gradient-bottom2"></div>
  <div class="container">
    <section class="footer-join">
      <div class="row">
        <div class="col-sm-4">
          <h2>Get Involved</h2>
          <p class="lead">Sign Up to Learn more:</p>
          <?php  gravity_form( 'Footer Contact Form', false, false, false, '', true );  ?>
        </div>
      </div>
    </section>
  </div>
  <section class="footer-contact">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h2>Get In Touch</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-4 col-md-3">
          <p itemscope itemtype="http://schema.org/PostalAddress">
             <span itemprop="name">CODESPA America</span><br>
             <span itemprop="streetAddress">1875 I Street NW, Suite 500</span><br>
             <span itemprop="addressLocality">Washington</span>,
             <span itemprop="addressRegion">DC</span>
             <span itemprop="postalCode">20006</span><br>
             <span itemprop="telephone">(202) 763-1677</span><br>
             <span itemprop="email"><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#045;&#097;&#109;&#101;&#114;&#105;&#099;&#097;&#046;&#099;&#111;&#109;">&#105;&#110;&#102;&#111;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#045;&#097;&#109;&#101;&#114;&#105;&#099;&#097;&#046;&#099;&#111;&#109;</a></span>
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="footer-attribution">
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <p>&copy; Copyright 2015 Codespa America.<br>
          <a href='https://www.mapbox.com/about/maps/' target='_blank'>Maps &copy; Mapbox &copy; OpenStreetMap</a><br>
          Designed &amp; built by <a href="http://www.opusfidelis.com" target="_blank">OPUSfidelis.</a><br>
          <a href="<?php echo get_template_directory_uri(); ?>/assets/images/codespa-america-privacy-policy.pdf" target="_blank">Terms and Conditions / Privacy Policy</a></p>
        </div>
        <div class="col-sm-6">
          <nav class="footer-nav" role="navigation">
            <?php
            if (has_nav_menu('primary_navigation')) :
              wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'primary-nav'));
            endif;
          ?>
          </nav>
        </div>
      </div>
    </div>
  </section>
</footer>
