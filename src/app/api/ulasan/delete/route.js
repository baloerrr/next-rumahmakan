import { hapusUlasan } from '@/service/data/ulasan'
import { NextResponse } from 'next/server'

export async function DELETE(request) {
  try {
    const { idUlasan } = await request.json()

    const response = await hapusUlasan(idUlasan)

    let json_response = {
      status: 'success',
      data: response,
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
