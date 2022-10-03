import React from 'react'
import AddCardBtn from './AddCardBtn'
import AddColBtn from './AddColBtn'
import Card from './Card'

function Column({columnTitle,cards}) {


    // Get user column data from database
    // Get user card data from database




  return (

    <div className=' flex flex-row gap-8 mt-5 w-[250px] bg-light-grey h-full rounded-lg'>

    <div >
        <div className='flex justify-between'>
        <h1 className=' text-red-pink-dark mb-4 mt-4 ml-4 font-bold'> • {columnTitle}</h1>

        </div>
        <hr className=' rounded-md mx-5 border-2 border-red-pink'></hr>

        {/* Cards here*/}
        <div className='flex justify-center mt-5 flex-col gap-3 items-center '>

        {cards.map((card) => ( <Card key={card.id} cardId={card.id} cardTitle={card.cardTitle} cardDescription={card.cardText}/>))}
      
      <AddCardBtn name={"Card"} btnName={"+ Add card"}/>
      </div>
    </div>

    </div>


    



  )
}

export default Column