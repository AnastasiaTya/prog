import React from 'react';
import { useTranslation } from 'react-i18next';

import * as cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.foundPage}>
            {t('Страница не найдена')}
        </div>
    );
};
