$(document).ready(function(){
    $('.collapsible').collapsible();
  });

    $(document).ready(function(){
    $('.collapsible').collapsible({
    accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    onOpen: function(el) { alert('Open'); }, // Callback for Collapsible open
    onClose: function(el) { alert('Closed'); } // Callback for Collapsible close
  });
  });

  $(document).ready(function(){
    $('.collapsible').collapsible('open', 0);

  // Close
  $('.collapsible').collapsible('close', 0);

  // Destroy
  $('.collapsible').collapsible('destroy');
  });