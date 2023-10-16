import React from "react";
import user1 from '../../images/user1.png';
import '../../styles/sideBar.css';

/*
 *WHAT HERE? 
  - STATUS
  - ESTADO
 */

export const Info = () => {
    return(
        <>
            <div className="user-image">
                <img src={user1} className="user-photo" />
            </div>  
            <div className="user-info">
                <p>
                    Josue Ernesto Galindo Morales
                    <br/>
                    <strong>STATUS</strong>: Activo
                    <br/>
                    <br/>
                    Estudiante de Maestria en Ingenieria de Software
                </p>
            </div>
        </>
    )
}

export default Info