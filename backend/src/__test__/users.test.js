import { describe, expect, test } from '@jest/globals'
import { createUser } from '../services/users'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

describe('User creation', () => {
  test('should create a user with a hashed password', async () => {
    const userData = { username: 'jdvalencir', password: 'securepassword' }
    const createdUser = await createUser(userData)

    expect(createdUser._id).toBeInstanceOf(mongoose.Types.ObjectId)
    expect(createdUser.username).toBe(userData.username)

    const isPasswordValid = await bcrypt.compare(
      userData.password,
      createdUser.password,
    )
    expect(isPasswordValid).toBe(true)
  })
})
