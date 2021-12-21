import React from 'react'
import CollectionCard from './CollectionCard'
import './KittyList.css'

const KittyList = ({kittyListData, setSelectedCard, setFlag}) => {


const select = (id) => {
    setFlag('kitty')
    setSelectedCard(id)
}

    return (
        <div className="kittyList">
        {kittyListData.map((kitty) => (
          <div onClick={() => select(kitty.token_id) }>
            <CollectionCard
              key={kitty.token_id}
              id={kitty.token_id}
              name={kitty.name}
              traits={kitty.traits}
              image={kitty.image_original_url}
            />
          </div>
        ))}
      </div>
    )
}

export default KittyList
