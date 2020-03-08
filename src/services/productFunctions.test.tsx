import React from 'react';
// import { render } from '@testing-library/react';
// import App from './App';
import {
    findById,
    findProductTitle,
    findProductSkus,
    addProductSkuToCart,
    removeProductSkufromCart,
    calculatePrice
} from './productFunctions';

it('correctly finds by id', () => {
    const collection = [{ key: 'value1', id: '123' },{ key: 'value2', id: '456' }];

    expect(findById('123', collection)).toEqual({ key: 'value1', id: '123' });
    expect(findById('456', collection)).toEqual({ key: 'value2', id: '456' });
    expect(findById('789', collection)).toBeUndefined();
});

it('correctly finds product titles', () => {
    const collection = [{ title: 'title1', id: '123' },{ title: 'title2', id: '456' }];

    expect(findProductTitle('123', collection)).toEqual('title1');
    expect(findProductTitle('456', collection)).toEqual('title2');
    expect(findProductTitle('789', collection)).toEqual('Untitled');
});

it('correctly finds product skus', () => {
    const products = [{ id: '123', skus: [{ id: 'abc' }, { id: 'def' }]}, { id: '456', skus: [{ id: 'ghi' }, { id: 'jkl' }]}];

    expect(findProductSkus('123', products, { 'abc': 1 })).toEqual([{ id: 'abc' }]);
    expect(findProductSkus('123', products, { 'abc': 1, 'def': 2 })).toEqual([{ id: 'abc' }, { id: 'def' }]);
});

it('correctly calculates prices', () => {
    expect(calculatePrice(1, 1)).toEqual(1);
    expect(calculatePrice(1, 2)).toEqual(2);
    expect(calculatePrice(10, 10)).toEqual(100);
    expect(calculatePrice(0, 0)).toEqual(0);
});
