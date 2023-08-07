import { useState } from 'react'
import { toast } from 'react-toastify'

const Form = ({ add }) => {
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItem) {
      toast.error('provide value')
      return
    }
    add(newItem)
    setNewItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2> Grocery Bud - Starter </h2>
      <div className="form-control">
        <input
          type="text"
          value={newItem}
          className="form-input"
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  )
}
export default Form
