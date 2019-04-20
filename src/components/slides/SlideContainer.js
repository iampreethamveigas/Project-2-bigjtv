import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu';
import SkipPreviousIcon from '@material-ui/icons/NavigateBefore';
import SkipNextIcon from '@material-ui/icons/NavigateNext'

import './App.css';
import HeaderTitle from '../common/HeaderTitle'


import Slide from '../slides/Slides'
const  data  = require('./data.json')

 


export const Menu = (list) => list.map((el,i) => {
    
    const { Name,Sub,initial,Content,imageAlt,image } = el;
     return (
      <Slide
      Main_title={Name}
      Main_subheader={Sub}
      image_alt={imageAlt}
      image={image}
      Main_content={Content}
      initial={initial}
      key={Name}
       />
    );
  });


const Arrow = ({ text, className }) => {
    return (
      <div
        className={className}
      >{text}</div>
    );
  };


const ArrowLeft = {
text:  <SkipPreviousIcon />,
className: 'iconArrow'
};
const ArrowRight = {
  text:  <SkipNextIcon />,
  className: 'iconArrow'
  };

class SlideContent extends React.Component{
    state = {
        selected: 'item1'
      };

    onSelect = key => {
        this.setState({ selected: key });
      }

    render(){

        const { selected } = this.state;
        // Create menu from items
        const menu = Menu(data.data, selected);


       return(
        <div>
          <HeaderTitle titlecolor="black" title="Preachers" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
" />
        <ScrollMenu
          data={menu}
          arrowLeft={Arrow(ArrowLeft)}
          arrowRight={Arrow(ArrowRight)}
          selected={selected}
          onSelect={this.onSelect}
        />
        </div>
    )
    }
}
export default SlideContent