import { ubahGallery } from '@/service/data/gallery'
import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    const { idGallery, data } = await request.json()

    const response = await ubahGallery(idGallery, data)

    let json_response = {
      status: 'success',
      data: response,
    }
    return new NextResponse(JSON.stringify(json_response), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}