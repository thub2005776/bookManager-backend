const { favoriteModel } = require('../models');

class FavoritesService {
    constructor() {
        this.book = favoriteModel;
    }

    data(payload) {
        const values = {
            'uid': payload.uid,
            'bid': payload.bid,
            'title': payload.title,
            'img': payload.img,
            'author': payload.author,
            'favorite': payload.favorite,
        }
        Object.keys(values).forEach(
            (key) => values[key] === undefined && delete values[key]
        );
        return values;
    }

    async create(payload) {
        const values = this.data(payload);
        const result = await this.book.create(values);
        return result;
    }

    async findAll() {
        const result = await this.book.find({});
        return result;
    }

    async findManyByUid(uid) {
        const result = await this.book.find({uid: uid});
        return result;
    }

    async findManyByBid(bid) {
        const result = await this.book.find({bid: bid});
        return result;
    }

    async findOne(id) {
        const result = await this.book.findById(id);
        return result;
    }

    async update(uid, data) {
        const values = this.data(data);
        const bid = values.bid;
        const result = await this.book.findOneAndUpdate({uid: uid, bid: bid }, values, { upsert: true });
        return result;
    }

    async delete(id) {
        const result = await this.book.findByIdAndDelete(id);
    }
}

module.exports = FavoritesService;