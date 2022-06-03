import axios  from 'axios'

const BACKEND_URL = 'https://testproject-1512436003058-default-rtdb.firebaseio.com';

export const storeExpense = (expenseData) => {
    console.log(expenseData);
    axios.post(BACKEND_URL+ '/expenses.json', expenseData)
}

export const fetchExpenses = async() => {
    const response = await axios.get(BACKEND_URL+'/expenses.json')
    const expenses = []
    
    for(const key in response.data){
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description
        }
        expenses.push(expenseObj)
    }
    console.log(expenses);
    return expenses;
}