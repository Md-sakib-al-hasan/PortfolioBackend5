import jwt, { JwtPayload } from 'jsonwebtoken';
import { TExpiresIn } from './auth.interface';

export const createToken = (
  jwtPayload: { useremail: string; username: string },
  secret: string,
  expiresIn: TExpiresIn,
) => {
  return jwt.sign(jwtPayload, secret, {
    expiresIn,
  });
};

export const verifyToken = (token: string, secret: string) => {
  return jwt.verify(token, secret) as JwtPayload;
};
