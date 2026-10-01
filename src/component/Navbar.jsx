import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logoImg from '../assets/logo.png'

function Navbar() {
  return (
    <header>
      <div className="top-area">
        <h1 className="logo">
          <Link to ='/'>
            <img src={logoImg} alt="myplate" />
            <span>MY</span><span>PLATE</span>
          </Link>
        </h1>
      </div>
      <nav className="gnb">
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/meals'>식단관리</NavLink>
        <NavLink to='/tips'>건강팁</NavLink>
        <NavLink to='/about'>MY PLATE</NavLink>

        {/* 
          Link => a / NavLink => Link와 비슷하지만 삼항연산자 사용 가능, 클래스 붙이기 가능
        */}
      </nav>
    </header>
  )
}

export default Navbar