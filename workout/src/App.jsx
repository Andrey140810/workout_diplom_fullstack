import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import { Header, ProtectedRoute, PublicRoute } from './components';
import {
	Dashboard,
	Login,
	Nutrition,
	Programs,
	Register,
	Statistics,
	Workout,
} from './pages';

export function App() {
	const AppColomn = styled.div``;

	const Content = styled.div`
		text-align: center;
	`;

	return (
		<AppColomn>
			<Header />
			<Content>
				<Routes>
					<Route
						path="/login"
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path="/register"
						element={
							<PublicRoute>
								<Register />
							</PublicRoute>
						}
					/>
					<Route
						path="/dashboard"
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/workout/:level/:week/:day"
						element={
							<ProtectedRoute>
								<Workout />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/programs/:level?"
						element={
							<ProtectedRoute>
								<Programs />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/nutrition"
						element={
							<ProtectedRoute>
								<Nutrition />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/statistic"
						element={
							<ProtectedRoute>
								<Statistics />
							</ProtectedRoute>
						}
					/>
					<Route
						path="/"
						element={<Navigate to="/dashboard" replace />}
					/>
				</Routes>
			</Content>
		</AppColomn>
	);
}
