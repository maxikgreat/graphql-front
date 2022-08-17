import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { joiResolver } from '@hookform/resolvers/joi';
import { AuthWrapper } from '@pages/Auth/components/AuthWrapper';
import * as Joi from 'joi';
import { useForm } from 'react-hook-form';

interface SignInSchema {
  username: string;
  password: string;
}

const schema = Joi.object<SignInSchema>({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchema>({
    resolver: joiResolver(schema),
  });

  const onSubmit = () => null;

  return (
    <AuthWrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Username"
        error={errors.username?.message}
        {...register('username')}
      />
      <Input
        label="Password"
        error={errors.password?.message}
        type="password"
        {...register('password')}
      />
      <Button type="submit">Sign in</Button>
    </AuthWrapper>
  );
};
