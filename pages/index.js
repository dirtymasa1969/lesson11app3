import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='top'>
      <h1>Mr. まさ</h1>
      <Image src="/neko.png" alt="画像" width={500} height={500} />
      <p>スタートアップで働いています。</p>
    </div>
      )
}
