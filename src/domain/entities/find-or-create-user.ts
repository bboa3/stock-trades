import { FindOrCreateUserDB } from '@domain/Contracts/FindOrCreateUser'
import { prisma } from '@infra/prisma/client'

export const findOrCreateUserDB: FindOrCreateUserDB = async ({ id, name }) => {
  const user = await prisma.user.findUnique({ where: { id } })

  if (user) return { id, name }

  await prisma.user.create({
    data: {
      id,
      name
    }
  })

  return { id, name }
}
