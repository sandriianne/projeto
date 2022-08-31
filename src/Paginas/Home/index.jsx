import React from 'react'
import {Link} from 'react-router-dom'
import Menu from '../../Componentes/Menu'
import "./index.css" 

export default function Home() {
  return (
    <div className='estilo'>
       <div className='item'>
            <Link to="/Inicio">
                Inicio
            </Link>
        </div> 


         <div className='item'>
          
            <Link to="/Produto">
                Produto
            </Link>
           
        </div> 

        <div className='item'>
            <Link to="/Carrinho">
                Carrinho
            </Link>
        </div> 

        <div className='item'>
            <Link to="/Contato">
                Contato
            </Link>
        </div> 

        <div className='item'>
            <Link to="/Sobre">
                Sobre
            </Link>
        </div> 
        
       
    </div>
    
  )
}
