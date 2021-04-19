import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from '../views/Home';
import Task from '../views/Task';
import Login from '../views/Login';

export default function Routes (){

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/task" exact component={Task}></Route>
                <Route path="/task/:id" exact component={Task}></Route>
                <Route path="/login" exact component={Login}></Route>
            </Switch>
        </BrowserRouter>
    )
}
