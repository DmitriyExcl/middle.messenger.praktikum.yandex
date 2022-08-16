export interface IRoute {
    path: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    component: Function;
}

export interface IPropsRoute {
    rootQuery: string;
    canActivate: () => Promise<boolean>;
    redirectTo: string;
    withId?: boolean;
}
