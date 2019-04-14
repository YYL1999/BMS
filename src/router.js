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
  const Login = dynamic({
		app,
		// models: () => [
		//   import('./models/app'),
		// ],
		component: () => import("./routes/Manage"),
	});
	return (
		<Router history={history}>
			<Switch>
				<Route path="/"   exact component={IndexPage} />
				<Route path="/manage" component={Login} />
				{/* <PrivateRoute path='/'  component={IndexPage}/> */}
			</Switch>
		</Router>
	);
}

export default RouterConfig;
