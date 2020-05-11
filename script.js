
function topLayout() {
    var employeeArr = [0];
    var weatherArr = [0];
    var currentTime;
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


        const timeDate = 'https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm';
        //Gets data from worldtime api
        fetch(timeDate)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Looks like there was a problem. Status Code: ' + response.status);
                        //If the api doesn't work the time used will be a built in clock in javascript
                        function timeApiError() {
                            var d = new Date();
                            document.getElementById("info").innerHTML = d.getDate() + "/" + (d.getMonth() + 1) + " " + d.getHours() + ":" + d.getMinutes();
                        }
                        timeApiError();
                        return;
                    }
                    //Parses data to json
                    response.json().then(function (data) {
                        //For debugging
                        //console.log(data);
                        //console.log(data.datetime);
                        var info = document.createElement("p");
                        info.id = "info";
                        timeDiv.appendChild(info);
                        //For debugging
                        //console.log(data.datetime + data.day_of_week);

                        //Parses to desired format
                        var currentDate = data.datetime.substring(0,10);
                        currentTime = data.datetime.substring(11, 16);
                      //For debugging
                       // console.log(currentDate);
                        //console.log(currentTime);

                        document.getElementById("info").innerHTML = currentTime + "<br>" + currentDate;
                    })
                });


    }


    function getWeather() {

        var weatherDiv = document.createElement("div");
        weatherDiv.className = "weatherDiv";
        topDiv.appendChild(weatherDiv);

        var weatherHeader = document.createElement("p");
        weatherHeader.id = "weatherHeader";
        weatherDiv.appendChild(weatherHeader);

        //This works to get data based om the chosen longitude and latitude
        const smhiUri = 'https://cors-anywhere.herokuapp.com/https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/17.638355/lat/59.202104/data.json';
        //Gets the weather parameters from smhi
        fetch(smhiUri)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }
                    //Parses the response to json
                    response.json().then(function (data) {
                       //For debugging
                       // console.log(data);

                       //Enters the correct place in the resoponsearray
                        var option = data.timeSeries[1].parameters;
                        //For debugging
                        //console.log(option);

                        for (let i = 0; i < option.length; i++) {
                            //Adds the desired information to an array
                            weatherArr.push([option[i].name, option[i].unit, option[i].values[0]]);
     
                        }
                        
                        for (let i = 0; i < weatherArr.length; i++) {
                                //Switches on the corresponding parameterlist from smhi
                                //ToTest! get list of parameters from the api and use this to get the correct casenumber instead of manually having to update it
                                switch (i) {
                                    case 12:
                                        // For debugging: prints the temperatureinformation to the console
                                        console.log(weatherArr[i]);
                                        document.getElementById("weatherHeader").innerHTML = "Dagens v&aumlder: " + "Temp: " + weatherArr[i][2] ;
                                        
                                        break;
                                    case 19:
                                        //Depending on the value of Wsymb2, the case switches
                                       // For debugging: prints the weathersymbolvalue to the console
                                        //console.log(weatherArr[i][2]);
                                        
                                        switch (weatherArr[i][2]) {
                                            case 1:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12110.1518507377!/image/1.png_gen/derivatives/Original_259px/image/1.png' + "')no-repeat bottom left";
                                              
                                                break;
                                            case 2:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.27958.1518507527!/image/2.png_gen/derivatives/Original_259px/image/2.png' + "')no-repeat bottom left";

                                              
                                                break;
                                            case 3:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12111.1518507581!/image/3.png_gen/derivatives/Original_259px/image/3.png' + "')no-repeat bottom left";                                            
                                            
                                                break;
                                            case 4:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12112.1518507666!/image/4.png_gen/derivatives/Original_259px/image/4.png' + "')no-repeat bottom left";                                           
                                               
                                                break;
                                            case 5:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12113.1529310317!/image/5.png_gen/derivatives/Original_259px/image/5.png' + "')no-repeat bottom left";

                                                break;
                                            case 6:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12114.1518507791!/image/6.png_gen/derivatives/Original_259px/image/6.png' + "')no-repeat bottom left";

                                                break;
                                            case 7:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12115.1518507851!/image/7.png_gen/derivatives/Original_259px/image/7.png' + "')no-repeat bottom left";

                                                break;
                                            case 8:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12116.1518507902!/image/8.png_gen/derivatives/Original_259px/image/8.png' + "')no-repeat bottom left";
   
                                                break;
                                            case 9:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12117.1518507966!/image/9.png_gen/derivatives/Original_259px/image/9.png' + "')no-repeat bottom left";
                           
                                                break;
                                            case 10:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12118.1518508455!/image/10.png_gen/derivatives/Original_259px/image/10.png' + "')no-repeat bottom left";
                                  
                                                break;
                                            case 11:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12119.1518508527!/image/11.png_gen/derivatives/Original_259px/image/11.png' + "')no-repeat bottom left";
                                        
                                                break;
                                            case 12:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12120.1518508638!/image/12.png_gen/derivatives/Original_259px/image/12.png' + "')no-repeat bottom left";
                                               
                                                break;
                                            case 13:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12121.1518508814!/image/13.png_gen/derivatives/Original_259px/image/13.png' + "')no-repeat bottom left";
                                       
                                                break;
                                            case 14:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12122.1518508894!/image/14.png_gen/derivatives/Original_259px/image/14.png' + "')no-repeat bottom left";
                                   
                                                break;
                                            case 15:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.12123.1518508957!/image/15.png_gen/derivatives/Original_259px/image/15.png' + "')no-repeat bottom left";
                                  
                                                break;
                                            case 16:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130672.1518509119!/image/16.png_gen/derivatives/Original_259px/image/16.pngg' + "')no-repeat bottom left";
                                         
                                                break;
                                            case 17:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130674.1518509610!/image/17.png_gen/derivatives/Original_259px/image/17.png' + "')no-repeat bottom left";
                        
                                                break;
                                            case 18:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130676.1518509779!/image/18.png_gen/derivatives/Original_259px/image/18.png' + "')no-repeat bottom left";
                                   
                                                break;
                                            case 19:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130678.1518509832!/image/19.png_gen/derivatives/Original_259px/image/19.png' + "')no-repeat bottom left";
                       
                                                break;
                                            case 20:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130680.1518509884!/image/20.png_gen/derivatives/Original_259px/image/20.png' + "')no-repeat bottom left";
                       
                                                break;
                                            case 21:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130682.1518509953!/image/21.png_gen/derivatives/Original_259px/image/21.png' + "')no-repeat bottom left";
                                  
                                                break;
                                            case 22:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130684.1518509991!/image/22.png_gen/derivatives/Original_259px/image/22.png' + "')no-repeat bottom left";
                                         
                                                break;
                                            case 23:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130686.1518510040!/image/23.png_gen/derivatives/Original_259px/image/23.png' + "')no-repeat bottom left";
                                      
                                                break;
                                            case 24:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130688.1518510101!/image/24.png_gen/derivatives/Original_259px/image/24.png' + "')no-repeat bottom left";
                                      
                                                break;
                                            case 25:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130690.1518510154!/image/25.png_gen/derivatives/Original_259px/image/25.png' + "')no-repeat bottom left";
                                      
                                                break;
                                            case 26:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130692.1518510202!/image/26.png_gen/derivatives/Original_259px/image/26.png' + "')no-repeat bottom left";
                                           
                                                break;
                                            case 27:
                                                weatherDiv.style.background = "url('" + 'https://www.smhi.se/polopoly_fs/1.130694.1518510246!/image/27.png_gen/derivatives/Original_259px/image/27.png' + "')no-repeat bottom left";
                                          
                                                break;
                                            default:
                                        
                                        }
                                       
                                        break;
                                 
                                    default:
                               
                                }                         
                        }
                        //For debugging
                        //console.table(weatherArr);
                        //console.log(weatherArr);
                    })
                })    
    }

    
    //Still needs to check updatefrequensy
    function displayEmployees() {
        //div to display Employees
        var employeeDiv = document.createElement("div");
        employeeDiv.className = "employeeDiv";
        topDiv.appendChild(employeeDiv);

        //Header for employeediv
        var employeeHeader = document.createElement("p");
        employeeHeader.id = "employeeHeader";
        employeeDiv.appendChild(employeeHeader);
        document.getElementById("employeeHeader").innerHTML = "Anst&aumlllda p&aring plats";

        //Function to retrieve data from mockApi
        function getEmployees() {
            const employeeURI = 'https://cors-anywhere.herokuapp.com/https://5eac5fba4bf71e00166a0821.mockapi.io/api/v1/Employees';
            employeeArr.length = 0;
            //Gets employees from mockApi
            fetch(employeeURI)
                .then(
                    function (response) {
                        if (response.status !== 200) {
                            console.warn('Looks like there was a problem. Status Code: ' + response.status);
                            return;
                        }
                        //Parsing to json
                        response.json().then(function (data) {
                            for (let i = 0; i < data.length; i++) {
                                employeeArr.push(data[i].firstname);
                            }
                            //For debugging
                            //console.log(employeeArr);
                            //Displays employees in the div
                            for (let i = 0; i < employeeArr.length; i++) {
                                var listItem = document.createElement("p"); 
                                listItem.appendChild(document.createTextNode(employeeArr[i])); 
                                employeeDiv.appendChild(listItem); 
                            };
                        });

                    })

        };
        
        getEmployees();  
    }
     
     
 
    getWeather();
    displayDateTime();
  
    displayEmployees();
}

