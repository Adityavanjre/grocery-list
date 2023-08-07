import Singlritem from './Singlritem'

const Items = ({ items, remove, edit }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <Singlritem
            key={item.id}
            item={item}
            removeItem={remove}
            edit={edit}
          />
        )
      })}
    </div>
  )
}
export default Items
