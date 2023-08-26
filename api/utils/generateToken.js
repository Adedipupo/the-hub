import jwt from 'jsonwebtoken'

export const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, { expiresIn: '10m' })
}

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET)
}