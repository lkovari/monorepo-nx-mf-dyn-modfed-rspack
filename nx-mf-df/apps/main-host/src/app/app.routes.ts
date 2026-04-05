import { Type } from '@angular/core';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';

interface RemoteAppComponentModule {
    App: Type<unknown>;
}

export const appRoutes: Route[] = [
    {
        path: 'mf_remote_a',
        loadComponent: () =>
            loadRemoteModule('mf_remote_a', './Component').then(
                (m: RemoteAppComponentModule) => m.App,
            ),
    },
    {
        path: 'mf_remote_b',
        loadComponent: () =>
            loadRemoteModule('mf_remote_b', './Component').then(
                (m: RemoteAppComponentModule) => m.App,
            ),
    },
    {
        path: 'mf_remote_c',
        loadComponent: () =>
            loadRemoteModule('mf_remote_c', './Component').then(
                (m: RemoteAppComponentModule) => m.App,
            ),
    },
    {
        path: '',
        redirectTo: '/mf_remote_a',
        pathMatch: 'full',
    },
];
