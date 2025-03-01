import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesDetailsPageProps {
    className?: string;
}

const ArticlesDetailsPage = (props: ArticlesDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    return (
        <div className={classNames('', {}, [className])}>
            {t('Articles Details')}
        </div>
    );
};

export default memo(ArticlesDetailsPage);
