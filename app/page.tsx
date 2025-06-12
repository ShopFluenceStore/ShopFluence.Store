"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Container from '@/components/Container'


const page = () => {
  return (
    <Container>
    <main className='bg-main'>
    <div className='text-2xl font-bold text-red-500'>page</div>
    <Button variant="default">Button</Button>
    <Button variant="destructive">Button</Button>
    <Button variant="outline">Button</Button>
    <Button variant="secondary">Button</Button>
    <Button variant="ghost">Button</Button>
    <Button variant="link">Button</Button>
    <Card>lorem</Card>
    </main>
    </Container>
  )
}

export default page