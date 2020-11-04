var db=require('../database');
var myModel=require('../models/MyModel');
module.exports= {
    getFlowers: function (req, res) {
        myModel.getFlowers(function (data) {
            res.render('index', {title: 'My flowers', flowerData: data});
        });
    },
    getFlower: function (req, res) {
        var id = req.params.id;
        myModel.getFlower(id, function (data) {
            res.render('one_flower', {title: 'My flower', flower: data});
        });
    },
    addFlower: function (req, res) {
        res.render('add_form', {title: 'Add flowers'});
    },
    insertFlower: function (req, res) {
        const flowerDetails = req.body;
        myModel.addFlower(flowerDetails, function (data) {
            res.redirect('/');
            console.log("User dat is inserted successfully ");
        });
    },
    deleteFlower: function (req, res) {
        const deleteId = req.params.id;
        myModel.deleteFlower(deleteId, function (data) {
            res.redirect('/');
        });
    },

    editFlower: function (req, res) {
        var id = req.params.id;
        myModel.editFlower(id, function (data) {
            res.render('edit_form', {title: 'Update flowers', flower: data});
        });
    },
    updateFlower: function (req, res) {
        var flower = req.body;
        var id = flower.id;
        myModel.updateFlower(flower, id, function (data) {
            res.redirect('/');
            console.log("Data updated successfully ");
        });
    },
}
