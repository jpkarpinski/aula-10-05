$(document).ready(
    function(){
        alert('A página carregou com sucesso!')
        $.ajax({
            url:"http://192.168.10.85:9000/users",
            type:'GET',
            success:function(data){
                console.log(data)
            }
        })
    }
)