function thirdRowLayout() {
        var secondDiv = document.createElement("div");
        secondDiv.className = "secondDiv";
    document.body.appendChild(secondDiv);
    var nasaDiv = document.createElement("div");
    nasaDiv.className = "nasaDiv";
    secondDiv.appendChild(nasaDiv);

    var nasaContent = document.createElement("p");
    nasaContent.id = "nasaContent";
    nasaDiv.appendChild(nasaContent);
   
  
        function getNasa() {
            const nasaUri = 'https://cors-anywhere.herokuapp.com/https://api.nasa.gov/planetary/apod?api_key=W5hfRpezPgs3uTgDCv4aK9gMWTG3F3gw5lhWeHi6';
            //Retrieves data from Nasa Api
            fetch(nasaUri)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Looks like there was a problem. Status Code: ' + response.status);
                        //Adds a header if the api doesn't work
                        function nasaError() {
                            var nasaHeader = document.createElement("p");
                            nasaHeader.id = "nasaHeader";
                            nasaDiv.appendChild(nasaHeader);
                            document.getElementById("nasaHeader").innerHTML = "Meanwhile, in space: ";
                        }
                        nasaError();
                        return;
                    }
                   //Parses response to json
                    response.json().then(function (data) {
                        //For debugging
                        //console.log(data);
                        //console.log(data.explanation);

                        //Adds content to the div
                        document.getElementById("nasaContent").innerHTML = data.explanation;
                         //Changes the background in the specific div depending on what is fetched from the api
                        function changeBackground(url) {
                            
                            nasaDiv.style.background = "url('" + url + "')";
                        }
                       
                        changeBackground(data.url);
                    })
                })
    }
        //Executes Nasafunction
        getNasa();    
}



