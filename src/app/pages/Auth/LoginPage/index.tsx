import { Link } from 'react-router-dom';

import { useAuthControllerScope } from '@controllers/auth';
import { Input, Button, Logo } from '@reactoso-ui';
import { FormattedMessage, useTranslation } from '@translations';
import '../style.scss';

export function LoginPage() {
  const t = useTranslation();
  const auth = useAuthControllerScope();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const onSubmit = () => auth.methods.onLogin({ email, password });
  return (
    <div className="page-wrapper auth-page">
      <div className="auth-title">
        <Link to="/">
          <Logo className="l" />
        </Link>
        <FormattedMessage id="signIn" />
      </div>
      <div className="auth-form">
        <Input id="login-email" label={t('email')} name="email" type={'text'} onChange={onChange} />
        <Input id="login-password" label={t('password')} name="password" type={'password'} onChange={onChange} />
      </div>
      <div className="auth-form-footer">
        <div>
          {t('noAccount')}{' '}
          <Link tabIndex={-1} to="/sign-up">
            {t('signUp')}
          </Link>
        </div>
        <Button onClick={onSubmit}>{t('signIn')}</Button>
      </div>
    </div>
  );
}
