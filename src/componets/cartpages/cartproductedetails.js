import React from 'react'

const Cartproductedetails = () => {
  const productdetails = [
    {
      details: "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in. Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet, et molestie urna ut."
    },
    {
      details: "Take calls and reply to texts. Id aliquam felis a egestas mi diam erat eu habitasse. Suscipit tincidunt sodales mauris ac, sed. Tempus, lacus, consectetur neque, et. Vitae sapien, suspendisse eget maecenas sit pulvinar lectus. Tristique leo sit velit interdum vel. Donec non vitae quam est consequat tortor etiam in in. Elementum condimentum dis tortor ipsum duis amet, non. A mauris amet, et molestie urna ut."
    },
    {
      details: " Felis, eros varius molestie amet, quisque potenti pharetra aenean. Habitant morbi vehicula cras urna et sit hendrerit nunc aenean. In arcu, egestas tincidunt sem vitae suscipit nisl interdum. Aliquet sed in sit tellus lacus eu dolor vitae sed. Phasellus morbi aliquam sit in nulla consequat. Ut pretium sed nam rutrum cursus nisi felis cursus vestibulum. Sagittis platea venenatis at nibh tellus purus urna. Ultricies mauris scelerisque dictum diam aliquet urna elementum. Aliquam tortor egestas nisi placerat odio aliquet amet, rhoncus. Pellentesque magna vestibulum vivamus pulvinar consectetur diam libero ornare.."
    }
  ]
  return (
    <>
      <div className=" container products-details">
        <h2 className='common-20-1'>Product Details</h2>
        {
          productdetails.map((item)=>{
            return(
              <>
              <p className='common-16-2' >
                {item.details}
              </p>
              </>
            )
          })

        }
      </div>
    </>
  )
}

export default Cartproductedetails