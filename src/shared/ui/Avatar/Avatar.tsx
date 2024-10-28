import React, { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import * as cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string
    alt?: string
    size?: number
}

export const Avatar = (props: AvatarProps) => {
    const {
        src, alt, className, size,
    } = props;

    const styles = useMemo<CSSProperties>(() => ({
        width: size || 100,
        height: size || 100,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            className={classNames(cls.avatar, {}, [className])}
            style={styles}
        />
    );
};
