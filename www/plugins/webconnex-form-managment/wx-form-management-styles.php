<?php
    header("Content-type: text/css; charset: UTF-8");
    $background = '#7BB045';
    if($_GET['background']) {
      $background = '#'.$_GET['background'];
    }
    $color = '#FFF';
    if($_GET['color']) {
      $color = '#'.$_GET['color'];
    }
?>
a.wx-button, a.wx-button:hover {
  color: <?php echo $color; ?>;
  background: <?php echo $background; ?>;
  opacity: 0.8;
  padding: 1em;
  border: none;
  text-decoration: none;

}
a.wx-button:hover {
  opacity: 1;
  -webkit-animation: highlight 1s 1;
  -moz-animation: highlight 1s 1;
  -ms-animation: highlight 1s 1;
  -o-animation: highlight 1s 1;
  animation: highlight 1s 1;
}
#TB_window {
	-webkit-overflow-scrolling: auto !important;
  overflow-y: auto !important;
}
#TB_window iframe {max-width: 100%}
.screen-reader-text {
	clip: rect(1px, 1px, 1px, 1px);
	height: 1px;
	overflow: hidden;
	position: absolute !important;
	width: 1px;
	word-wrap: normal !important;
}
@media only screen and (max-width: 800px) {
  #TB_window {
		position: absolute !important;
    max-width: 98%;
    margin-left: 0 !important;
    left: 1% !important;
		margin-top: 0 !important;
  }
}

