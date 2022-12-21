
  import React from 'react';

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  
    import "./Testing.css"

  function Testing(){
    const notify = () => toast.success('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        });

    return (
        <>
            <div class = "scroll">
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                <div class = "itemscroll">0</div>
                
            </div>
        </>


    );
  }

export default Testing;