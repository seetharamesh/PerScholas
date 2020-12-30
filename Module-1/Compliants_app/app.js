
$(() => {
  //button click event listener and event handler
  $("button").click(function (ev) {
    $("tbody#callData").empty();   //call empty function before beginning so page can be loaded with new burrough choice every time and not mix it up if the program is run again and again without browser refresh.
        ev.preventDefault()
        var userInput = $('input[type="text"]').val();//store user textbox value to userInput
        //If user didn't enter anything in the text box then keep the default as 10
        if (userInput === "")
          userInput = 10;
        //user input for number of data retrieved and agency(default NYPD) are stored in different variables for easier querying in ajax call
        const userLimit = '&$limit='+userInput;
        const agency = "&$where=agency=" + "'NYPD'";

        var userBoroughChoice;//this variable stores value of user button selection(from 5 buttons)
        if ($(this).attr("value") == "MANHATTAN") //user button value check
          userBoroughChoice = $(this).attr("value");//store user's button choice to userBoroughChoice
        else if($(this).attr("value") == "BROOKLYN") //user button value check
          userBoroughChoice = $(this).attr("value");
        else if($(this).attr("value") == "QUEENS") //user button value check
            userBoroughChoice = $(this).attr("value");
        else if($(this).attr("value") == "STATEN ISLAND") //user button value check
              userBoroughChoice = $(this).attr("value");
        else if($(this).attr("value") == "BRONX") //user button value check
                userBoroughChoice = $(this).attr("value");

        //The result of ajax is returned as an object and stored in promise variable
        const promise =
        $.ajax({
              //  url:`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=`+userBoroughChoice+`&agency=NYPD`
              url:`https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=`+userBoroughChoice + userLimit + agency
            }).then(
                (data) => {
                            console.log("received data:");
                            for(var i = 0; i<userInput; i++){
                              var rowNum = "res"+i;//generating id dynamically so it can be used for <div...container that has description> below.
                              var buttonNum = "button"+i;//generating id dynamically so it can be used for <div...container that has button>
                              console.log("i value is:" + i);
                              //tbody and its id should be together or it won't display data
                              //appending the data to the table in rows
                              $('tbody#callData').append(
                                                          '<tr><td>'
                                                          + data[i].unique_key
                                                          + '</td><td>'
                                                          + data[i].borough
                                                          + '</td><td>'
                                                          + data[i].descriptor
                                                          + '</td><td>'
                                                          + data[i].agency
                                                          + '</td><td><div id='+buttonNum+'><button onclick = showDesc('+i+') /button>SHOW DESCRIPTION</div>'//calling showDesc function
                                                          + '<div style="display:none" id='+rowNum+'>'+data[i].resolution_description+'</div>'//initially when page loads it should not display description.
                                                          + '</td></tr>')
                              console.log(data[i]);
                            }
                },
                () => {
                    console.log('bad request')
                }
            );
    });
//This function will show the description when button is clicked. And the button  will be hidden.
showDesc = function(rowNum){
  var temp = "res"+rowNum;
  $("#"+temp).show();
  $("#button" + rowNum).hide();
}
  })//document end
