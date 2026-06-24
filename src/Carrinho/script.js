$(document).ready(function(){
    //recupera o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atribuir a uma variável a lista do html
    const listaElement = $('#lista')
    //atribuir o total a variável total do id do html
    const totalElement = $("#total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            //criando um elemento de linha de lista para cada item com descrição e preço
            const listItem = $("<li>").text(`${item.desc} - Preco: $${item.preco}`)

            //criar um botao de remover o item
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function(){
                removerItem(index)
            })
            listItem.append(removeButton)
            listaElement.append(listItem)

            totalPreco += item.preco
        })
        totalElement.text(`Total: $${totalPreco}`)
    }
    function removerItem(index){
        carrinho.splice(index,1)
        localStorage.setItem("carrinho", JSON.stringify(carrinho))
        exibirCarrinho()
    }
    exibirCarrinho()

})
function gerar(){
    const listaElement = document.getElementById("lista")
    const totalElement = document.getElementById("total")
    const listaClone = totalElement.cloneNode(true)
    $(listaClone).find("button").remove()
    const listaHtml = listaClone.innerHTML
    const totalHtml = totalElement.innerHTML
    const conteudoHTML = `
        <html>
            <head>
                <meta charset="UTF-8">
            </head>
            <body>
                <h1>PEDIDO CONFIRMADO</h1>
                <h3>Agradecemos sua compra e sua preferência.</h3>
                <br>
                ${listaHtml}
                <br>
                <br>
                ${totalHtml}
            </body>
        </html>
    `
    const blob = new Blob([conteudoHTML], {type: "application/msword"})
    const link = document.createElement("a")

    link.href = URL.createObjectURL(blob)
    link.download = "pedido.doc"
    link.click()
    document.getElementById("pedido").style.display = "block"
}

function successClose(){
    document.getElementById("pedido").style.display = "none"
}