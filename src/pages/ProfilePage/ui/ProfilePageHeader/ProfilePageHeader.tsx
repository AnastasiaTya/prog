import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import * as cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}

export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        // @ts-ignore
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('Профиль')} />
            {readonly
                ? (
                    <Button theme={ThemeButton.OUTLINE} className={cls.editBtn} onClick={onEdit}>
                        {t('Редактировать')}
                    </Button>
                )
                : (
                    <>
                        <Button theme={ThemeButton.OUTLINE_RED} className={cls.editBtn} onClick={onCancelEdit}>
                            {t('Отменить')}
                        </Button>
                        <Button theme={ThemeButton.OUTLINE} className={cls.saveBnt} onClick={onSave}>
                            {t('Сохранить')}
                        </Button>
                    </>
                )}
        </div>
    );
};
