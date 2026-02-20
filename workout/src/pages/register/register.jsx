import { useState } from 'react';
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
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../actions';
import { apiClient } from '../../utils/apiClient';

const registerFormSchema = yup.object().shape({
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
	confirmPassword: yup
		.string()
		.required('Подтвердите пароль')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});

export const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [serverError, setServerError] = useState('');

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(registerFormSchema),
	});

	const onSubmit = ({ login, password }) => {
		apiClient.register(login, password).then(({ error, res }) => {
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

	const formError =
		errors.login?.message ||
		errors.password?.message ||
		errors.confirmPassword?.message;
	const errorMessage = formError || serverError;

	return (
		<AuthContainer>
			<AuthCard>
				<AuthTitle>Регистрация</AuthTitle>
				<AuthSubtitle>Начни свой путь к фитнесу</AuthSubtitle>
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
							placeholder="Минимум 6 символов"
							{...register('password', {
								onChange: () => setServerError(null),
							})}
						/>
					</AuthFormGroup>
					<AuthFormGroup>
						<AuthFormLabel htmlFor="password">
							Повторите пароль
						</AuthFormLabel>
						<AuthFormInput
							type="password"
							id="confirmPassword"
							placeholder="******"
							{...register('confirmPassword', {
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
						Зарегистрироваться
					</AuthPrimaryButton>
				</form>
				<AuthSwitch>
					Уже есть аккаунт? <Link to="/login">Войти</Link>
				</AuthSwitch>
			</AuthCard>
		</AuthContainer>
	);
};
