# FrontDeskScreen


 //Tried to make a function that gets the SiteId for each stop however there is an issue due to timing that further needs to be solved with timing the events.    
 /*
    function getSite(busStopArr,i) {
        var idArr = [0];
    var baseUri = 'https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/typeahead.json?key=dd0a334d8d274b119701c246ab1f096d&searchstring=';
    var lastUri = '&stationsonly=True&maxresults=1&type=S';
    //const siteIdURI = 'https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/typeahead.json?key=dd0a334d8d274b119701c246ab1f096d&searchstring=Sveagatan&stationsonly=False&maxresults=1';

        var location;
        var siteId;
        const siteIdURI = baseUri.concat(busStopArr[i][0], lastUri);
        console.log(siteIdURI);
        fetch(siteIdURI)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.warn('Looks like there was a problem. Status Code: ' + response.status);
                        return;
                    }

                    response.json().then(function (data) {
                     
                        //console.log(data);
                        console.log(data.ResponseData[0]);
                        location = data.ResponseData[0].Name;
                        siteId = data.ResponseData[0].SiteId;
                      
                        idArr.push([location, siteId]);
                        // console.log(data.stopLocationOrCoordLocation[1].StopLocation);
                        for (let i = 0; i < data.length; i++) {
                            //Insert what we want to find
                            // console.log(data.ResponseData[i].SiteId);
                        }

                
                    })
                   
                }) 

        console.table(idArr);
       // return siteId;
        
    }
   */