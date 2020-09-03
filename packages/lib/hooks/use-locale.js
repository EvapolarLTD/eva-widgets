import { navigate } from 'gatsby';
import { getLocale, setLocale } from '../api/locale';
import usePathName from './use-path-name';

const useLocale = () => {
  const pathName = usePathName();

  return (locale) => {
    const oldLocale = getLocale();

    if (locale === oldLocale) return;

    setLocale(locale);
    navigate(`/${locale}/${pathName}`);
  };
};

export default useLocale;