function secondRowLayout() {
    var informationArr = [0];
    var thirdDiv = document.createElement("div");
    thirdDiv.className = "thirdDiv";
    document.body.appendChild(thirdDiv);

    var busStopArr=[0];
    // Organizes the headers 
   

    
         function getDepartures() {
            //funkar bra att göra flera api:anrop från samma funktion. 
           
            const nearbyDeparturesURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/nearbystopsv2.json?key=c47142c042dd4275bc7ee13577796832&originCoordLat=59.202310&originCoordLong=17.638040&maxNo=15&r=2000&products=9';
    
            //Retrieve data
             fetch(nearbyDeparturesURI)
                 .then(
                     function (response) {
                         if (response.status !== 200) {
                             console.warn('Looks like there was a problem. Status Code: ' + response.status);
                             return;
                         }
                         //Parse to json format
                         response.json().then(function (data) {
                             //For debugging
                             //console.log(data);
                             //console.log(data.stopLocationOrCoordLocation[1].StopLocation);
                            
                             //Due to not getting the function to retrieve SiteId and concatenating it with the url properly, this array holds the siteIds in an array that corresponds with the busstopArray 
                             //To Test! get the function to work and then remove the switchcase for getting busstopinformation
                             var siteIdArr = [7604, 7605, 7859, 7602, 7907, 7603, 7616];
                                            /*Sveagatan = 7604
                                          * Ekensbergsgatan=7605
                                          * Algatan=7859
                                          * Rektorsvägen=7602
                                          * Grusåsen=7907
                                          * Kyrkogårdsvägen=7603
                                          * Frejagatan=7616
                                         */
                             for (let i = 0; i < data.stopLocationOrCoordLocation.length; i++) {
                                 //For debugging
                                 //console.log(data.stopLocationOrCoordLocation[i].StopLocation.name);

                                 //Assigns values to the array
                                 busStopArr.push([data.stopLocationOrCoordLocation[i].StopLocation.name, data.stopLocationOrCoordLocation[i].StopLocation.dist, siteIdArr[i]]);
                           
                             }          
                              //For debugging
                             console.table(busStopArr);
                             
               
                             function departureContent() {
                                 var h = ["Fr&aringn h&aringllplats: ", "Linje:", "Mot:", "Om:", "St&oumlrningar p&aring linjen:"];

                                 //Creates a table and appends it to its location in the div
                                 var departureTable = document.createElement("table");
                                 departureTable.className = "departureTable";
                                 thirdDiv.appendChild(departureTable);

                                 //Creates a new row with´5 cells and sets a defaultvalue of headers
                                 //ToTest! Put this section in a loop that iterates the length of h
                                 var row = departureTable.insertRow(0);
                                 row.id = "departureHeader";
                                 var cell0 = row.insertCell(0);
                                 var cell1 = row.insertCell(1);
                                 var cell2 = row.insertCell(2);
                                 var cell3 = row.insertCell(3);
                                 var cell4 = row.insertCell(4);
                                 cell0.innerHTML = h[0];
                                 cell1.innerHTML = h[1];
                                 cell2.innerHTML = h[2];
                                 cell3.innerHTML = h[3];
                                 cell4.innerHTML = h[4];

                                 //Lays out the table where my SL-content will go
                                 for (var i = 0; i < 7; i++) {
                                   
                                     //Creates a new row with´5 cells and sets a defaultvalue
                                     row = departureTable.insertRow(i+1);
                                      cell0 = row.insertCell(0);
                                      cell1 = row.insertCell(1);
                                      cell2 = row.insertCell(2);
                                      cell3 = row.insertCell(3);
                                      cell4 = row.insertCell(4);
                                     cell0.innerHTML = "cell0";
                                     cell1.innerHTML = "cell1";
                                     cell2.innerHTML = "cell2";
                                     cell3.innerHTML = "cell3";
                                     cell4.innerHTML = "cell4";
                                     var j = 0;

                                     //Changes the innerhtml of the first value of each row and inserts nearbyBusstops 
                                     cell0.innerHTML = busStopArr[i + 1][j];

                                     var realTimeInformationURI;
                                     //Switch to determine wich realitimeinformation should be retrieved.i is the loopcounter and corresponds to the array that holds the busstops.
                                     //To Test! Pass busstopArr and InformationArr to a function that joins these to arrays and changes the innerhtml of the cells based on the value of j and i.
                                     switch (i) {
                                         case 0: {
                                             //Information for Sveagatan
                                             realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7604&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                         case 1: {
                                             //Information for Ekensbergsgatan
                                             realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7605&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                         case 2: {
                                             //Information for Algatan
                                             realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7859&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                         case 3: {
                                             //Information for Rektorsvägen
                                             realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7602&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                         case 4: {
                                             //Information for Grusasen
                                             realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7907&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                                }
                                         case 5: {
                                                 //Information for Kyrkogardsvagen
                                                 realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7603&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                         case 6: {
                                                 //Information for Frejagatan
                                                 realTimeInformationURI = 'https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=46f7d5fcda7b4c62b5e38d1df0298634&siteid=7616&timewindow=60&Train=false&Tram=false&Ship=false&Metro=false';
                                             break;
                                         }
                                             default:
                                         
                                         }

                                     //Gets realtimeinformation from SL
                                         fetch(realTimeInformationURI)
                                             .then(
                                                 function (response) {
                                                     if (response.status !== 200) {
                                                         console.warn('Looks like there was a problem. Status Code: ' + response.status);
                                                         return;
                                                     }
                                                     //Formats the data into json
                                                     response.json().then(function (data) {
                                                         // For debugging
                                                         //console.log(data);
                                                         //console.log(data.ResponseData.Buses[0].Destination);
                                                         //console.log(data.ResponseData.Buses[0].LineNumber);
                                                         //console.log(data.ResponseData.Buses[0].DisplayTime);
                                                         //console.log(data.ResponseData.StopPointDeviations);

                                                         //Test to see if manipulation is possible on "undefined"
                                                       /*
                                                         if (data.ResponseData.Buses[0].LineNumber === 'undefined') {
                                                            data.ResponseData.Buses[0].LineNumber = 'Bussen sover, ';
                                                         };
                                      
                                                         if (data.ResponseData.Buses[0].Destination == 'undefined') {
                                                             data.ResponseData.Buses[0].Destination = 'Bussen sover, ';
                                                         } 
                                      
                                                         if (data.ResponseData.Buses[0].DisplayTime == 'undefined') {
                                                             data.ResponseData.Buses[0].DisplayTime = 'I sitt bussgarage';
                                                         } 
                                      
                                                         if (data.ResponseData.StopPointDeviations[0] == 'undefined') {
                                                             data.ResponseData.StopPointDeviations[0] = 'Nothing going on';
                                                         }
                                                        */
                                                                                                         
                                                         cell1.innerHTML = data.ResponseData.Buses[0].LineNumber;                                            
                                                         cell2.innerHTML = data.ResponseData.Buses[0].Destination;
                                                         cell3.innerHTML = data.ResponseData.Buses[0].DisplayTime;
                                                         cell4.innerHTML = data.ResponseData.StopPointDeviations[0];

                                                         informationArr = ([data.ResponseData.Buses[0].LineNumber, data.ResponseData.Buses[0].Destination, data.ResponseData.Buses[0].DisplayTime, data.ResponseData.StopPointDeviations[0]]);
                                                         //For debugging
                                                        // console.log(informationArr);
                                                        //Loop to let the events finish
                                                         k = 0;
                                                         while (k < 20000) { k++ };
                                                         k = 0;
                                                     })
                                                     //For debugging
                                                     // console.log(informationArr);
                                                 })
                                 }
                             }
                             departureContent();
                         })
                     })
             }
        getDepartures();
    }

//Order of the main divs
    topLayout();
secondRowLayout();
thirdRowLayout();
