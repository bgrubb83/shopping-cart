import {
    findById,
    findProductTitle,
    findProductSkus,
    addProductSkuToCart,
    removeProductSkufromCart,
    calculatePrice
} from './productFunctions';

describe('correctly finds by id', () => {
    const collection = [{ key: 'value1', id: '123' }, { key: 'value2', id: '456' }];
    it('when the item exists', () => {
        expect(findById('123', collection)).toEqual({ key: 'value1', id: '123' });
    });

    it('when the item does not exist', () => {
        expect(findById('789', collection)).toBeUndefined();
    });
});

describe('correctly finds product titles', () => {
    const collection = [{ title: 'title1', id: '123' }, { title: 'title2', id: '456' }];
    it('when the product exists', () => {
        expect(findProductTitle('123', collection)).toEqual('title1');
    });

    it('when the product does not exist', () => {
        expect(findProductTitle('789', collection)).toEqual('Untitled');
    });
});

describe('correctly finds product skus', () => {
    const products = [{ id: '123', skus: [{ id: 'abc' }, { id: 'def' }] }, { id: '456', skus: [{ id: 'ghi' }, { id: 'jkl' }] }];
    it('when there is only 1 sku in the cart', () => {
        expect(findProductSkus('123', products, { 'abc': 1 })).toEqual([{ id: 'abc' }]);
    });

    it('when there are multiple skus in the cart', () => {
        expect(findProductSkus('123', products, { 'abc': 1, 'def': 2 })).toEqual([{ id: 'abc' }, { id: 'def' }]);
    });
});

describe('correctly adds products to the cart', () => {
    it('when the cart is empty', () => {
        expect(addProductSkuToCart('123', 'abc', {})).toEqual({ "123": { "abc": 1 } });
    });

    it('when this product is already in the cart', () => {
        expect(addProductSkuToCart('123', 'abc', { "123": { "abc": 1 } })).toEqual({ "123": { "abc": 2 } });
    });

    it('when there are already other products in the cart', () => {
        expect(addProductSkuToCart('456', 'def', { "123": { "abc": 1 } })).toEqual({ "123": { "abc": 1 }, "456": { "def": 1 } });
    });
});

describe('correctly removes products from the cart', () => {
    it('when it is the only product left, with less than 1 in cart', () => {
        expect(removeProductSkufromCart('123', 'abc', { "123": { "abc": 1 } })).toEqual({});
    });

    it('when it is the only product left, with more than 1 in cart', () => {
        expect(removeProductSkufromCart('123', 'abc', { "123": { "abc": 2 } })).toEqual({ "123": { "abc": 1 } });
    });

    it('when there are other products in the cart too', () => {
        expect(removeProductSkufromCart('456', 'def', { "123": { "abc": 1 }, "456": { "def": 1 } })).toEqual({ "123": { "abc": 1 } });
    });

});

describe('correctly calculates prices', () => {
    it('with single digit ints', () => {
        expect(calculatePrice(1, 1)).toEqual(1);
    });

    it('with double digit ints', () => {
        expect(calculatePrice(10, 10)).toEqual(100);
    });

    it('with floats', () => {
        expect(calculatePrice(1.20, 5)).toEqual(6);
    });

    it('with zeros', () => {
        expect(calculatePrice(0, 0)).toEqual(0);
    });
});