/* eslint-disable */

import { useEffect } from 'react';

// General cleanup done, useless checks and code removed.
//
// Adding new feature into existing functionality:
// only type==‘NORMAL’ can have isSecondHand
// so when it is thrue quality has to be decreased by 2
//
// we have 3 cases with NORMAL items:
// - (1) when sellIn <= 0 & quality > 0 quality is decreased -=2 (nothing refactored)
// - (2) when sellIn > 0 & quality = 0 we don`t change it (before when quality is 0 we set it to 0)
// - (3) when sellIn > 0 & quality > 0 we decrease isSecondHand by 2 and else by 1

export function updateQuality(products) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].type == 'TICKETS') {
            if (products[i].sellIn >= 10) {
                products[i].quality += 1;
                products[i].sellIn -= 1;
            } else if (products[i].sellIn < 10 && products[i].sellIn > 1) {
                products[i].quality += 2;
                products[i].sellIn -= 1;
            } else {
                products[i].quality = 0;
                products[i].sellIn = 0;
            }
        } else {
            if (products[i].sellIn > 0) {
                if (products[i].quality > 0) {
                    products[i].quality -= 1;
                    products[i].sellIn -= 1;
                    if (products[i].isSecondHand) {
                        products[i].quality -= 1; // - (3) when sellIn > 0 & quality > 0 we decrease quality by 1 again if current product is second hand
                    }
                } else if (products[i].quality == 0) {
                    products[i].sellIn -= 1; // - (2) when sellIn > 0 & quality = 0 we don`t change quality (before when quality is 0 we set it to 0)
                }
            } else {
                if (products[i].quality > 0) {
                    products[i].quality -= 2; // - (1) when sellIn <= 0 & quality > 0 quality is decreased -=2 (nothing refactored)
                    products[i].sellIn -= 1;
                }
            }
        }

        if (products[i].sellIn < 0) {
            products[i].sellIn = 0;
        }

        if (products[i].quality < 0) {
            products[i].quality = 0;
        }
    }

    return products;
}

export function Task2() {
    useEffect(() => {
        const products = [
            {
                name: 'concert a',
                type: 'TICKETS',
                quality: 30,
                sellIn: 12,
            },
            {
                name: 'concert b',
                type: 'TICKETS',
                quality: 30,
                sellIn: 8,
            },
            {
                name: 'concert c',
                type: 'TICKETS',
                quality: 30,
                sellIn: 1,
            },
            {
                name: 'macbook',
                type: 'NORMAL',
                quality: 30,
                sellIn: 0,
                isSecondHand: false,
            },
            {
                name: 'monitor',
                type: 'NORMAL',
                quality: 30,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'keyboard',
                type: 'NORMAL',
                quality: 0,
                sellIn: 2,
                isSecondHand: false,
            },
            {
                name: 'mouse',
                type: 'NORMAL',
                quality: 20,
                sellIn: 5,
                isSecondHand: true,
            },
        ];

        const updated = updateQuality(products);
        console.log(updated);
    }, []);
    return null;
}
