const CategoriesService = require('../services/category.service');
const ApiError = require('../api-error');

exports.findAll = async (req, res, next) => {
    try {
        const categoriesService = new CategoriesService();
        const document = await categoriesService.findAll();
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.findOne = async (req, res, next) => {
    try {
        const categoriesService = new CategoriesService();
        const document = await categoriesService.findOne(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.create = async (req, res, next) => {
    try {
        const categoriesService = new CategoriesService();
        const document = await categoriesService.create(req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.update = async (req, res, next) => {
    try {
        const categoriesService = new CategoriesService();
        const document = await categoriesService.update(req.params.id, req.body);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}

exports.delete = async (req, res, next) => {
    try {
        const categoriesService = new CategoriesService();
        const document = await categoriesService.delete(req.params.id);
        return res.json(document);
    } catch (err) {
        return next(new ApiError(500, err));
    }
}