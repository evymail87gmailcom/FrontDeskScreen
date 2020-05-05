function topLayout() {
    var topDiv = document.createElement("div");
    topDiv.className = "topDiv";
    document.body.appendChild(topDiv);

    //gets the current date and time
    function displayDateTime() {

        //yttre div för tid och datum
        var timeDiv = document.createElement("div");
        timeDiv.className = "timeDiv";
        topDiv.appendChild(timeDiv);

        //Plats för rubrik
        var h3head = document.createElement("p");
        h3head.id = "h3head";
        timeDiv.appendChild(h3head);
        document.getElementById("h3head").innerHTML = "Tid och Datum";

        //Plats för tid och datum
        var d = new Date();
        var info = document.createElement("p");
        info.id = "info";
        timeDiv.appendChild(info);
        document.getElementById("info").innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
    }


    function getWeather() {
        //get information from the smhi api
        //const smhiUri=
        var weatherDiv = document.createElement("div");
        weatherDiv.className = "weatherDiv";
        topDiv.appendChild(weatherDiv);

        var weatherHeader = document.createElement("p");
        weatherHeader.id = "weatherHeader";
        weatherDiv.appendChild(weatherHeader);
        document.getElementById("weatherHeader").innerHTML = "Dagens v&aumlder";
    }

    function displayEmployees() {
        //Låda för anställda
        var employeeDiv = document.createElement("div");
        employeeDiv.className = "employeeDiv";
        topDiv.appendChild(employeeDiv);

        //Rubrik för anställda
        var employeeHeader = document.createElement("p");
        employeeHeader.id = "employeeHeader";
        employeeDiv.appendChild(employeeHeader);
        document.getElementById("employeeHeader").innerHTML = "Anst&aumlllda p&aring plats";

        
         const employeeURI = 'https://cors-anywhere.herokuapp.com/https://5eac5fba4bf71e00166a0821.mockapi.io/api/v1/Employees';
 
         fetch(employeeURI)
             .then((resp) => resp.json())
             .then(data => console.log(data));
 
     }
     
 
    
    displayDateTime();
    getWeather();
    displayEmployees();
}

function secondRowLayout() {
        var secondDiv = document.createElement("div");
        secondDiv.className = "secondDiv";
        document.body.appendChild(secondDiv);

        function getSong() {
            //const srRadioUri=
            var songDiv = document.createElement("div");
            songDiv.className = "songDiv";
            secondDiv.appendChild(songDiv);

            var songHeader = document.createElement("p");
            songHeader.id = "songHeader";
            songDiv.appendChild(songHeader);
            document.getElementById("songHeader").innerHTML = "1:a p&aring topplistan: ";
        }
        getSong();
    }

    function thirdRowLayout() {



         function getDepartures() {
            //funkar bra att göra flera api:anrop från samma funktion. 
            const realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=9522&timewindow=120';
            const nearbyDeparturesURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/nearbystopsv2.json?key=c47142c042dd4275bc7ee13577796832&originCoordLat=59.202310&originCoordLong=17.638040&maxNo=15&r=2000&products=9';
    
            fetch(realTimeInformationURI)
                .then((resp) => resp.json())
                .then(data => console.log(data));
            fetch(nearbyDeparturesURI)
                .then((resp) => resp.json())
                .then(data => console.log(data));
        }
       

        var thirdDiv = document.createElement("div");
        thirdDiv.className = "thirdDiv";
        document.body.appendChild(thirdDiv);

        // Organizes the headers 
       // var h = ["Fr&aringn h&aringllplats: ", "Linje:", "Mot:", "Om:", "St&oumlrningar p&aring linjen:"];
        function departureContent() {

            var departureTable = document.createElement("table");
            departureTable.className = "departureTable";
            thirdDiv.appendChild(departureTable);

            var headerRow = document.createElement("tr");
            departureTable.appendChild(headerRow);
            /*
            for (var k = 0; k <= 5; j++) {
                headerRow.appendChild(document.createElement("th"));
                //document.getElementsByTagName("th").innerHTML = h[k];
            }
            */
            
        var fromStopHeader = document.createElement("th");
        fromStopHeader.id = "fromStopHeader";
        headerRow.appendChild(fromStopHeader);
        document.getElementById("fromStopHeader").innerHTML = "Fr&aringn h&aringllplats: ";
        
        var lineHeader = document.createElement("th");
        lineHeader.id = "lineHeader";
        headerRow.appendChild(lineHeader);
        document.getElementById("lineHeader").innerHTML = "Linje:";
    
        var destinationHeader = document.createElement("th");
        destinationHeader.id = "destinationHeader";
        headerRow.appendChild(destinationHeader);
        document.getElementById("destinationHeader").innerHTML = "Mot:";
    
        var inTimeHeader = document.createElement("th");
        inTimeHeader.id = "inTimeHeader";
        headerRow.appendChild(inTimeHeader);
        document.getElementById("inTimeHeader").innerHTML = "Om:";
    
        var interferenceHeader = document.createElement("th");
        interferenceHeader.id = "interferenceHeader";
        headerRow.appendChild(interferenceHeader);
        document.getElementById("interferenceHeader").innerHTML = "St&oumlrningar p&aring linjen:";
        
            //Lays out the table where my SL-content will go
            for (var i = 0; i <= 10; i++) {

                var w = departureTable.appendChild(document.createElement("tr"));
                for (var j = 0; j <= 5; j++) {
                    w.appendChild(document.createElement("td"));

                }
            }




        }
        departureContent();
    
   
        

        getDepartures();

    }











 //Här bestäms ordningen i vilket allt är
    topLayout();
    secondRowLayout();
   
    thirdRowLayout();
