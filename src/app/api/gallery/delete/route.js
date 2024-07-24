import { hapusGallery } from '@/service/data/gallery'
import { NextResponse } from 'next/server'

export async function DELETE(request) {
  try {
    const { idGallery } = await request.json()

    const response = await hapusGallery(idGallery)

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