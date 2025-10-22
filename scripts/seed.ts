import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Criar usuários de teste
  const usuarios = [
    {
      nome: 'Ana Silva',
      email: 'ana@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
    {
      nome: 'Pedro Santos',
      email: 'pedro@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
    {
      nome: 'Guilherme Costa',
      email: 'guilherme@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
    {
      nome: 'Augusto Cesar',
      email: 'augusto@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
    {
      nome: 'Maria Oliveira',
      email: 'maria@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
    {
      nome: 'Rebeca Lima',
      email: 'rebeca@empresa.com.br',
      senha: '123456',
      ativo: true,
    },
  ]

  for (const usuario of usuarios) {
    await prisma.usuario.upsert({
      where: { email: usuario.email },
      update: {},
      create: usuario,
    })
  }

  console.log('✅ Usuários criados com sucesso!')
}

main()
  .catch((e) => {
    console.error('❌ Erro ao popular banco:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
