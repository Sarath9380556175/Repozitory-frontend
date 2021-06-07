import axios from 'axios';
import React from 'react';
import '../src/books.css'
class Books extends React.Component{

    constructor()
    {
        super();
        this.state={
            firstcolumn:[],
            secondcolumn:[],
            thirdcolumn:[]
        }
    }

    componentDidMount()
    {
axios({
    url:'http://localhost:2025/books',
    method:'GET',
    headers:{'content-Type':'application/json'}
})
.then(res=>this.setState({firstcolumn:res.data.book}))


axios({
    url:'http://localhost:2025/books1',
    method:'GET',
    headers:{'content-Type':'application/json'}
})
.then(res=>this.setState({secondcolumn:res.data.book1}))


axios({
    url:'http://localhost:2025/books2',
    method:'GET',
    headers:{'content-Type':'application/json'}
})
.then(res=>this.setState({thirdcolumn:res.data.book2}))

    }


   

    twocolumn=()=>{
        document.getElementById('column1').style.width='50%';
        document.getElementById('column2').style.width='50%';
        document.getElementById('column3').style.width='50%';
        document.getElementById('column4').style.width='50%';

    }

    fourcolumn=()=>{
        document.getElementById('column1').style.width='25%';
        document.getElementById('column2').style.width='25%';
        document.getElementById('column3').style.width='25%';
        document.getElementById('column4').style.width='25%';

    }

    
    render()
    {
        const {firstcolumn,secondcolumn,thirdcolumn}=this.state;
        return(
            
            <div className="header">
               <h1>Image grid</h1>
               <p>click on the button to change the grid view</p>
               <div className="icon">
               <i class="fa fa-th-large" onClick={this.twocolumn}></i>
               <i class="fa fa-th" onClick={this.fourcolumn}></i>
               </div>
        
   <div className="row">
   <div id="column1">
           {firstcolumn.map((item)=>{
               return  <div className="img rounded mb-2">
               <img src={`../${item.Book_image}`} height="200px" className="ml-2 rounded"/>
               <div style={{marginLeft:'30px',fontStyle:'italic',color:'deepskyblue'}} className="mt-3"><b>Title:</b> {item.Book_title}</div>
               <div style={{marginLeft:'30px'}} className="mt-3"><b>Author:</b>  {item.Book_author}</div>
               <div style={{marginLeft:'30px',display:'inline-block'}} className="mt-3"><b>Genre:</b> {item.Book_genre}</div>
               </div>
               
           })}
           </div>
           <div id="column2">
          {secondcolumn.map((item)=>{
               return  <div className="img rounded mb-2">
               <img src={`../${item.Book_image}`} height="200px" width="100%" className="ml-2"/>
               <div style={{marginLeft:'30px',fontStyle:'italic',color:'deepskyblue'}} className="mt-3"><b>Title:</b>{item.Book_title}</div>
               <div style={{marginLeft:'30px'}} className="mt-3"><b>Author:</b>  {item.Book_author}</div>
               <div style={{marginLeft:'30px',display:'inline-block'}} className="mt-3"><b>Genre:</b> {item.Book_genre}</div>
               </div>
               
           })}

           </div>
     
           <div id="column3">
     {thirdcolumn.map((item)=>{
               return   <div className="img rounded mb-2">
               <img src={`../${item.Book_image}`} height="150px" className="ml-2"/>
               <div style={{marginLeft:'30px',fontStyle:'italic',color:'deepskyblue'}} className="mt-3"><b>Title:</b> {item.Book_title}</div>
               <div style={{marginLeft:'30px'}} className="mt-3"><b>Author:</b>  {item.Book_author}</div>
               <div style={{marginLeft:'30px',display:'inline-block'}} className="mt-3"><b>Genre:</b> {item.Book_genre}</div>
               </div>
            
           })}
           </div>

           <div id="column4">
{firstcolumn.map((item)=>{
               return   <div className="img rounded mb-2">
               <img src={`../${item.Book_image}`} height="150px" className="ml-2"/>
               <div style={{marginLeft:'30px',fontStyle:'italic',color:'deepskyblue'}} className="mt-3"><b>Title:</b> {item.Book_title}</div>
               <div style={{marginLeft:'30px'}} className="mt-3"><b>Author:</b> {item.Book_author}</div>
               <div style={{marginLeft:'30px',display:'inline-block'}} className="mt-3"><b>Genre:</b> {item.Book_genre}</div>
               </div>
               
           })}

           </div>
    
            </div>
            </div>
        )
    }
}

export default Books;