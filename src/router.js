import React from "react";
import { Router, Route, Switch } from "dva/router";
import PrivateRoute from "./components/PrivateRoute";
//该方法打包后会生成多个js文件，一般为1.async.js,2.async.js
import dynamic from "dva/dynamic";
import Login from "./routes/Login";


function RouterConfig({ history ,app}) {
	const IndexPage = dynamic({
		app,
		// models: () => [
		//   import('./models/app'),
		// ],
		component: () => import("./routes/IndexPage"),
	});
	const Manage= dynamic({
		app,
		// models: () => [
		//   import('./models/app'),
		// ],
		component: () => import("./routes/Manage/main"),
	});
	const Login=dynamic({
		app,
		component:()=>import ("./routes/Login")
	});
	return (
		<Router history={history}>
			<Switch>
				<Route path="/"   exact component={IndexPage} />
				<Route path="/login" component={Login} />
				<PrivateRoute path='/manage'  component={Manage}/>
			</Switch>
		</Router>
	);
}

export default RouterConfig;
