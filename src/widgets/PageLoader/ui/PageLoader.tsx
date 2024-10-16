import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import * as cls from './PageLoader.module.scss';

interface PageLoaderProp {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProp) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
