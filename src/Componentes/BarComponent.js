import React from 'react';
import '../Componentes/style.css'


class BarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            bannerCantidad:3
        }
    }

    changeNumber=(props)=>{
        if (props.bannerCantidad=3){
            alert('funciona');
        }
    }

    imagenesBanner=(props)=>{
        let imagenes=[''];
        
        for (var i=1; i<=3; i++){
            imagenes.push(<img src={"../Componentes/picBanner/plano.JPG"}/>);
            console.log(imagenes);            
        }
    }

    render (){
        return(
            <div className="contBanner">
                <div className="imagen imagenVista" onClick={this.changeNumber}></div>
            </div>
        );
    }
}

export default BarComponent;