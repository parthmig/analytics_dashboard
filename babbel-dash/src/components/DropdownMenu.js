import React, { Component } from 'react'

export class DropdownMenu extends Component {
    constructor(){
        super();
       
        this.state = {
              displayMenu: false,
            };
       
         this.showDropdownMenu = this.showDropdownMenu.bind(this);
         this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
       
       };
       
        showDropdownMenu(event) {
           event.preventDefault();
           this.setState({ displayMenu: true }, () => {
           document.addEventListener('click', this.hideDropdownMenu);
           });
         }
       
        hideDropdownMenu() {
            this.setState({ displayMenu: false }, () => {
                document.removeEventListener('click', this.hideDropdownMenu);
           });
       
         }
    render() {
        function handleClick(e) {
            e.preventDefault();
            console.log('The link was clicked.');
          }
        return (
            <div  className="dropdown" style = {{background:"red",width:"200px"}} >
            <div className="button" onClick={this.showDropdownMenu}> Choose Age Group </div>

            { this.state.displayMenu ? (
            <ul>
            <li><a className="active" href="#17" onClick={handleClick}>17 below</a></li>
            <li><a href="#18">18 - 24</a></li>
            <li><a href="#25">25 - 34</a></li>
            <li><a href="#35">35 - 44</a></li>
            <li><a href="#45">45 - 54</a></li>
            <li><a href="#55">55 - 64</a></li>
            </ul>
            ):
            (
                null
            )
        }

       </div>
        )
    }
}

export default DropdownMenu
