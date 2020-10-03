import React from 'react';
import Carousel from 'react-elastic-carousel';
// import image1 from '../../assessts/images/banner-1.jpg'
// import image2 from '../../assessts/images/banner-2.jpg'
// import {} from ''

const items = [
      {id: 1, image: '../../assessts/images/banner-1.jpg' },
      {id: 2, image: '../../assessts/images/banner-1.jpg'},
      {id: 3, image: '../../assessts/images/banner-1.jpg'},

]

export default function TopCarousel() {
    return (
        <Carousel>
            {/* {items.map(item => <div key={item.id}>
               <img width="100%" height="100vh" src={item.image} />
                </div>)} */}
                <img width="100%"  src="https://images.unsplash.com/photo-1531104985437-603d6490e6d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img width="100%"  src="https://images.unsplash.com/photo-1531104985437-603d6490e6d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                <img width="100%"  src="https://images.unsplash.com/photo-1531104985437-603d6490e6d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"/>
                
        </Carousel>
    )
}
