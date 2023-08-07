import { useState } from 'react'
import Form from './Form'
import { nanoid } from 'nanoid'
import Items from './Items'
import { ToastContainer, toast } from 'react-toastify'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')
  if (list) {
    list = JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
  return list
}

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items))
}

// const defaultList = JSON.parse(localStorage.getItem('list') || '[]') //tis is one liner instead of getLocalStorage in useState we can go with defaultList

const App = () => {
  const [items, setItems] = useState(getLocalStorage())

  const addItem = (itemsname) => {
    const nameItem = {
      name: itemsname,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, nameItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item added')
  }

  const removeItem = (itemId) => {
    const newItem = items.filter((item) => item.id !== itemId)
    setItems(newItem)
    setLocalStorage(newItem)
    toast.success('item removed')
  }

  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form add={addItem} />
      <Items items={items} remove={removeItem} edit={editItem} />
    </section>
  )
}

export default App
