import React from 'react'
import Image from 'next/image'
import styles from './style.module.css'
import { notFound } from 'next/navigation';

async function getPosts(id) {
  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  return response.json();
}

export default async function Page({params}) {
  const { title, body } = await getPosts(params.id);
  
  if(!title) {
    return notFound();
  }

  return (
    <div className={styles.blogContainer}>
      <div className={styles.cardImage}>
        <Image 
          src={`https://picsum.photos/960/400?random=${params.id}`}
          alt={title}
          fill
        />
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p>{body}</p>
    </div>
  )
}
