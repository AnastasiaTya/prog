import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

import { useTranslation } from 'react-i18next';

export const BugButton = () => {
    const [error, setError] = useState(false);
    const throwFunk = () => setError(true);
    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={throwFunk}
        // eslint-disable-next-line i18next/no-literal-string
        >
            {t('Пробросить ошибку')}
        </Button>
    );
};
