import React from 'react';
import { Navigate, Route, RouteProps } from 'react-router-dom';

interface ProtectedRouteProps {
	isAuth: boolean;
	path: string;
	element: JSX.Element;
}

const ProtectedRoute = (props: ProtectedRouteProps) => {
	const { isAuth, element, ...routeProps } = props;
	if (isAuth) {
		return element;
	}

	return <Navigate to='/' />
};

export default ProtectedRoute;