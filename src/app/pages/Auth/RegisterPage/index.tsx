import React from 'react';
import { Link } from 'react-router-dom';

import '../style.scss';
import { useAuthControllerScope } from '@controllers/auth';
import { Button, Input, Logo } from '@reactoso-ui';
import { FormattedMessage } from '@translations';

export function RegisterPage() {
  const auth = useAuthControllerScope();
  const t = (s) => s;

  const [email, setEmail] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onChange = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (email && firstName && lastName && password && password === confirmPassword) {
      auth.methods.onRegister({ email, firstName, lastName, password });
    }
  };
  return (
    <div className="page-wrapper auth-page">
      <div className="auth-title">
        <Link to="/">
          <Logo className="l" />
        </Link>
        <FormattedMessage id="auth.signUp" />
      </div>
      <div className="auth-form">
        <div className="row">
          <Input
            id="register-firstName"
            label={t('firstName')}
            name="firstName"
            type={'text'}
            value={undefined}
            onChange={onChange}
          />
          <Input
            id="register-lastName"
            label={t('lastName')}
            name="lastName"
            type={'text'}
            value={undefined}
            onChange={onChange}
          />
        </div>
        <Input
          id="register-email"
          label={t('email')}
          name="email"
          type={'text'}
          value={undefined}
          onChange={onChange}
        />
        <div className="row">
          <Input
            id="login-password"
            label={t('password')}
            name="password"
            type={'password'}
            value={undefined}
            onChange={onChange}
          />
          <Input
            id="login-confirmPassword"
            label={t('confirmPassword')}
            name="confirmPassword"
            type={'password'}
            value={undefined}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="auth-form-footer">
        <div>
          {t('alreadyRegistered')}
          <Link tabIndex={-1} to="/login">
            {t('login')}
          </Link>
        </div>
        <Button onClick={onSubmit}>{t('register')}</Button>
      </div>
    </div>
  );
}
