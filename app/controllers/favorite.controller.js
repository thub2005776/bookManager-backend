const FavoritesService = require('../services/favorite.service');
const ApiError = require('../api-error');

exports.findAll = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.findOne(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findManyByUid = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.findManyByUid(req.params.uid);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findManyByBid = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.findManyByBid(req.params.bid);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.update(req.params.uid, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const favoritesService = new FavoritesService();
        const document = await favoritesService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}