import React from 'react'
import { useDatabase } from '../../database'
import Comment from './Comment'
import { WrapComments } from './style'

const Comments = () => {
  const data = useDatabase('comments')

  if (!data) {
    return <p>Nenhum comentário enviado até o momento.</p>
  }

  const ids = Object.keys(data)

  if (ids.length === 0) {
    return <p>Carregando...</p>
  }

  return (
    <WrapComments>
      {
        ids.map(id => {
          return (
            <Comment key={id} comment={data[id]} />
          )
        })
      }
    </WrapComments>
  )
}
export default Comments