
          
    const clearInput = () => {
      const input = document.getElementsByTagName("input")[0];
      input.value = "";
    }
    
    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clearInput);
    
    
    
    document.getElementById('back-to-top-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    
  
    
      