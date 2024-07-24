import { ubahUlasan } from '@/service/data/ulasan'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { idUlasan, data } = await request.json()

    const response = await ubahUlasan(idUlasan, data)

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
