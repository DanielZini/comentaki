import React from 'react'
import Time from '../../../Time'

const Comment = ({ comment }) => {
  return (
    <div>
      {comment.content} por: {comment.user.name} em: <Time timestamp={comment.createdAt} />
    </div>
  )
}
export default Comment