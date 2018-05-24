$(document).ready(function () {

  function flip() {
    alert(process.env.EVENT_API_KEY);
    if ($(this).attr("class") === "posts" || $(this).attr("class") === "posts flipBack") {
      $(this).removeClass("flipBack").addClass("flip");

      setTimeout(() => {
        $("#info" + this.id).removeAttr("hidden").show();
        $("#pic" + this.id).addClass("displayPicBorder");
        $("#name" + this.id).addClass("postName");
      }, 1000 * 0.5);
    }

    else if ($(this).attr("class") === "posts flip") {
      $(this).removeClass("flip").addClass("flipBack");
      setTimeout(() => {
        $("#info" + this.id).hide();
        $("#pic" + this.id).removeClass("displayPicBorder");
        $("#name" + this.id).removeClass("postName");
      }, 1000 * 0.5);
    }

  };

  $(document).on("click", ".posts", flip);
  $.ajax({
    url: "https://api.eventful.com/json/events/search?app_key="+process.env.EVENT_API_KEY+"tLZjcCM8s77cvN5x&location=+Phoenix&date=Future",
    dataType: 'jsonp',
    success: function (weekend) {
      console.log(weekend);

      var eventNames = [];
      for (var i = 0; i < weekend.events.event.length; i++) {
        $("#weekend").append("<div class='event' id='apiCard'>");
        $("#apiCard").append("<h6 class='eventTitle'>" + weekend.events.event[i].title + "</h6>");
        if (weekend.events.event[i].image !== null) {
          $("#apiCard").append("<img class='eventImg' src='" + weekend.events.event[i].image.thumb.url + "' alt='event' width='80px'>");
        }
        $("#apiCard").append("<div class='eventDes'>" + weekend.events.event[i].description + "</div>");
        $("#apiCard").append("<h6 class='eventAddress'><u>Address:</u></h6>");
        $("#apiCard").append("<div class='eventAddress'>" + weekend.events.event[i].venue_address + "</div>");
        $("#apiCard").append("<a href='" + weekend.events.event[i].city_name + "' class='weblink eventLink' target='_blank'>Website</a></div>");
      }
 
    }
  }); 

 

});
