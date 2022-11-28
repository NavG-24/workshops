import { useEffect } from 'react'
import { useState } from 'react'

function Item(props) {
  const { index, item, onRemove, onModify } = props

  const [isEditing, setIsEditing] = useState(false)
  const [editedItem, setEditedItem] = useState('')

  const onEditInputChange = (e) => {
    setEditedItem(e.target.value)
  }

  useEffect(() => {
    setEditedItem(item)
  }, [item])

  return (
    <li>
      {isEditing ? (
        <div>
          <input type='text' value={editedItem} onChange={onEditInputChange} />
          <button
            style={{ marginLeft: 4 }}
            onClick={() => {
              onModify(index, editedItem)
              setIsEditing(false)
            }}
          >
            Apply
          </button>
          <button
            style={{ marginLeft: 4 }}
            onClick={() => {
              setIsEditing(false)
              setEditedItem(item)
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        <div>
          {item}
          <button style={{ marginLeft: 4 }} onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button style={{ marginLeft: 4 }} onClick={() => onRemove(index)}>
            Remove
          </button>
        </div>
      )}
    </li>
  )
}

export default Item
