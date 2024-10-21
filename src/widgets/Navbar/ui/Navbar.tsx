/* eslint-disable i18next/no-literal-string */
/* eslint-disable max-len */
import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import * as cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui atque perspiciatis magnam necessitatibus ullam optio iste possimus maiores, explicabo repellat in autem minima nulla ad quas veritatis quaerat delectus aliquam!</Modal>
        </div>
    );
};
