/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { getThemeClassName, propsGroupId } from '../../../.storybook/storybook-utils';
import { DnTable, DnTableDataPositions, DnTableSortDirections } from '../../index'; // src/index.tsx

const getIsStriped = () => boolean('isStriped', false, propsGroupId);

const getIsCards = () => boolean('isCards', false, propsGroupId);

const getIsFrozen = () => boolean('isFrozen', false, propsGroupId);

const getIsMono = () => boolean('isMono', false, propsGroupId);

const getIsSorted = () => boolean('isSorted', false, propsGroupId);

const getSortDirection = () =>
    select('sortDirection', DnTableSortDirections, DnTableSortDirections.default, propsGroupId);

const getPosition = () => select('position', DnTableDataPositions, DnTableDataPositions.default, propsGroupId);

export default {
    title: 'Components/DnTable',
    decorators: [withKnobs],
};

export const Default = () => {
    return (
        <DnTable>
            <DnTable.Header>
                <DnTable.HeaderCell>Date</DnTable.HeaderCell>
                <DnTable.HeaderCell>Time</DnTable.HeaderCell>
                <DnTable.HeaderCell>User</DnTable.HeaderCell>
                <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
            </DnTable.Header>
            <DnTable.Body>
                <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                <DnTable.BodyCell>Admin</DnTable.BodyCell>
                <DnTable.BodyCell>jira123</DnTable.BodyCell>
            </DnTable.Body>
            <DnTable.Footer>
                <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                <DnTable.BodyCell>Admin</DnTable.BodyCell>
                <DnTable.BodyCell>jira123</DnTable.BodyCell>
            </DnTable.Footer>
        </DnTable>
    );
};

export const Playground = () => {
    return (
        <div className={getThemeClassName()}>
            <DnTable isStriped={getIsStriped()} isCards={getIsCards()} isFrozen={getIsFrozen()}>
                <DnTable.Header>
                    <DnTable.HeaderCell position={getPosition(DnTableDataPositions.right)}>Date</DnTable.HeaderCell>
                    <DnTable.HeaderCell isMono={getIsMono()}>Time</DnTable.HeaderCell>
                    <DnTable.HeaderCell
                        isSorted={getIsSorted()}
                        sortDirection={getSortDirection(DnTableSortDirections.ascend)}
                    >
                        User
                    </DnTable.HeaderCell>
                    <DnTable.HeaderCell>Role</DnTable.HeaderCell>
                    <DnTable.HeaderCell>Cause</DnTable.HeaderCell>
                </DnTable.Header>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Body>
                    <DnTable.HeaderCell>04/14/2017</DnTable.HeaderCell>
                    <DnTable.BodyCell>19:34 PDT</DnTable.BodyCell>
                    <DnTable.BodyCell>yby.jupiter</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Body>
                <DnTable.Footer>
                    <DnTable.HeaderCell>
                        <a href="#footer">Footer</a>
                    </DnTable.HeaderCell>
                    <DnTable.BodyCell>
                        <a href="#greyList">pes.acl.greylist</a>
                    </DnTable.BodyCell>
                    <DnTable.BodyCell>Foo Turansky</DnTable.BodyCell>
                    <DnTable.BodyCell>Admin</DnTable.BodyCell>
                    <DnTable.BodyCell>jira123</DnTable.BodyCell>
                </DnTable.Footer>
            </DnTable>
        </div>
    );
};
