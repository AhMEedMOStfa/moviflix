import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShowDetailsContext } from '../../context/ShowDetailsContext';
import { AiTwotoneStar } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { TrailerContext } from '../../context/TrailerContext';

export default function Details() {
  let {mediatype , id}= useParams();
  let {showDetails , getShowDetails}=useContext(ShowDetailsContext);
  let { setMedia, setMediaId} =useContext(TrailerContext);
  let {genres}=showDetails;
  let sendDataToTrailer=()=>
  {
    setMedia(mediatype);
    setMediaId(id);
  }
  useEffect(()=>{
   getShowDetails(id , mediatype);
  },[])
  

  return (
    <>
     <section className='relative h-500 ' 
     style={{backgroundImage:`url(https://image.tmdb.org/t/p/original${showDetails?.backdrop_path ? showDetails?.backdrop_path:'/pG4LGdxjNBHbsjMKnPWtkRSJcUv.jpg'}` , backgroundPosition:'center',backgroundSize:'cover',backgroundRepeat:'norepeat' }}>
      <div className='absolute z-10 dark-bg top-0 left-0 right-0 bottom-0'>
        <div className="container-80 py-16">
            <div className="flex justify-between">
              <div className='w-1/4'>
              <img className=' w-full rounded' src={`https://image.tmdb.org/t/p/original${showDetails?.poster_path ? showDetails?.poster_path: '/pG4LGdxjNBHbsjMKnPWtkRSJcUv.jpg'}`} alt="" />
              </div>
              <div className='w-2/3'>
                <h2 className="text-5xl my-3 font-extrabold">{showDetails.title}</h2>
                <span className='border rounded   p-1 text-base mr-2'>HD</span>
                <span className='border rounded   p-1 text-base mr-2'>{showDetails.adult > 16 ? '+16':'family'}</span>
                <span className=' text-xl  inline-block '>
                {genres
                ?
                genres.map((genre , i)=>{
                  return <span key={i}>{genre.name?genre.name:'Action'} , </span>
                })
                :''
                } 
                </span>
                <span className=' text-xl  inline-block'> {showDetails.runtime}m </span>
                <div className='my-4'>
                  <span className=' text-xl  inline-block'><AiTwotoneStar className='text-color inline-block ' />{showDetails.vote_average}</span>
                  <button onClick={sendDataToTrailer}>
                    <Link to={`/showdetails/${mediatype}/${id}/trailer`}  className=' text-xl mx-3 hover:text-pink-600 transition-all cursor-pointer inline-block'><BsFillPlayFill className='inline-block '/>Play Trailer</Link>
                  </button>
                  <h3 className='my-6 text-3xl font-semibold'>Overview</h3>
                  <p className='text-lg'>
                  {(showDetails.overview)?showDetails.overview:
                  'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands'
                  }
                  </p>

                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    </>
  )
}