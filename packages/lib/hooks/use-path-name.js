import { useContext } from 'react';
import { useIntl } from 'react-intl';
import LayoutContext from '../components/Inject/Context';

const usePathName = () => {
  const context = useContext(LayoutContext);

  const { locale } = useIntl();

  const pathName = context.location.pathname;
  return pathName.replace(`/${locale}`, '').replace(/\//g, '');
};

export default usePathName;
