/**
 * Copyright 2014 eRealm Sdn.Bhd.
 *
 * Created by dang on 2/08/2014
 */


'use strict';

exports.http403 = function(req, res){
    res.status(403);
    if (req.xhr) {
        res.send({ error: 'Access denial.' });
    }
    else {
        res.render('http/403');
    }
};


exports.http404 = function(req, res){
    res.status(404);
    if (req.xhr) {
        res.send({ error: 'Resource not found.' });
    }
    else {
        res.render('http/404');
    }
};


exports.http500 = function(err, req, res, next){
    res.status(500);
//    // capture an exception
//    if (config.errors) {
//        config.errors.captureError(err);
//    }
    if (req.xhr) {
        res.send({ error: 'Something went wrong.' });
    }
    else {
        console.log(err.stack);
        res.render('http/500');
    }
};