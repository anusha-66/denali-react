/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnPowerSelect } from '../../index'; // src/index.tsx

const getDataList = (value) => object('dataList', value, propsGroupId);

const getCloseMenuOnSelect = (value) => boolean('closeMenuOnSelect', value, propsGroupId);

const getIsClearable = (value) => boolean('isClearable', value, propsGroupId);

const getIsSearchable = (value) => boolean('isSearchable', value, propsGroupId);

export default {
    title: 'Components/DnPowerSelect',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnPowerSelect
            dataList={getDataList([
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
            ])}
        />
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnPowerSelect
                dataList={getDataList([
                    { value: 'bread', label: 'Bread' },
                    { value: 'meat', label: 'Meat' },
                    { value: 'oil', label: 'Oil' },
                    { value: 'icecream', label: 'Ice Cream' },
                    { value: 'cheese', label: 'Cheese' },
                    { value: 'eggs', label: 'Eggs' },
                ])}
                closeMenuOnSelect={getCloseMenuOnSelect()}
                isClearable={getIsClearable()}
                isSearchable={getIsSearchable()}
            />
        </div>
    );
};
