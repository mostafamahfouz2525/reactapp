import React, { Component } from 'react';
import { Container,Row, Col } from 'reactstrap';
import CardInner from './CardInner';

// images 

import devgrub from '../../assets/images/devgrub.png';
import evverest from '../../assets/images/evverest.png';
import youtube from '../../assets/images/youtube.png';


class Cards extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Dev Grub',
                    subTitle: 'The cookbook for developers',
                    imgSrc: devgrub,
                    link: 'https://devgrub.com',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    imgSrc: youtube,
                    link: 'https://www.youtube.com/channel/UCxSITxL2JbF229OGCqieVZw',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: evverest,
                    link: 'https://github.com/garrettlove8/evverest',
                    selected: false
                },
            ]
        }
    }


    handleCardsClick = (id,card) =>
    {
        let items = [...this.state.items];
        items[id].selected  = items[id].selected ? false : true;
        items.forEach(item =>{
            if(item.id !== id)
            {
                items.selected = false;
            }
        })

        this.setState({
            items
        })

        
    }

    addItems = (items)=>
    {
        return items.map((item)=>{
            return <CardInner item={item} onClick={e => this.handleCardsClick(item.id,e)} key={item.id} />
        })
    }

    render()
    {
        return (
      
            <div>
                <Row className="d-flex justify-content-around">
                   
                        {this.addItems(this.state.items)}
                  
                </Row>
            </div>
    
        )
    }
    
}

export default Cards;