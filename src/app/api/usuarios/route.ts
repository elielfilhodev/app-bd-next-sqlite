import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET() {
  const usuarios = await prisma.usuario.findMany({
    where: { ativo: true },
    orderBy: { nome: "asc" },
    select: { id: true, nome: true, email: true, ativo: true },
  })
  return NextResponse.json(usuarios)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { nome, email, senha, ativo } = body ?? {}
    if (!nome || !email || !senha) {
      return NextResponse.json({ error: "Campos obrigatórios: nome, email, senha" }, { status: 400 })
    }
    const usuario = await prisma.usuario.create({
      data: { nome, email, senha, ativo: ativo ?? true },
      select: { id: true, nome: true, email: true, ativo: true },
    })
    return NextResponse.json(usuario, { status: 201 })
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Erro ao criar usuário"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
