import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function PATCH(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const body = await _req.json()
    const { nome, email, senha, ativo } = body ?? {}
    const usuario = await prisma.usuario.update({
      where: { id },
      data: { nome, email, senha, ativo },
      select: { id: true, nome: true, email: true, ativo: true },
    })
    return NextResponse.json(usuario)
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Erro ao atualizar usuário"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const usuario = await prisma.usuario.update({
      where: { id },
      data: { ativo: false },
      select: { id: true, nome: true, email: true, ativo: true },
    })
    return NextResponse.json(usuario)
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Erro ao excluir (inativar) usuário"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
