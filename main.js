// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var forEach = function(arr, func){
  for (var i = 0; i < arr.length; i++) {
    func(arr[i], i, arr)
  }
}

// var promise = $.get('https://randomuser.me/api/?results=12')


$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});


(function () {
    'use strict';

    $.getJSON('https://randomuser.me/api/?results=12').then(function(serverRes){
      console.log(serverRes)

       var userInfoContainer = document.querySelector('.info-container')
       var userObjList = serverRes.results
       

      var randomUserInfo = '' ;
      forEach(userObjList, function(userObj){
       var profPic = userObj.picture.large;
       var fullName = userObj.name.first + " " + userObj.name.last;
       var usrEmail = userObj.email;
       var adrTop = userObj.location.street;
       var adrBottom = userObj.location.city + ' ' + userObj.location.state + ' ' + userObj.location.postcode;
       var usrPhone = userObj.phone;
       var usrCell = userObj.cell;
    
       var usersDiv = '<div class = "random-user">'
       usersDiv += '<img src= ' + profPic + '>'
       usersDiv += '<h2>' + fullName + '</h2>'
       usersDiv += '<p class ="usrEmail">' + usrEmail + '</p>'
       usersDiv += '<p class = "adrTop">' + adrTop + '</p>'
       usersDiv += '<p class = "adrBottom">' + adrBottom + '</p>'
       usersDiv += '<p class = "usrPhone">' + usrPhone + '</p>'
       usersDiv += '<p class = "usrCell">' + usrCell + '</p>'
       usersDiv += '</div>'
       

      randomUserInfo += usersDiv 
    })


    console.log(userInfoContainer)
    userInfoContainer.innerHTML = randomUserInfo;
  //  userInfoContainer.innderHTML = "<img src = " + varforImage + '>'
    })

})();