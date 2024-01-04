import React from 'react'
import './style.css'

//      component: 헤더 레이아웃        //
export default function Header() {

    //      render: 헤더 레이아웃 랜더링        //
  return (
    <div id='header'>
      <div className='header-contrainer'>
        <div className='header-left-box'>
          <div className='icon-box'></div>
          <div className='header-logo'>{'Kangs blog'}</div>
        <div className='header-right-box'></div>
        </div>
      </div>
    </div>
  )
}
