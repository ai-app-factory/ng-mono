import { InjectionToken } from '@angular/core';
import { Auth } from '@angular/fire/auth';

export const AUTH = new InjectionToken<Auth>('Auth');
