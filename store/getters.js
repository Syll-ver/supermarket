export default {
    // inventory
    inventory: state => {
        return state.inventory
    },
    inventoryCounter: state => {
        var count = 0;
        state.inventory.map(inventory => {
            count += inventory.qty
        })
        return count;
    },
    
    // delivery
    delivery: state => {
        return state.delivery
    },
    deliveryCounter: state => {
        var count = 0;
        state.delivery.map(delivery => {
            count += delivery.qty
        })
        return count;
    },
    delivery_transactions: state => state.delivery_transactions,
    // suppliers
    suppliers: state => {
        return state.suppliers
    },
    supplierCounter: (state, suppliers) => {
        return state.suppliers.length
    },
    // customers
    getCustomers(state){
        return state.customers
    },
    customers: state => {
        return state.customers
    },
    customersCounter: state => {
        return customers.length;
    },

    // sales
    salesTransactions: state => {
        return state.salesTransaction;
    },
    salesCounter: state => {
        return sales.length;
    },

    // zero stocks
    zeroStocks: state => {
        var j = 0;
        state.inventory.map(inventory => {
            if(inventory.qty == 0){
                j += 1;
            }
        })
        console.log(j)
        return j
    },


    // =====================================================

    //roles
    rolesList(state) {
        return state.rolesList;
    },

    userList(state) {
        return state.userList;
    },

    inventoryList(state) {
        return state.inventoryList;
    },

    suppliersList(state) {
        return state.suppliersList;
    },

    deliveryList(state) {
        return state.deliveryList;
    },

    salesList(state) {
        return state.salesList;
    },

    getSelectedTransaction: state => {
        return state.selectedTransaction;
    },

    getSelectedDelivery: state => {
        const id = state.selectedDelivery;
        return (state.delivery_transactions_items.filter(
            delivery_transactions_items =>
            delivery_transactions_items.dr_no === id
            ));
    },

    getSelectedRole: state => {
        console.log('@here again: ', state.selectedRole)
        return state.selectedRole;
    },


}