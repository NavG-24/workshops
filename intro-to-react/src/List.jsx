import { useState } from 'react'
import Item from './Item'

function List() {
  const [items, setItems] = useState([])
  const [addItemText, setAddItemText] = useState('')

  const onAddItem = (e) => {
    e.preventDefault()

    setItems((previousItems) => [...previousItems, addItemText])
    setAddItemText('')
  }

  const onItemInputChange = (e) => {
    setAddItemText(e.target.value)
  }

  const onItemModify = (index, newValue) => {
    setItems((previousItems) => {
      const newItems = [...previousItems]
      newItems[index] = newValue
      return newItems
    })
  }

  const onItemRemove = (index) => {
    setItems((previousItems) => previousItems.filter((item, i) => i !== index))
  }

  return (
    <div style={{ padding: 30 }}>
      <form style={{ display: 'flex', gap: 10 }} onSubmit={onAddItem}>
        <label htmlFor='add-item-input'>Add To-Do item</label>
        <input
          type='text'
          id='add-item-input'
          value={addItemText}
          onChange={onItemInputChange}
        />
        <button type='submit'>Add!</button>
      </form>

      <h2>To-Do List</h2>
      <ul>
        {items.map((item, i) => (
          <Item
            key={i}
            index={i}
            item={item}
            onModify={onItemModify}
            onRemove={onItemRemove}
          />
        ))}
      </ul>
    </div>
  )
}

export default List
