import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

const reloadPage = (): void => {
  window.location.reload();
};

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Произошла непредвиденная ошибка')}
      <Button onClick={reloadPage}>
        {t('Обновите страницу')}
      </Button>
    </div>
  );
};
