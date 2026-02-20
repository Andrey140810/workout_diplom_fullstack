import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
	AuthCard,
	AuthContainer,
	AuthSubtitle,
	AuthSwitch,
	AuthTitle,
	AuthPrimaryButton,
	AuthErrorMessage,
	AuthFormGroup,
	AuthFormInput,
	AuthFormLabel,
} from '../components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { setUser } from '../../actions';
import { apiClient } from '../../utils/apiClient';

const authFormSchema = yup.object().shape({
	login: yup
		.string()
		.required('Заполните логин')
		.matches(
			/^\w+$/,
			'Неверно заполнен логин. Допускаются только буквы и цифры',
		)
		.min(3, 'Неверно заполнен логин. Минимум 3 символа')
		.max(15, 'Неверно заполнен логин. Максимум 15 символов'),
	password: yup
		.string()
		.required('Заполните пароль')
		.matches(
			/^[\w#%]+$/,
			'Неверно заполнен пароль. Пароль должен содержать буквы, цифры, # и %',
		)
		.min(6, 'Неверно заполнен пароль. Минимум 6 символа')
		.max(30, 'Неверно заполнен пароль. Максимум 30 символов'),
});

export const Login = () => {
	const [serverError, setServerError] = useState(null);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: { login: '', password: '' },
		resolver: yupResolver(authFormSchema),
	});

	const onSubmit = ({ login, password }) => {
		apiClient.authorize(login, password).then(({ error, res }) => {
			if (error) {
				setServerError(`Ошибка запроса: ${error}`);
				return;
			}

			const userData = res?.user || res;
			dispatch(setUser(userData));
			localStorage.setItem('userData', JSON.stringify(userData));
			navigate('/dashboard');
		});
	};

	const formError = errors.login?.message || errors.password?.message;
	const errorMessage = formError || serverError;

	return (
		<AuthContainer>
			<AuthCard>
				<AuthTitle>Вход</AuthTitle>
				<AuthSubtitle>Добро пожаловать обратно</AuthSubtitle>
				{errorMessage && (
					<AuthErrorMessage>{errorMessage}</AuthErrorMessage>
				)}
				<form onSubmit={handleSubmit(onSubmit)}>
					<AuthFormGroup>
						<AuthFormLabel htmlFor="login">Логин</AuthFormLabel>
						<AuthFormInput
							type="text"
							id="login"
							placeholder="Ваш логин"
							{...register('login', {
								onChange: () => setServerError(null),
							})}
						/>
					</AuthFormGroup>
					<AuthFormGroup>
						<AuthFormLabel htmlFor="password">Пароль</AuthFormLabel>
						<AuthFormInput
							type="password"
							id="password"
							placeholder="******"
							{...register('password', {
								onChange: () => setServerError(null),
							})}
						/>
					</AuthFormGroup>
					<AuthPrimaryButton
						type="submit"
						disabled={!!formError}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						Войти
					</AuthPrimaryButton>
				</form>
				<AuthSwitch>
					Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
				</AuthSwitch>
			</AuthCard>
		</AuthContainer>
	);
};
