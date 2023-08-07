import { useState } from 'react'

const Singlritem = ({ item, removeItem, edit }) => {
  //   const [isChecked, setIsChecked] = useState(item.completed)

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => edit(item.id)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: item.completed && 'line-through',
        }}
      >
        {item.name}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  )
}
export default Singlritem
