import getDataTentangKamiAll  from '@/service/data/tentangKami'
import { NextResponse } from 'next/server'

export async function GET(request) {
  try {
    const json = await getDataTentangKamiAll()

    let json_response = {
      status: 'success',
      data: json,
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
