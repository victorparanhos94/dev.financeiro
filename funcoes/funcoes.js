let Modal = {
    open(){
        //Abrir modal
        //Adicionar a class active ao modal
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close() {
        //Fechar modal
        //Remover a class active ao modal
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}