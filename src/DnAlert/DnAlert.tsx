/**
 * Copyright 2020, Verizon Media
 * Licensed under the terms of the MIT license. See accompanying LICENSE.md file for terms.
 */

import React from 'react';
import classnames from 'classnames';
import { DnIcon } from '../DnIcon';

export const DnAlert: React.FC<DnAlertProps> = ({
    icon,
    title,
    context,
    status,
    isBlock,
    className,
    ...rest
}: DnAlertProps) => {
    return (
        <div
            className={classnames(
                'alert',
                {
                    [`is-${status}`]: status,
                    [`is-block`]: isBlock,
                },
                className,
            )}
            {...rest}
        >
            <DnIcon icon={icon} />
            <div>
                <h5>{title}</h5>
                {context ? <p>{context}</p> : ''}
            </div>
            <span className="link close is-secondary">
                <DnIcon className="is-sub" icon="close" />
            </span>
        </div>
    );
};

export enum DnAlertStatus {
    default = 'default',
    info = 'info',
    warning = 'warning',
    success = 'success',
    danger = 'danger',
}

export interface DnAlertProps {
    icon: string;
    title: string;
    context?: string;
    status?: DnAlertStatus;
    isBlock?: boolean;
    className?: string;
}

DnAlert.defaultProps = {
    context: undefined,
    status: DnAlertStatus.default,
    isBlock: false,
    className: undefined,
};
