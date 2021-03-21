import {
    Switch,
    Route
} from "react-router-dom";

import { Home } from '../../pages/home/Home';
import { ListProducts } from '../../pages/products/ListProducts';
import { PageNotFound } from '../../pages/404/PageNotFound';

export const BodyRoutes = () => {
    return (
        <Switch>
            <Route path="/products">
                <ListProducts />
            </Route>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="*">
                <PageNotFound />
            </Route>
        </Switch>
    );
}