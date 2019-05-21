<?php use Roots\Soil\Nav\NavWalker; ?>

<header class="header-top">
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-md-offset-9">
        <?php /* <a class="btn-donate" href="/donate" role="button">Donate</a> */ ?>
        <?php if ( !is_page( 'contact' ) ) { ?>
        <a class="btn-sign-up" href="#footer" role="button">Sign Up</a>
        <?php } else { ?>
        <a class="btn-sign-up" href="#contact" role="button">Sign Up</a>
        <?php } ?>
      </div>
    </div>
  </div>
</header>

<header class="header-banner" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only"><?= __('Toggle navigation', 'sage'); ?></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="<?= esc_url(home_url('/')); ?>"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/codespa-logo.png" alt="<?php bloginfo('name'); ?>" class="hidden-xs"><span class="visible-xs-inline"><?php bloginfo('name'); ?></span></a>
    </div>

    <nav class="collapse navbar-collapse" role="navigation">
      <?php
      if (has_nav_menu('primary_navigation')) :
        wp_nav_menu(['theme_location' => 'primary_navigation', 'walker' => new NavWalker(), 'menu_class' => 'nav navbar-nav']);
      endif;
      ?>
    </nav>
  </div>
</header>
