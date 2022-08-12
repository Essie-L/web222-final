window.onload = function() {
    fetch('https://reqres.in/api/users?page=1').then(function(res) {
                res.json().then(function(data) {
                    console.log('the fetched data', data);
                    
                    for(i=0;i<data.data.length;i++) {
                        document.querySelector('#card-container div:first-child').innerHTML+=
                            "<article class='card'>"+
                                "<header>"+
                                    "<h2>"+data.data[i].first_name+" "+data.data[i].last_name+"</h2>"+
                                "</header>"+    
                                "<img src='"+data.data[i].avatar+"' alt='Hot air balloons'>"+
                                "<div class'content'>"+
                                    "<p>"+
                                        "<h3>Email:</h3>"+
                                        "<span>"+data.data[i].email+"</span>"+
                                    "</p>"+
                                "</div>"+
                            "</article>"
                    }
                })
            })
}