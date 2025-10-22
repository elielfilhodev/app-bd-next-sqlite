import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  try {
    const current = await prisma.usuario.findUnique({ where: { id } })
    if (!current) return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
    const updated = await prisma.usuario.update({
      where: { id },
      data: { ativo: !current.ativo },
    })
    return NextResponse.json(updated)
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Erro ao alternar usuário"
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
