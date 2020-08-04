import preloader from '../../../Assets/loader.gif'
import s from './Preloader.module.css'
import React from 'react'

const Preloader = (props)=>{
  return(
    <div><img src={preloader} className={s.loadingImg}/></div>
  )
}

export default Preloader