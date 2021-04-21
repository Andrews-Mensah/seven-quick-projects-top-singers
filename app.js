var app = angular.module("Top-Singers",[]);

app.controller("SingersController", function ($scope) {
    $scope.singers = [

        {"pic" : "Stonebwoy.png", "name" : "Stonebwoy", "gender" : "Male", "quality" : "like.png" },
        {"pic" : "Adina.png", "name" : "Adina", "gender" : "Female", "quality" : "like.png" },
        {"pic" : "Bisa Kdei.png", "name" : "Bisa Kdei", "gender" : "Male", "quality" : "dislike.png" },
        {"pic" : "Joe Mettle.png", "name" : "Joe Mettle", "gender" : "Male", "quality" : "like.png" },
        {"pic" : "Kaakie.png", "name" : "Kaakie", "gender" : "Female", "quality" : "like.png" },
        {"pic" : "Kofi Kinaata.png", "name" : "Kofi Kinaata", "gender" : "Male", "quality" : "like.png" },
        {"pic" : "Kwesi Arthur.png", "name" : "Kwesi Arthur", "gender" : "Male", "quality" : "like.png" },
        {"pic" : "MzBel.png", "name" : "MzBel", "gender" : "Female", "quality" : "dislike.png" },
        {"pic" : "Wendy Shay.png", "name" : "Wendy Shay", "gender" : "Female", "quality" : "dislike.png" },
    ]
});