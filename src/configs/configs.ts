import dotenv from 'dotenv';
import { CookieOptions } from 'express';
import { SessionOptions } from 'express-session';
import { SignOptions } from 'jsonwebtoken';

dotenv.config({ path: '.env.development.local' });

export const CONFIG_CORS = {
  origin: ['https://wz6lg1mk-3000.use.devtunnels.ms', 'http://localhost:3000'],
  credentials: true
};

export const SERVER_CONFIG = {
  port: process.env.PORT ?? 8080,
  logger: true
};

export const CONFIG_SESSION: SessionOptions = {
  secret: process.env.SECRET_SESSION ?? 'secret',
  name: 'sessionId',
  resave: true,
  rolling: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'strict',
    maxAge: 7200000,
    priority: 'high'
  }
};

export const CONFIG_COOKIE_TOKEN: CookieOptions = {
  secure: false,
  httpOnly: true,
  sameSite: 'strict',
  maxAge: 7200000,
  priority: 'high'
};

export const CONFIG_TOKEN: SignOptions = {
  expiresIn: 7200
};

export default {
  CONFIG_CORS,
  CONFIG_TOKEN,
  CONFIG_SESSION,
  CONFIG_COOKIE_TOKEN,
  SERVER_CONFIG
};
