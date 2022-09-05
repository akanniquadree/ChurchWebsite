import react , {useState} from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Topbar from '../../Component/Topbar/Topbar';
import {Link} from "react-router-dom"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"
import Footer from '../../Component/Footer/Footer';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(false)
  console.log(itemData)
  return (
    <>
        <Topbar/>
         
            <div className="eventList">
                <div className="eventListTop">
                    <h1>Gallery</h1>
                    <div style={{display:"flex", marginTop:"15px", justifyContent:"center"}}>
                        <Link to="/" className="lik">Home</Link>
                        <p>Gallery</p>
                    </div>
                </div>
                <div className="eventListsearch">
                  <div className="eventListDate" style={{width:"80%"}}>
                    <ImageList
                    sx={{ width: "100%"}}
                    variant="quilted"
                    cols={4}
                    rowHeight={200}
                    >
                      {itemData.map((item, index) => (
                
                          <ImageListItem key={item.img} cols={pattern[index - Math.floor(index/pattern.length) * pattern.length].cols} 
                          rows={pattern[index - Math.floor(index/pattern.length) * pattern.length].row}>
                          <img
                              {...srcset(item.img, 200, pattern[index - Math.floor(index/pattern.length) * pattern.length].row, pattern[index - Math.floor(index/pattern.length) * pattern.length].cols)}
                              alt={item.title}
                              loading="lazy"
                              onClick={()=>{setPhotoIndex(index);setIsOpen(true)}}
                          />
                          </ImageListItem>
                      ))}
                    </ImageList>
                    {
                      isOpen &&(
                        <Lightbox
                          mainSrc={itemData[photoIndex]?.img}
                          nextSrc={itemData[(photoIndex + 1)%itemData.length]?.img}
                          prevSrc={itemData[(photoIndex + itemData.length -1)%itemData.length]?.img}
                          onCloseRequest={()=>setIsOpen(false)}
                          onMoveNextRequest={()=>setPhotoIndex((photoIndex + 1)%itemData.length)}
                          onMovePrevRequest={()=>setPhotoIndex((photoIndex + itemData.length - 1)%itemData.length)}
                        />
                      )
                    }
                    </div>
                  </div>
              </div>
              <Footer/>
    </>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil'
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern'
  },
];

const pattern = [
  {
    row:2,
    cols:2
  },
  {
    row:1,
    cols:1
  },
  {
    row:1,
    cols:1
  },
  {
    row:1,
    cols:2
  },
  {
    row:1,
    cols:2
  },
  {
    row:2,
    cols:2
  },
  {
    row:1,
    cols:1
  },
  {
    row:1,
    cols:1
  },
]