<?php
/**
 * Template Name: Contact Template
 */
?>

<section class="banner banner-contact">
  <div class="headline">
    <h1>Contact</h1>
  </div>
</section>
<section class="section-padded section-contact">
  <div class="container">
    <div class="row">
      <div class="col-sm-4" id="contact">
        <h2>Stay Informed</h2>
        <?php  gravity_form( 'Contact Form', false, false, false, '', true );  ?>
      </div>
      <div class="col-sm-8">
        <div class="row">
          <div class="col-sm-12">
            <h2>CODESPA Network</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <p itemscope itemtype="http://schema.org/PostalAddress">
               <span class="address-title" itemprop="name">CODESPA America</span><br>
               <span itemprop="streetAddress">1050 Connecticut Ave NW #66235</span><br>
               <span itemprop="addressLocality">Washington</span>,
               <span itemprop="addressRegion">DC</span>
               <span itemprop="postalCode">20035</span><br>
               <span itemprop="telephone">(202) 204-3017</span><br>
               <span itemprop="email"><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#045;&#097;&#109;&#101;&#114;&#105;&#099;&#097;&#046;&#111;&#114;&#103;">&#105;&#110;&#102;&#111;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#045;&#097;&#109;&#101;&#114;&#105;&#099;&#097;&#046;&#111;&#114;&#103;</a></span>
               <span itemprop="url"><a href="/">codespa-america.org</a></span>
            </p>
          </div>
          <div class="col-sm-4">
            <p itemscope itemtype="http://schema.org/PostalAddress">
               <span class="address-title" itemprop="name">Fundación CODESPA</span><br>
               <span itemprop="addressLocality">Calle Rafael Begam&iacute;n</span><span itemprop="streetAddress">12-Bajo</span><br>
               <span itemprop="postalCode">28043</span>
               <span itemprop="addressRegion">Madrid</span>,
               <span itemprop="Country">Spain</span><br>
               <span itemprop="telephone">+34 917444240</span>
               <span itemprop="email"><a href="mailto:&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#046;&#111;&#114;&#103;">&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#064;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#046;&#111;&#114;&#103;</a></span>
               <span itemprop="url"><a href="http://codespa.org">codespa.org</a></span>
            </p>
          </div>
          <div class="col-sm-4">
            <p itemscope itemtype="http://schema.org/PostalAddress">
               <span class="address-title" itemprop="name">Fundacio CODESPA Catalunya</span><br>
               <span itemprop="addressLocality">Marc Aureli</span><span itemprop="streetAddress">8 - Entresol 3a</span><br>
               <span itemprop="postalCode">08006</span>
               <span itemprop="addressRegion">Barcelona</span>,
               <span itemprop="Country">Spain</span><br>
               <span itemprop="telephone">+34 932000400</span>
               <span itemprop="email"><a href="mailto:&#098;&#097;&#114;&#099;&#101;&#108;&#111;&#110;&#097;&#064;&#102;&#117;&#110;&#100;&#097;&#099;&#105;&#111;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#046;&#111;&#114;&#103;">&#098;&#097;&#114;&#099;&#101;&#108;&#111;&#110;&#097;&#064;&#102;&#117;&#110;&#100;&#097;&#099;&#105;&#111;&#099;&#111;&#100;&#101;&#115;&#112;&#097;&#046;&#111;&#114;&#103;</a></span>
               <span itemprop="url"><a href="http://www.fundaciocodespa.org">www.fundaciocodespa.org</a></span>
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12">
            <h4>CODESPA's International Delegations</h4>
            <div class="map-contact" id="mapbox_contact"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
