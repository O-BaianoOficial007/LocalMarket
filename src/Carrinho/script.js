$(document).ready(function(){
    //recupera o carrinho do localstorage
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []
    //atribuir a uma variável a lista do html
    const listaElement = $("lista")
    //atribuir o total a variável total do id do html
    const totalElement = $("total")

    function exibirCarrinho(){
        listaElement.empty()
        let totalPreco = 0

        $.each(carrinho, function(index, item){
            //criando um elemento de linha de lista para cada item com descrição e preço
            const listItem = $("<li>").text(`${item.desc} - Preco: $${item.preco.toFixed(2)}`)

            //criar um botao de remover o item
            const removeButton = $("<button>").text("❌").css("margin-left", "10px").click(function(){
                removerItem(index)
            })
            listItem.append(removeButton)
            listaElement.append(listItem)

            totalPreco += item.preco
        })
        totalElement.text(`Total: $${totalPreco.toFixed(2)}`)
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
    const listaClone = listaElement.cloneNode(true)
    $(listaClone).find("button").remove()
    const listaHtml = 
}