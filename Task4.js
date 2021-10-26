	$(function() {
	     $("#Clock").text(Date());
	     setTimeout(tooLong(), 30000);
 	     
	});

         function alertMe(elem) {
	     var i =elem.find('a').text()
             if (i == 5)
             { alert('five'); }
             else 
                 alert(i);
         }

         function LoadList() {
             $(".THELIST").empty();
             for (i = 0; i < 10; i++) {
                 newElem = $("<li><a href='#'>" + i + "</a></li>");
                 newElem.click(function () {
                     alertMe($(this));
                 });
                 $(".THELIST").append(newElem);
             }
         }

	function tooLong() {
                alert('you have now been on the page for half a minute');
        }

         
         
        