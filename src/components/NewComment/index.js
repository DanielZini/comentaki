import React, { useState, useContext } from 'react'
import { useDatabasePush } from '../../database'
import firebase from '../../firebase'
import { AuthContext } from '../../auth'
import { WrapCommentForm, TextArea, Button } from './style'

const NewComment = () => {
  const [, save] = useDatabasePush('comments')
  const [comment, setComment] = useState('')

  const auth = useContext(AuthContext)

  if (auth.user === null) {
    return null
  }

  const { displayName } = auth.user
  const [alternativeDisplayName] = auth.user.email.split('@')

  const createComment = () => {
    if (comment !== '') {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      })
      setComment('')
    }
  }

  return (
    <WrapCommentForm>
      <TextArea value={comment} onChange={evt => setComment(evt.target.value)} cols="30" rows="10" className="form-control" />
      <div className="text-center">
        <Button onClick={createComment}>Comentar</Button>
      </div>
    </WrapCommentForm>
  )
}

export default NewComment