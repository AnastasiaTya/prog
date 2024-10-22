import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import * as cls from './LoginForm.module.scss';

export const LoginForm = () => {
    const { t } = useTranslation();
    return (
        <div className={cls.loginForm}>
            <Input type="text" className={cls.input} placeholder={t('Введите имя')} autofocus />
            <Input type="text" className={cls.input} placeholder={t('Введите пароль')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
