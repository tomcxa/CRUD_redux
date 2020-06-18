import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeService, addService, editService, editField, changeField, cancel, filter
} from './actions/creators';

function App() {
  return (
    <div className="App">
      <AddService />
      <Filter />
      <ListService />
    </div>
  );
}

const Filter = () => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    const { value } = event.target
    dispatch(filter(value))
  }

  return (
    <input name='filter' onChange={handleChange} />
  )
}

const AddService = () => {
  const item = useSelector(state => state.addService)
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (item.id) {
      dispatch(editService(item))
    } else {
      dispatch(addService(item))
    }
    dispatch(cancel())
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    dispatch(changeField(name, value))
  }

  const handleCancel = (event) => {
    dispatch(cancel())
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='title' onChange={handleChange} value={item.title} />
      <input name='price' onChange={handleChange} value={item.price} />
      <button type='submit' >Add</button>
      {item.id && <button type='button' onClick={handleCancel} >Cancel</button>}
    </form>
  )
}

const ListService = () => {
  const items = useSelector(state => state.listService)
  const filter = useSelector(state => state.filterService)
  const dispatch = useDispatch()

  const handleRemove = (id) => {
    dispatch(removeService(id))
  }

  const handleEdit = (item) => {
    dispatch(editField(item))
  }

  const list = () => {
    if (filter) {
      return (
        items.filter(o => o.title.toLowerCase().includes(filter.toLowerCase()))
          .map(o => (
            <li key={o.id}>
              {o.title} {o.price}
              <button onClick={() => handleRemove(o.id)}>Delete</button>
              <button onClick={() => handleEdit(o)}>Edit</button>
            </li>
          )
        )
      )
    }

    return (
      items.map(o => (
        <li key={o.id}>
          {o.title} {o.price}
          <button onClick={() => handleRemove(o.id)}>Delete</button>
          <button onClick={() => handleEdit(o)}>Edit</button>
        </li>
      ))
    )
  }

  return (
    <ul>
      {
        list()
      }
    </ul>
  )
}

export default App;
