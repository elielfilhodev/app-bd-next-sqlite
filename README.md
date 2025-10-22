# app-bd

Projeto Next.js com Prisma (SQLite) para cadastro de usuários.

## Requisitos

- Node.js 18+
- npm ou pnpm

## Configuração

1. Variáveis de ambiente
   - Arquivo `.env` já contém uma base SQLite local:
     - `DATABASE_URL="file:./dev.db"`

2. Instalar dependências
   - `npm install`

3. Banco de dados
   - Gerar/atualizar Prisma Client e aplicar migrações (opcional, se desejar versionar o schema):
     - `npx prisma generate`
     - `npx prisma migrate dev --name init`

4. Rodar em desenvolvimento
   - `npm run dev`
   - Acesse `http://localhost:3000`

5. Build de produção
   - `npm run build`
   - `npm start`

## Estrutura relevante

- API (CRUD Usuário):
  - `src/app/api/usuarios/route.ts` (GET lista, POST cria)
  - `src/app/api/usuarios/[id]/route.ts` (PATCH atualiza)
  - `src/app/api/usuarios/[id]/toggle/route.ts` (POST alterna ativo)

- Prisma Client:
  - `src/lib/prisma.ts` (singleton para evitar múltiplas instâncias)
  - Schema: `prisma/schema.prisma`

- Páginas:
  - Home: `src/app/page.tsx`
  - Usuários: `src/app/(interna)/usuarios/page.tsx`

- Componentes:
  - Layout/Menu: `src/app/components/templates/Pagina.tsx`, `src/app/components/templates/Menu.tsx`
  - Formulário: `src/app/components/templates/usuario/FormularioUsuario.tsx`

## Fluxo de Uso (Usuários)

1. Acesse `/usuarios`.
2. Preencha Nome, Email e Senha e clique em Salvar para criar.
3. A lista abaixo exibe os usuários com status (Ativo/Inativo).
4. Ações na lista:
   - "Editar": carrega o usuário no formulário para alteração; salve para aplicar.
   - "Ativar/Desativar": alterna o estado do usuário.

## Notas

- Senha está sendo salva em texto puro (somente para fins de exemplo). Em produção, utilize hashing (ex.: bcrypt) e políticas de segurança.
- O ESLint ignora a pasta `src/generated/` para evitar alertas em código gerado do Prisma.

