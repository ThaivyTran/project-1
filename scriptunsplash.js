var APIKey = "685Z0EKDM0JXimMnK972KqgRXFVYYIR5gnD45Kw2HNg";

var requestUrl = "https://api.unsplash.com/search/photos?page=1&query=tacos&client_id=685Z0EKDM0JXimMnK972KqgRXFVYYIR5gnD45Kw2HNg"

//API call for taco pics 
fetch(requestUrl)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data)
        var carousel = document.querySelector(".carousel");
        for (let i = 0; i < data.results.length; i++) {
            console.log(data.results[i].urls.regular);

       
        var tacoPicLink = document.createElement(`a`);
        tacoPicLink.classList.add("carousel-item");
        tacoPicLink.setAttribute("href", carousel);

        var tacoPicImg = document.createElement(`img`);
        tacoPicImg.setAttribute("src", data.results[i].urls.regular)
        tacoPicImg.setAttribute("style", "height: fit-content");

        tacoPicLink.append(tacoPicImg);
        carousel.append(tacoPicLink);

        }

    })
    .then(function () {
        $('.carousel').carousel();
        setInterval(function () {
            $('.carousel').carousel('next');
        }, 5000);
    })
    .catch(function (err) {
        console.error(err);
    });
