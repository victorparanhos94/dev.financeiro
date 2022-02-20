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

const transactions = [
    {
        id: 1,
        description:'Luz',
        amount: -50000,
        date:'20/02/2022',

    },
    {
        id: 2,
        description:'Website',
        amount: 500000,
        date:'20/02/2022',

    },
    {
        id:3,
        description:'Internet',
        amount: -20000,
        date:'20/02/2022',

    },
]


const Transaction = {
    incomes(){
        //somar entradas
    },
    expenses(){
        //somar saídas
    },
    total(){
        //entradas - saídas
    },
}

const DOM = {
    innerHTMLTransaction() {
        const html = `
    <tr>
        <td class="description">Luz</td>
        <td class="expense">- R$ 500,00</td>
        <td class="date">23/01/2022</td>
        <td><img src="./assets/minus.svg" alt="Remover Transação"></td>
    </tr>
    `
        
    }
}