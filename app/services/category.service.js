const { CategoryModel } = require('../models');

class CategoriesService {
    constructor() {
        this.category = CategoryModel;
    }

    data(payload) {
        const values = {
            'name': payload.name,
        }
        Object.keys(values).forEach(
            (key) => values[key] === undefined && delete values[key]
        );
        return values;
    }

    async create(payload) {
        const values = this.data(payload);
        const result = await this.category.create(values);
        return result;
    }

    async findAll() {
        const result = await this.category.find({});
        return result;
    }

    async findOne(id) {
        const result = await this.category.findById(id);
        return result;
    }

    async update(id, data) {
        const values = this.data(data);
        const result = await this.category.findByIdAndUpdate(id, values);
        return result;
    }

    async delete(id) {
        const result = await this.category.findByIdAndDelete(id);
    }
}

module.exports = CategoriesService;