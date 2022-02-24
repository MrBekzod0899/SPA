import React from 'react'
import './index.css'
import logo from '../../asset/brand.jpg'

export default function Header() {
      window.addEventListener('DOMContentLoaded', function () {
        window.addEventListener('scroll', function() {
          const header = document.querySelector('header');
          header.classList.toggle('sticky', window.scrollY > 0)
        })
        const menuBtn = document.querySelector('.menu-btn')
        const navigation = document.querySelector('.navigation')
        const navigationItems = document.querySelectorAll('.navigation a')
      
        menuBtn.addEventListener('click', () => {
          menuBtn.classList.toggle('active')
          navigation.classList.toggle('active')
        })
      
        navigationItems.forEach(navItem => {
          navItem.addEventListener('click', () => {
            menuBtn.classList.remove('active')
            navigation.classList.remove('active')
          })
        })
      
        const scrollBtn = document.querySelector('.scrollToTop-btn')
        window.addEventListener('scroll', () => {
          scrollBtn.classList.toggle('active', window.scrollY > 500)
        })
        
        scrollBtn.addEventListener('click', () => {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        })
      
        window.addEventListener('scroll', () => {
          let reveals = document.querySelectorAll('.reveal')
      
          for(let i = 0; i< reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 50;
      
            if(revealTop < windowHeight - revealPoint) {
              reveals[i].classList.add('active')
            }
          }
        })
      })

     const activeBtn=()=>{
      const navigation = document.querySelector('.navigation')
      const menuBtn = document.querySelector('.menu-btn')
      menuBtn.classList.toggle('active')
      navigation.classList.toggle('active')
     }

      
    return (
        <>
            <div className="scrollToTop-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <header>
                <a href="#!" className="brand">
                  <img style={{width:'60px',height:'60px',backgroundColor:'transparent'}} src={logo} alt="logo"/>
                  <span>Fresh Food</span>
                </a>
                <div onClick={activeBtn} className="menu-btn"></div>
                <div className="navigation">
                    <a href="#main">home</a>
                    <a href="#menu">menu</a>
                    <a href="#stuff">stuff</a>
                    <a href="#order">order</a>
                    <a href="#contact">Contact</a>
                    <a href="#login">Sign In</a>
                </div>
            </header>
        </>

    )
}
