import React, { useState } from 'react'
import { ImPlus } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin7Fill } from "react-icons/ri";

const TODO = () => {

    const[inputdata,setinputdata] = useState("");
    const[items,setitems] = useState([]);
    const[edit,setedit] = useState("");
    const[togglebtn,settogglebtn] = useState(false);


    // addmethod

    const addmethod = ((curElem)=>{
        if(!inputdata){
            alert("fill the items");
        }else if(inputdata && togglebtn){
            setitems(items.map((curElem)=>{
                if(curElem.id === edit){
                    return {...curElem, name:inputdata}
                }
                return curElem;
            }))
            setinputdata("");
            setedit(null);
            settogglebtn(false);
        }
        else{
            const myinputdata = {
                id : new Date().getTime().toString(),
                name : inputdata
            }
            setitems([...items,myinputdata]);
            setinputdata("");
        }
    })

    // edit method 

    const editmethod = (index)=>{
        const eitems = items.find((curElem)=>{
            return curElem.id === index;
        })
        setinputdata(eitems.name);
        setedit(index);
        settogglebtn(true);
    }

// delete method 

const deletemethod = (index)=>{
    const unmatched = items.filter((curElem)=>{
        return curElem.id !== index;
    })

    setitems(unmatched);
}


//Remove All method

const RemoveAll = ()=>{
    setitems([]);
}

   return(

       <div>


<div className="">
  <div className="row g-0">
    <div className="col-md-6 p-5 ">
      <img src="image2.jpg"  className="img-fluid rounded" alt="..." />
      <div>
   
      </div>
    </div>
    <div className="col-md-6">
      <div className="card-body">

       <h3 className='mt-5 title'>To Do List</h3>

          
      <div className='pt-3'>
        
                    <input type='text' className='rounded ps-2' placeholder='✍️ add items...'  value={inputdata} onChange={(event)=> setinputdata(event.target.value)} />
                    {togglebtn ? (<button className='editbtn' onClick={addmethod}><FaEdit/></button>):(<button className='plusbtn' onClick={addmethod}><ImPlus/></button>)}
                    
                 </div>

                {/* showing items */}

                <div className='mt-5'>

                    {items.map((curElem)=>{
                        return (
                    <div key={curElem.id}>
                        <h5 className='p-3'> <span className='text-warning citems'>{curElem.name}</span> <span className='ms-5 text-info' onClick={()=> editmethod(curElem.id)}><FaEdit/></span> <span className='ms-4 text-danger' onClick={ () => deletemethod(curElem.id)}><RiDeleteBin7Fill/></span></h5>
                    </div>
                        )
                    })}
                    
                </div>

                {/* Remve All */}

                <div>
                    <button className='btn btn-outline-danger m-5' onClick={RemoveAll}>Remove All</button>
                </div>
        
      </div>
    </div>
  </div>
</div>


           


             
                
       </div>

   )

   
}

export default TODO
